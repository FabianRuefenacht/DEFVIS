from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
import sqlite3



con = sqlite3.connect("GeoInformatik.db")
cur = con.cursor()
cur.execute("CREATE TABLE IF NOT EXISTS users(email UNIQUE, password)")

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

class UserCreated(BaseModel):
    created: str

# Post-Route für Registrierung
@app.post("/user/")
async def create_user(user: UserIn) -> UserCreated:
    try:
        cur.execute("INSERT INTO users (email, password) VALUES (?, ?)", (user.email, user.password))
        con.commit()
        return {"created": "true"}
    except:
        return {"created": "false"}

@app.on_event("shutdown")
def shutdown_event():
    con.close()