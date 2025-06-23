# C:\Users\ashut\OneDrive\Desktop\Note-Agent-main\backend\models\summarizer.py
import openrouter
from langchain_openai import OpenAI  # Updated import
from langchain.chains.summarize import load_summarize_chain
from langchain.text_splitter import RecursiveCharacterTextSplitter

class Summarizer:
    def __init__(self):
        openrouter.api_key = "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"  # Replace with your actual API key
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