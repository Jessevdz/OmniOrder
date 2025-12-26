import boto3
import uuid
import json
import logging
from botocore.exceptions import NoCredentialsError, ClientError
from app.core.config import settings

logger = logging.getLogger(__name__)


class S3Client:
    def __init__(self):
        self.s3 = boto3.client(
            "s3",
            endpoint_url=settings.S3_ENDPOINT,
            aws_access_key_id=settings.S3_ACCESS_KEY,
            aws_secret_access_key=settings.S3_SECRET_KEY,
            region_name=settings.S3_REGION,
        )
        self.bucket = settings.S3_BUCKET

        # Attempt to initialize on startup
        # We catch generic exceptions here to ensure the API doesn't crash
        # if MinIO is temporarily unavailable during boot.
        try:
            self._ensure_bucket_exists()
        except Exception as e:
            logger.warning(f"S3 Init Warning (Bucket check skipped): {e}")

    def _ensure_bucket_exists(self):
        """
        Idempotent check: Uses head_bucket to check existence.
        If 404, creates bucket and sets public policy.
        """
        try:
            self.s3.head_bucket(Bucket=self.bucket)
        except ClientError as e:
            error_code = e.response.get("Error", {}).get("Code")
            # 404 Not Found means bucket does not exist
            if error_code == "404":
                self._create_bucket()
            else:
                # Other errors (403 Forbidden, etc) should be raised
                raise e

    def _create_bucket(self):
        """Creates the bucket and applies a public read policy."""
        logger.info(f"Creating S3 Bucket: {self.bucket}")
        try:
            self.s3.create_bucket(Bucket=self.bucket)

            # Set Public Read Policy so images can be viewed in frontend
            policy = {
                "Version": "2012-10-17",
                "Statement": [
                    {
                        "Sid": "PublicRead",
                        "Effect": "Allow",
                        "Principal": "*",
                        "Action": ["s3:GetObject"],
                        "Resource": f"arn:aws:s3:::{self.bucket}/*",
                    }
                ],
            }
            self.s3.put_bucket_policy(Bucket=self.bucket, Policy=json.dumps(policy))
            logger.info(f"Bucket {self.bucket} created with public policy.")
        except Exception as e:
            logger.error(f"Failed to configure bucket {self.bucket}: {e}")
            raise e

    def upload_file(self, file_obj, content_type: str) -> str:
        """
        Uploads a file object to S3 and returns the public URL.
        Includes a retry mechanism for 'NoSuchBucket' errors.
        """
        # Generate unique filename
        extension = content_type.split("/")[-1]
        filename = f"{uuid.uuid4()}.{extension}"

        try:
            self.s3.upload_fileobj(
                file_obj, self.bucket, filename, ExtraArgs={"ContentType": content_type}
            )
        except ClientError as e:
            # Self-healing: If bucket is missing at runtime, create it and retry
            if e.response.get("Error", {}).get("Code") == "NoSuchBucket":
                logger.warning("Bucket missing during upload. Attempting to create...")
                self._create_bucket()
                # Retry upload
                self.s3.upload_fileobj(
                    file_obj,
                    self.bucket,
                    filename,
                    ExtraArgs={"ContentType": content_type},
                )
            else:
                raise e
        except NoCredentialsError:
            raise Exception("S3 Credentials not available")
        except Exception as e:
            logger.error(f"Upload failed: {e}")
            raise e

        # Construct public URL
        # Note: In production with AWS S3, this URL structure might differ.
        return f"{settings.S3_PUBLIC_ENDPOINT}/{self.bucket}/{filename}"


s3_client = S3Client()
