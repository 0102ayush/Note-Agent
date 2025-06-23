from fastapi import FastAPI, UploadFile, File
from services.asr_service import ASRService
from services.storage_service import StorageService
from models.summarizer import Summarizer
import asyncio
import shutil
import os

app = FastAPI()
asr = ASRService()
summarizer = Summarizer()
storage = StorageService()

@app.post("/transcribe")
async def process_audio(file: UploadFile = File(...)):
    # Save uploaded file temporarily
    temp_path = f"./audio_files/{file.filename}"
    os.makedirs(os.path.dirname(temp_path), exist_ok=True)
    with open(temp_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # Transcribe
    transcription = await asr.transcribe(temp_path)
    summary = summarizer.summarize(transcription)

    # Store and export
    storage.save_to_db(transcription, summary)
    os.makedirs(Config.EXPORT_DIR, exist_ok=True)
    storage.export_to_pdf(transcription, summary, f"meeting_{file.filename.split('.')[0]}")

    return {"transcription": transcription, "summary": summary}

@app.get("/search")
async def search_notes(keyword: str):
    conn = sqlite3.connect("notes.db")
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM notes WHERE transcription LIKE ?", (f"%{keyword}%",))
    results = cursor.fetchall()
    conn.close()
    return {"results": [{"id": row[0], "transcription": row[1], "summary": row[2], "created_at": row[3]} for row in results]}