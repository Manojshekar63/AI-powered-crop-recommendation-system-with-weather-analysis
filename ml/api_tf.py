from __future__ import annotations

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pandas as pd
import numpy as np
import joblib
import tensorflow as tf
from pathlib import Path

app = FastAPI(title="Crop Recommendation (TensorFlow)")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:8080",
        "http://127.0.0.1:8080",
        "*",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

ROOT = Path(__file__).resolve().parents[1]
ARTIFACT_DIR = ROOT / "ml" / "artifacts"
MODEL_DIR = ARTIFACT_DIR / "tf_model"
PREPROCESSOR_PATH = ARTIFACT_DIR / "preprocessor.joblib"
LABEL_ENCODER_PATH = ARTIFACT_DIR / "label_encoder.joblib"

preprocessor = None
label_encoder = None
model = None


class Features(BaseModel):
    soil_ph: float
    nitrogen: float
    phosphorus: float
    potassium: float
    organic_carbon: float
    soil_texture: str
    rainfall: float
    temperature: float
    humidity: float


def _load_artifacts():
    global preprocessor, label_encoder, model
    if preprocessor is None:
        preprocessor = joblib.load(PREPROCESSOR_PATH)
    if label_encoder is None:
        label_encoder = joblib.load(LABEL_ENCODER_PATH)
    if model is None:
        model = tf.keras.models.load_model(MODEL_DIR)


@app.on_event("startup")
async def startup_event():
    _load_artifacts()


@app.get("/health")
async def health():
    _load_artifacts()
    return {"status": "ok", "classes": list(label_encoder.classes_)}


@app.post("/predict")
async def predict(f: Features):
    _load_artifacts()
    df = pd.DataFrame([f.dict()])
    X = preprocessor.transform(df)
    preds = model.predict(X)
    probs = preds[0].astype(float)
    top_idx = int(np.argmax(probs))
    top_crop = label_encoder.inverse_transform([top_idx])[0]
    class_probs = {cls: float(p) for cls, p in zip(label_encoder.classes_, probs)}
    return {"recommended_crop": top_crop, "probabilities": class_probs}


# Run with: uvicorn ml.api_tf:app --reload --port 8001
