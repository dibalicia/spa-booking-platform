from datetime import datetime

from pydantic import BaseModel

from app.models.appointments import AppointmentStatus, PaymentStatus


class AppointmentCreate(BaseModel):
    staff_id: int
    service_id: int
    customer_name: str
    customer_email: str
    customer_phone: str | None = None
    start_time: datetime


class AppointmentOut(BaseModel):
    id: int
    staff_id: int
    service_id: int
    customer_name: str
    customer_email: str
    customer_phone: str | None
    start_time: datetime
    end_time: datetime
    status: AppointmentStatus
    payment_status: PaymentStatus

    class Config:
        from_attributes = True