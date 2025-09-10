# backend/main.py
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # or ["http://localhost:3000"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Bill(BaseModel):
    billAmount: float

@app.post("/calculate")
def calculate(bill: Bill):
    result = bill.billAmount * 1.18  # Example: add 18% tax
    return {"result": result}
