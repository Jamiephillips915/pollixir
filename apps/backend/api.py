from fastapi import FastAPI, HTTPException;
from fastapi.middleware.cors import CORSMiddleware;
from pydantic import BaseModel;
import requests;
import pandas as pd;

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

try:
    #on_to_ward_lookup = pd.read_csv("apps/backend/Ward_To_Constituency_Lookup.csv")
    con_to_ward_lookup = pd.read_csv("Ward_to_Constituency_Lookup.csv")
    #ward_households_lookup = pd.read_csv("apps/backend/Ward_Households.csv")
    ward_households_lookup = pd.read_csv("Ward_Households.csv")
except:
    raise HTTPException(status_code="144", detail="Lookup File Not Found")

@app.get("/fetchWards/")
def FetchWards(constituency: str):
    ward_array = []
    for row in con_to_ward_lookup.itertuples():
        if row[3] == constituency:
            ward_array.append(row[2])
    return ward_array

@app.get("/wardCount/")
def WardCount(constituency: str):
    return len(FetchWards(constituency))

class WardListRequest(BaseModel):
    wards: list[str]

@app.post("/wardHouseholds/")
def WardHouseholds(payload: WardListRequest):
    print(payload)
    return [WardHousehold(ward) for ward in payload.wards]


def WardHousehold(ward: str):
    household = 0
    for row in ward_households_lookup.itertuples():
        if ward in row[1]:
            household = row[2]
            household = household.replace(",", "")
            return household