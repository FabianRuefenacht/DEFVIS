from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr

app = FastAPI()

# CORS-Richtlinien-Konfiguration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)

# Aufbau des Users
class UserIn(BaseModel):
    email: EmailStr
    password: str

# Post-Route für Registrierung
@app.post("/user/")
async def create_user(user: UserIn) -> UserIn:
    return user
