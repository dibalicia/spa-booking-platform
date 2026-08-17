from fastapi import FastAPI

app = FastAPI(
    title="Spa Booking Platform API",
    description="Booking and payment system for the spa",
    version="0.1.0",
)


@app.get("/health")
def health_check():
    """Simple health check endpoint to confirm the API is running."""
    return {"status": "ok"}