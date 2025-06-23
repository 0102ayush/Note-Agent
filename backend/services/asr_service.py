import speech_recognition as sr
import asyncio

class ASRService:
    def __init__(self):
        self.recognizer = sr.Recognizer()

    async def transcribe(self, audio_file) -> str:
        with sr.AudioFile(audio_file.file) as source:
            audio = self.recognizer.record(source)  # Load audio file
            try:
                # Use Google Speech Recognition (free tier, supports multiple languages)
                text = self.recognizer.recognize_google(audio, language="en-US")  # Default to English
                return text
            except sr.UnknownValueError:
                return "Could not understand audio"
            except sr.RequestError as e:
                return f"API error: {e}"