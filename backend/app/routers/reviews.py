import os

import requests
from fastapi import APIRouter, HTTPException

router = APIRouter(prefix="/reviews", tags=["reviews"])

GOOGLE_API_KEY = os.getenv("GOOGLE_PLACES_API_KEY")
PLACE_ID = os.getenv("GOOGLE_PLACE_ID")


@router.get("/")
def get_reviews():
    """Fetch live Google reviews and rating for the spa."""
    if not GOOGLE_API_KEY or not PLACE_ID:
        raise HTTPException(status_code=500, detail="Google Places API not configured")

    url = "https://maps.googleapis.com/maps/api/place/details/json"
    params = {
        "place_id": PLACE_ID,
        "fields": "name,rating,user_ratings_total,reviews",
        "key": GOOGLE_API_KEY,
    }

    response = requests.get(url, params=params)
    data = response.json()

    if data.get("status") != "OK":
        raise HTTPException(status_code=502, detail="Failed to fetch reviews from Google")

    result = data.get("result", {})
    return {
        "name": result.get("name"),
        "rating": result.get("rating"),
        "total_ratings": result.get("user_ratings_total"),
        "reviews": result.get("reviews", []),
    }