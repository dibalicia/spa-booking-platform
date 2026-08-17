import enum

from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Enum
from sqlalchemy.orm import relationship

from app.core.database import Base


class AppointmentStatus(str, enum.Enum):
    pending = "pending"
    confirmed = "confirmed"
    cancelled = "cancelled"


class PaymentStatus(str, enum.Enum):
    unpaid = "unpaid"
    paid = "paid"
    refunded = "refunded"


class Appointment(Base):
    __tablename__ = "appointments"

    id = Column(Integer, primary_key=True, index=True)

    staff_id = Column(Integer, ForeignKey("staff.id"), nullable=False)
    service_id = Column(Integer, ForeignKey("services.id"), nullable=False)

    customer_name = Column(String, nullable=False)
    customer_email = Column(String, nullable=False)
    customer_phone = Column(String, nullable=True)

    start_time = Column(DateTime, nullable=False)
    end_time = Column(DateTime, nullable=False)

    status = Column(Enum(AppointmentStatus), default=AppointmentStatus.pending)
    payment_status = Column(Enum(PaymentStatus), default=PaymentStatus.unpaid)

    created_at = Column(DateTime, nullable=False)

    staff = relationship("Staff")
    service = relationship("Service")