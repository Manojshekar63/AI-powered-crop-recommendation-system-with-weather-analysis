"""Train a simple TensorFlow crop recommendation model.

Outputs (created in ml/artifacts/):
  - tf_model/ (Keras SavedModel)
  - preprocessor.joblib (sklearn ColumnTransformer)
  - label_encoder.joblib (sklearn LabelEncoder for target classes)
  - classes.txt (one crop label per line)

Dataset expectations (data/farm_data.csv):
  - Must include column 'target_crop' (string / categorical)
  - All other columns treated as feature candidates. Numeric vs categorical
    inferred by dtype (object -> categorical, number -> numeric).
"""

from __future__ import annotations

from pathlib import Path
import os
import joblib
import numpy as np
import pandas as pd
import tensorflow as tf
from sklearn.compose import ColumnTransformer
from sklearn.impute import SimpleImputer
from sklearn.model_selection import train_test_split
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OneHotEncoder, StandardScaler, LabelEncoder

ROOT = Path(__file__).resolve().parents[1]
DATA_PATH = ROOT / "data" / "farm_data.csv"
ARTIFACT_DIR = ROOT / "ml" / "artifacts"
MODEL_DIR = ARTIFACT_DIR / "tf_model"
ARTIFACT_DIR.mkdir(parents=True, exist_ok=True)


def load_data(path: Path) -> pd.DataFrame:
    if not path.exists():
        raise FileNotFoundError(
            f"Dataset not found at {path}. Provide 'farm_data.csv' in data/ directory."
        )
    df = pd.read_csv(path)
    if "target_crop" not in df.columns:
        raise ValueError("Dataset must contain 'target_crop' column.")
    if df.empty:
        raise ValueError("Dataset is empty.")
    return df


def build_preprocessor(df: pd.DataFrame):
    numeric_features = df.select_dtypes(include=[np.number]).columns.tolist()
    if "target_crop" in numeric_features:
        numeric_features.remove("target_crop")
    categorical_features = [
        c for c in df.columns if c not in numeric_features + ["target_crop"]
    ]

    numeric_pipeline = Pipeline(
        [
            ("imputer", SimpleImputer(strategy="median")),
            ("scaler", StandardScaler()),
        ]
    )
    categorical_pipeline = Pipeline(
        [
            ("imputer", SimpleImputer(strategy="most_frequent")),
            ("onehot", OneHotEncoder(handle_unknown="ignore")),
        ]
    )
    preprocessor = ColumnTransformer(
        [
            ("num", numeric_pipeline, numeric_features),
            ("cat", categorical_pipeline, categorical_features),
        ]
    )
    return preprocessor, numeric_features, categorical_features


def build_model(input_dim: int, output_dim: int) -> tf.keras.Model:
    model = tf.keras.Sequential(
        [
            tf.keras.layers.Input(shape=(input_dim,)),
            tf.keras.layers.Dense(128, activation="relu"),
            tf.keras.layers.Dropout(0.3),
            tf.keras.layers.Dense(64, activation="relu"),
            tf.keras.layers.Dropout(0.2),
            tf.keras.layers.Dense(output_dim, activation="softmax"),
        ]
    )
    model.compile(
        optimizer="adam",
        loss="sparse_categorical_crossentropy",
        metrics=["accuracy"],
    )
    return model


def main() -> None:
    print("[1/6] Loading data ...")
    df = load_data(DATA_PATH)
    preprocessor, num_feats, cat_feats = build_preprocessor(df)

    print("[2/6] Encoding labels ...")
    label_encoder = LabelEncoder()
    y = label_encoder.fit_transform(df["target_crop"])  # encoded labels
    X = df.drop(columns=["target_crop"])  # features

    print("[3/6] Fitting preprocessing pipeline ...")
    X_processed = preprocessor.fit_transform(X)
    input_dim = X_processed.shape[1]
    output_dim = len(label_encoder.classes_)

    print("[4/6] Splitting dataset ...")
    X_train, X_val, y_train, y_val = train_test_split(
        X_processed, y, test_size=0.2, random_state=42, stratify=y
    )

    print("[5/6] Training model ...")
    model = build_model(input_dim, output_dim)
    early = tf.keras.callbacks.EarlyStopping(
        monitor="val_loss", patience=8, restore_best_weights=True
    )
    epochs = int(os.getenv("EPOCHS", "60"))
    if os.getenv("QUICK", "0") == "1":
        epochs = min(epochs, 3)
    model.fit(
        getattr(X_train, "toarray", lambda: X_train)(),
        y_train,
        validation_data=(
            getattr(X_val, "toarray", lambda: X_val)(),
            y_val,
        ),
    epochs=epochs,
        batch_size=32,
        callbacks=[early],
        verbose=1,
    )

    print("[6/6] Saving artifacts ...")
    MODEL_DIR.mkdir(parents=True, exist_ok=True)
    model.save(MODEL_DIR)
    joblib.dump(preprocessor, ARTIFACT_DIR / "preprocessor.joblib")
    joblib.dump(label_encoder, ARTIFACT_DIR / "label_encoder.joblib")
    with open(ARTIFACT_DIR / "classes.txt", "w", encoding="utf-8") as f:
        for c in label_encoder.classes_:
            f.write(f"{c}\n")
    print("Done. Artifacts saved in ml/artifacts")


if __name__ == "__main__":  # pragma: no cover
    main()

