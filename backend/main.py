from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
import uvicorn

from db import DatabaseManager


# Database-Setup
DBM = DatabaseManager(db_name="../GeoInformatik.db")
DBM.create_all_Tables()

# create an instance of FastAPI
app = FastAPI()

# CORS-Richtlinien-Konfiguration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
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

class ProjectNameIn(BaseModel):
    projectName: str
    user: int

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
    
@app.post("/newSession/")
async def new_session(
    username: str = Form(...),
    projectName: str = Form(...),
    SessionName: str = Form(...),
    datetime: str = Form(...),
    file: UploadFile = File(...)
) -> dict:
    try:
        try:
            user = DBM.get_user_by_email(username)
            userId, email, password = user
        except:
            return {"message": "User Not Found"}
        
        try:
            project = DBM.get_project_by_name(userId=userId, projectName=projectName)
            projectId, creatorId, viewerId, projectname = project
        except:
            return {"message": "Project Not Found"}
        
        session = DBM.get_Session_by_SessionName(sessionname=SessionName, projectId=projectId)
        if session:
            return {"message": "Session already exists"}
        
        try:
            DBM.create_session(mainProjectId=projectId, sessionName=SessionName, MeasDate=datetime)
            session = DBM.get_Session_by_SessionName(sessionname=SessionName, projectId=projectId)
            sessionId, _, _, _ = session
        except:
            return {"message": "Session Not created"}
        
        # Hier kannst du den Dateiinhalt verarbeiten
        data = await file.read()
        lines = data.decode().split('\n')  # Split the content by lines

        for line in lines:
            parts = line.strip().split(',')  # Split each line into parts using comma
            if len(parts) == 4:  # Ensure each line has 4 parts (name, E, N, H)
                name, E, N, H = parts
                DBM.create_point(sessionId, [{"name": name, "E": float(E), "N": float(N), "H": float(H)}])


        # Füge hier den Rest deiner Logik hinzu, z.B. das Speichern der Daten in der Datenbank usw.

        return {"message": "Session Created"}

    except Exception as e:
        print(f"Fehler beim Verarbeiten der Anfrage: {e}")
        return {"message": "Ein Fehler ist aufgetreten"}
    
@app.post("/getSessions/")
async def get_sessions(project: ProjectNameIn) -> dict:
    print(project.projectName)
    project = DBM.get_project_by_name(projectName=project.projectName, userId=project.user)
    try:
        projectId, creatorId, viewerId, name = project
    except:
        return {"message": "Error"}

    sessions = DBM.get_sessions_by_projectId(projectId)
    try:
        sessions_data = []
        for session in sessions:
            sessionId, _, sessionName, datetime = session
            points = DBM.get_points_by_sessionId(sessionId)
            session_points = []
            for point in points:
                print(point)
                pointId, name, _, E, N, H = point
                session_points.append({
                    "pointId": pointId,
                    "name": name,
                    "E": E,
                    "N": N,
                    "H": H,
                })
            sessions_data.append({
                "sessionId": sessionId,
                "sessionName": sessionName,
                "datetime": datetime,
                "points": session_points
            })
        return {"message": "success",
                "sessions": sessions_data}
    except:
        print("Error")
        return {"message": "Error"}








# if App is shut down
@app.on_event("shutdown")
def shutdown_event():
    DBM.close_DB()

# run the app
uvicorn.run(app, host="localhost", port=8000)