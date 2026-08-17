from app.core.database import SessionLocal
from app.models.staff import Staff
from app.models.service import Service


def seed():
    db = SessionLocal()

    # Only seed if the database is empty, so this is safe to run more than once.
    if db.query(Staff).count() == 0:
        staff_members = [
            Staff(name="Sara", role="Massage Therapist"),
            Staff(name="Lina", role="Esthetician"),
        ]
        db.add_all(staff_members)

    if db.query(Service).count() == 0:
        services = [
            Service(
                name="Swedish Massage",
                description="A relaxing full-body massage",
                duration_minutes=60,
                price=45.0,
            ),
            Service(
                name="Deep Tissue Massage",
                description="Targeted massage for muscle tension",
                duration_minutes=60,
                price=55.0,
            ),
            Service(
                name="Classic Facial",
                description="Cleansing and hydrating facial treatment",
                duration_minutes=45,
                price=40.0,
            ),
        ]
        db.add_all(services)

    db.commit()
    db.close()
    print("Database seeded successfully.")


if __name__ == "__main__":
    seed()