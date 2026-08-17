from fastapi import FastAPI

from app.core.database import Base, engine
from app.models import staff, service, appointments

# Create all tables defined by our models, if they don't already exist.
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Spa Booking Platform API",
    description="Booking and payment system for the spa",
    version="0.1.0",
)


@app.get("/health")
def health_check():
    """Simple health check endpoint to confirm the API is running."""
    return {"status": "ok"}