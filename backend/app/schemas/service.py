from pydantic import BaseModel


class ServiceOut(BaseModel):
    id: int
    name: str
    description: str | None
    duration_minutes: int
    price: float
    active: bool

    class Config:
        from_attributes = True