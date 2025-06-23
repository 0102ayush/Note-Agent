from config.config import Config  # Update this line
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph
import sqlite3

class StorageService:
    @staticmethod
    def save_to_db(transcription: str, summary: str):
        conn = sqlite3.connect(Config.DATABASE_URL)
        cursor = conn.cursor()
        cursor.execute(
            "INSERT INTO notes (transcription, summary) VALUES (?, ?)",
            (transcription, summary)
        )
        conn.commit()
        conn.close()

    @staticmethod
    def export_to_pdf(transcription: str, summary: str, filename: str):
        pdf = SimpleDocTemplate(f"{Config.EXPORT_DIR}/{filename}.pdf", pagesize=letter)
        content = [
            Paragraph("Transcription:", style=None),
            Paragraph(transcription, style=None),
            Paragraph("Summary:", style=None),
            Paragraph(summary, style=None),
        ]
        pdf.build(content)