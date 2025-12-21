from fastapi import APIRouter, UploadFile, File, HTTPException, Depends
from app.core.storage import s3_client
from app.api.v1.deps import get_current_user
from app.db.models import User

router = APIRouter()


@router.post("/upload")
async def upload_image(
    file: UploadFile = File(...), current_user: User = Depends(get_current_user)
):
    """
    Upload an image to object storage.
    Only authenticated users can upload.
    """
    # 1. Validate File Type
    if file.content_type not in ["image/jpeg", "image/png", "image/webp"]:
        raise HTTPException(
            400, detail="Invalid file type. Only JPEG, PNG, WEBP allowed."
        )

    # 2. Validate Size (Basic check via spool reading, strictly requires Nginx/Starlette limits in prod)
    # Here we proceed with upload logic

    try:
        url = s3_client.upload_file(file.file, file.content_type)
        return {"url": url}
    except Exception as e:
        raise HTTPException(500, detail=f"Image upload failed: {str(e)}")
