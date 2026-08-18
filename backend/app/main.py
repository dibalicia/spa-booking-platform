from fastapi import FastAPI
from dotenv import load_dotenv
load_dotenv()

from app.core.database import Base, engine
from app.models import staff, service, appointments
from app.routers import services, appointments as appointments_router, reviews

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Spa Booking Platform API",
    description="Booking and payment system for the spa",
    version="0.1.0",
)

app.include_router(services.router)
app.include_router(appointments_router.router)
app.include_router(reviews.router)


@app.get("/health")
def health_check():
    """Simple health check endpoint to confirm the API is running."""
    return {"status": "ok"}