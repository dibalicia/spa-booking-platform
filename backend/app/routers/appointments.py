from datetime import datetime, timedelta

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy import and_

from app.core.database import get_db
from app.models.service import Service
from app.models.appointments import Appointment, AppointmentStatus
from app.schemas.appointment import AppointmentCreate, AppointmentOut

router = APIRouter(prefix="/appointments", tags=["appointments"])


@router.post("/", response_model=AppointmentOut)
def create_appointment(appointment: AppointmentCreate, db: Session = Depends(get_db)):
    # 1. Look up the service to get its duration.
    service = db.query(Service).filter(Service.id == appointment.service_id).first()
    if not service:
        raise HTTPException(status_code=404, detail="Service not found")

    # 2. Calculate when the appointment will end.
    end_time = appointment.start_time + timedelta(minutes=service.duration_minutes)

    # 3. Check the staff member isn't already booked during this window.
    conflict = (
        db.query(Appointment)
        .filter(
            Appointment.staff_id == appointment.staff_id,
            Appointment.status != AppointmentStatus.cancelled,
            and_(
                Appointment.start_time < end_time,
                Appointment.end_time > appointment.start_time,
            ),
        )
        .first()
    )
    if conflict:
        raise HTTPException(
            status_code=409,
            detail="This staff member is already booked during that time.",
        )

    # 4. Create and save the new appointment.
    new_appointment = Appointment(
        staff_id=appointment.staff_id,
        service_id=appointment.service_id,
        customer_name=appointment.customer_name,
        customer_email=appointment.customer_email,
        customer_phone=appointment.customer_phone,
        start_time=appointment.start_time,
        end_time=end_time,
        status=AppointmentStatus.pending,
        created_at=datetime.utcnow(),
    )
    db.add(new_appointment)
    db.commit()
    db.refresh(new_appointment)

    return new_appointment