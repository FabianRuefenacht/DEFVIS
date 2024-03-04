from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
import sqlite3
import uvicorn


# Database-Setup
con = sqlite3.connect("GeoInformatik.db")
cur = con.cursor()
cur.execute("CREATE TABLE IF NOT EXISTS users(email UNIQUE, password)")

# create an instance of FastAPI
app = FastAPI()

# CORS-Richtlinien-Konfiguration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)

# Class of User-Input
class UserIn(BaseModel):
    email: EmailStr
    password: str

# Class of User-Output
class UserCreated(BaseModel):
    created: str

# Post-Route for Registration
@app.post("/user/")
async def create_user(user: UserIn) -> UserCreated:
    try:
        cur.execute("INSERT INTO users (email, password) VALUES (?, ?)", (user.email, user.password))
        con.commit()
        return {"created": "true"}
    except:
        return {"created": "false"}
    
# Post-Route for Login
@app.post("/login/")
async def check_login(user: UserIn) -> dict:
    try:
        emailIn = user.email
        passwordIn = user.password # Check wether passwords match is dealt in frontend

        # SQL-Query
        cur.execute("SELECT email, password FROM users WHERE email = ?", (emailIn,))
        result = cur.fetchone()

        if result: # if user is found
                return {"email": result[0], "password": result[1] }
        else: # if user is not yet registered
            return {"email": "noUserFound@notfound.ch"}

    except Exception as e: # handling of Errors may occuring
        return {"error": str(e)}

# if App is shut down
@app.on_event("shutdown")
def shutdown_event():
    con.close()

# run the app
uvicorn.run(app, host="localhost", port=8000)