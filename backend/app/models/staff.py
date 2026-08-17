from sqlalchemy import Column, Integer, String, Boolean

from app.core.database import Base


class Staff(Base):
    __tablename__ = "staff"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    role = Column(String, nullable=True)
    active = Column(Boolean, default=True)