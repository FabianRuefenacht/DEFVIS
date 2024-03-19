import sqlite3

class DatabaseManager:
    def __init__(self, db_name) -> None:
        self.db_name = db_name
        self.connection = None
        self.cursor = None

    # Set up DB
    def connect_DB(self):
        self.connection = sqlite3.connect(self.db_name)
        self.cursor = self.connection.cursor()

    def close_DB(self):
        if self.connection:
            self.connection.commit()
            self.connection.close()
            self.connection = None
            self.cursor = None

    # Create tables
    def create_users(self) -> None:
        self.cursor.execute("""CREATE TABLE IF NOT EXISTS users(
                    userId INTEGER PRIMARY KEY,
                    email TEXT UNIQUE,
                    password TEXT
                    )""")

    def create_projects(self) -> None:
        self.cursor.execute("""CREATE TABLE IF NOT EXISTS projects(
                    projectId INTEGER PRIMARY KEY,
                    creatorId INTEGER,
                    viewerId INTEGER,
                    projectName TEXT,
                    FOREIGN KEY(creatorId) REFERENCES users(userId),
                    FOREIGN KEY(viewerId) REFERENCES users(userId)
                    )""")

    def create_sessions(self) -> None:
        self.cursor.execute("""CREATE TABLE IF NOT EXISTS sessions(
                    sessionId INTEGER PRIMARY KEY,
                    mainProjectId INTEGER,
                    sessionName TEXT,
                    dateTime TEXT,
                    FOREIGN KEY(mainProjectId) REFERENCES projects(projectId)
                    )""")

    def create_points(self) -> None:
        self.cursor.execute("""CREATE TABLE IF NOT EXISTS points(
                    pointId INTEGER PRIMARY KEY,
                    name TEXT,
                    mainSessionId INTEGER,
                    E REAL,
                    N REAL,
                    H REAL,
                    FOREIGN KEY(mainSessionId) REFERENCES sessions(sessionId)
                    )""")
        
    def create_all_Tables(self) -> None:
        self.connect_DB()
        self.create_users()
        self.create_projects()
        self.create_sessions()
        self.create_points()
        self.close_DB()

    def drop_all_Tables(self) -> None:
        self.connect_DB()
        self.cursor.execute("DROP TABLE IF EXISTS points")
        self.cursor.execute("DROP TABLE IF EXISTS sessions")
        self.cursor.execute("DROP TABLE IF EXISTS projects")
        self.cursor.execute("DROP TABLE IF EXISTS users")
        self.close_DB()

    # Interaction with user table
    def create_user(self, email: str, password: str) -> None:
        self.connect_DB()
        self.cursor.execute("INSERT INTO users (email, password) VALUES (?, ?)", (email, password))
        self.close_DB()
    
    def get_user_by_email(self, email: str) -> list:
        self.connect_DB()
        self.cursor.execute("SELECT * FROM users WHERE email = ?", (email,))
        result = self.cursor.fetchone()
        self.close_DB()
        return result
    
    # Interaction with projects table
    def create_project(self, creator_id: int, viewer_id: int, project_name: str) -> None:
        self.connect_DB()
        self.cursor.execute("INSERT INTO projects (creatorId, viewerId, projectName) VALUES (?, ?, ?)", (creator_id, viewer_id, project_name))
        self.close_DB()

    def get_project_by_userId(self, userId: int, viewerId: int) -> list:
        self.connect_DB()
        self.cursor.execute("SELECT * FROM projects WHERE creatorId = ? OR viewerId = ?", (userId, viewerId))
        projects = self.cursor.fetchall()
        self.close_DB()
        return projects

    def get_project_by_name(self, userId: int, projectName: str) -> list:
        self.connect_DB()
        self.cursor.execute("SELECT * FROM projects WHERE creatorId = ? AND projectName = ?", (userId, projectName,))
        project = self.cursor.fetchone()
        self.close_DB()
        return project

        
    # Interaction with sessions table
    def create_session(self, mainProjectId: int, sessionName: str, MeasDate: str) -> None:
        self.connect_DB()
        self.cursor.execute("INSERT INTO sessions (mainProjectId, sessionName, dateTime) VALUES (?, ?, ?)", (mainProjectId, sessionName, MeasDate))
        self.close_DB()

    def get_sessions_by_projectId(self, mainProjectId: int) -> list:
        self.connect_DB()
        self.cursor.execute("SELECT * FROM sessions WHERE mainProjectId = ?", (mainProjectId,))
        sessions = self.cursor.fetchall()
        self.close_DB()
        return sessions
    
    def get_Session_by_SessionName(self, sessionname: str, projectId: int) -> list:
        self.connect_DB()
        self.cursor.execute("SELECT * FROM sessions WHERE sessionName = ? AND mainProjectId = ?", (sessionname, projectId))
        session = self.cursor.fetchone()
        self.close_DB()
        return session
    

    def create_point(self, mainSessionId: int, points: list) -> None:
        self.connect_DB()
        data = [(mainSessionId, point.get('name', ''), point.get('E', 0.0), point.get('N', 0.0), point.get('H', 0.0)) for point in points]
        self.cursor.executemany("INSERT INTO points (mainSessionId, name, E, N, H) VALUES (?, ?, ?, ?, ?)", data)
        self.close_DB()



    def get_points_by_sessionId(self, mainSessionId: int) -> list:
        self.connect_DB()
        self.cursor.execute("SELECT * FROM points WHERE mainSessionId = ?", (mainSessionId,))
        points = self.cursor.fetchall()
        self.close_DB()
        return points


