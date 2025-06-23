# C:\Users\ashut\OneDrive\Desktop\Note-Agent-main\backend\models\summarizer.py
# summarizer.py
import os
from dotenv import load_dotenv
import openrouter
from langchain_openai import OpenAI
from langchain.chains.summarize import load_summarize_chain
from langchain.text_splitter import RecursiveCharacterTextSplitter

class Summarizer:
    def __init__(self):
        load_dotenv()
        openrouter.api_key = os.getenv("OPENROUTER_API_KEY")
        self.llm = OpenAI(
            api_key=openrouter.api_key,
            base_url="https://openrouter.ai/api/v1",
            model="meta-llama/llama-4-maverick:free"
        )
        self.chain = load_summarize_chain(self.llm, chain_type="map_reduce")

    def summarize(self, text: str) -> str:
        splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
        chunks = splitter.split_text(text)
        summary = self.chain.run(chunks)
        return f"Summary: {summary}\nAction Points: [TBD - Extract from text]"
