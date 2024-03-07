import sqlite3

class DatabaseManager:
    def __init__(self, db_name) -> None:
        self.db_name = db_name
        self.connection = None
        self.cursor = None

    def connect_DB(self):
        self.connection = sqlite3.connect(self.db_name)
        self.cur = self.connection.cursor()

    def close_DB(self):
        if self.connection:
            self.connection.commit()
            self.connection.close()

    def create_users(self) -> None:
        self.cur.execute("""CREATE TABLE IF NOT EXISTS users(
                    userId INTEGER PRIMARY KEY,
                    email TEXT UNIQUE,
                    password TEXT
                    )""")

    def create_projects(self) -> None:
        self.cur.execute("""CREATE TABLE IF NOT EXISTS projects(
                    projectId INTEGER PRIMARY KEY,
                    creatorId INTEGER,
                    viewerId INTEGER,
                    projectName TEXT,
                    FOREIGN KEY(creatorId) REFERENCES users(userId),
                    FOREIGN KEY(viewerId) REFERENCES users(userId)
                    )""")

    def create_sessions(self) -> None:
        self.cur.execute("""CREATE TABLE IF NOT EXISTS sessions(
                    sessionId INTEGER PRIMARY KEY,
                    mainProjectId INTEGER,
                    sessionName TEXT,
                    FOREIGN KEY(mainProjectId) REFERENCES projects(projectId)
                    )""")

    def create_points(self) -> None:
        self.cur.execute("""CREATE TABLE IF NOT EXISTS points(
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
        self.cur.execute("DROP TABLE IF EXISTS points")
        self.cur.execute("DROP TABLE IF EXISTS sessions")
        self.cur.execute("DROP TABLE IF EXISTS projects")
        self.cur.execute("DROP TABLE IF EXISTS users")
        self.close_DB()