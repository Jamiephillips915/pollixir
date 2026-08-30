from fastapi import FastAPI, HTTPException;
from fastapi.middleware.cors import CORSMiddleware;
import requests;

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/wards/count/{ward}")


