import boto3
import uuid
from botocore.exceptions import NoCredentialsError
from app.core.config import settings


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

    def upload_file(self, file_obj, content_type: str) -> str:
        """
        Uploads a file object to S3 and returns the public URL.
        """
        # Generate unique filename
        extension = content_type.split("/")[-1]
        filename = f"{uuid.uuid4()}.{extension}"

        try:
            self.s3.upload_fileobj(
                file_obj, self.bucket, filename, ExtraArgs={"ContentType": content_type}
            )

            # Construct public URL
            # Note: In production with AWS S3, this URL structure might differ.
            return f"{settings.S3_PUBLIC_ENDPOINT}/{self.bucket}/{filename}"

        except NoCredentialsError:
            raise Exception("S3 Credentials not available")
        except Exception as e:
            print(f"Upload failed: {e}")
            raise e


s3_client = S3Client()
