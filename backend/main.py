from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
import uvicorn

from db import DatabaseManager


# Database-Setup
DBM = DatabaseManager(db_name="GeoInformatik.db")
DBM.create_all_Tables()

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

class ProjectIn(BaseModel):
    projectName: str
    userEmail: EmailStr
    clientEmail: EmailStr

# Post-Route for Registration
@app.post("/user/")
async def create_user(user: UserIn) -> UserCreated:
    try:
        DBM.create_user(email=user.email, password=user.password)
        return {"created": "true"}
    except:
        return {"created": "false"}
    
# Post-Route for Login
@app.post("/login/")
async def check_login(user: UserIn) -> dict:
    try:
        emailIn = user.email
        _ = user.password # Check wether passwords match is dealt in frontend

        # SQL-Query
        result = DBM.get_user_by_email(email=emailIn)

        if result: # if user is found
                return {"userId": result[0], "email": result[1], "password": result[2] }
        else: # if user is not yet registered
            return {"email": "noUserFound@notfound.ch"}

    except Exception as e: # handling of Errors may occuring
        return {"error": str(e)}
    
@app.post("/newProject/")
async def create_Project(project: ProjectIn) -> dict:

    try:
        projectNameIn = project.projectName
        userEmail = project.userEmail
        clientEmail = project.clientEmail
        clientResult = DBM.get_user_by_email(clientEmail)
        if not clientResult:
            return {"created": "CNF"}

        userResult = DBM.get_user_by_email(userEmail)
        userId, _, _ = userResult
        
        projectAlreadyExists = DBM.get_project_by_name(userId=userId, projectName=projectNameIn)
        if projectAlreadyExists:
            return {"created": "PAEX"}

        clientId, _, _ = clientResult

        DBM.create_project(creator_id=userId, viewer_id=clientId, project_name=projectNameIn)
        return {"created": "true"}
    except:
        return {"created": "false"}
    
@app.post("/openProject/")
async def open_Project(user: UserIn) -> dict:
    email = user.email

    userResult = DBM.get_user_by_email(email=email)
    try:
        userId, _, _ = userResult

        projects = DBM.get_project_by_userId(userId=userId, viewerId=userId)
        return {"userId": userId, "exec": projects}
    except:
        return {"exec": "error"}



# if App is shut down
@app.on_event("shutdown")
def shutdown_event():
    DBM.close_DB()

# run the app
uvicorn.run(app, host="localhost", port=8000)