# C:\Users\ashut\OneDrive\Desktop\Note-Agent-main\backend\database\db.py
from config.config import Config  # Explicitly import from config.py
import sqlite3

def init_db():
    conn = sqlite3.connect(Config.DATABASE_URL)
    cursor = conn.cursor()
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS notes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            transcription TEXT NOT NULL,
            summary TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    """)
    conn.commit()
    conn.close()