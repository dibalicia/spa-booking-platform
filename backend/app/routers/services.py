from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.models.service import Service
from app.schemas.service import ServiceOut

router = APIRouter(prefix="/services", tags=["services"])


@router.get("/", response_model=list[ServiceOut])
def list_services(db: Session = Depends(get_db)):
    """Return all active services that clients can book."""
    return db.query(Service).filter(Service.active == True).all()