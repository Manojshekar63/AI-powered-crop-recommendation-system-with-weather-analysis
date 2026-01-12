# ML Training Pipeline

This directory contains the training script and artifacts for the crop recommendation model.

## Files
- `train_tensorflow.py` – trains a simple dense neural network using TensorFlow/Keras.
- `artifacts/` – output directory created after training:
  - `tf_model/` – SavedModel format
  - `preprocessor.joblib` – fitted sklearn `ColumnTransformer`
  - `label_encoder.joblib` – fitted `LabelEncoder` for target labels
  - `classes.txt` – one class label per line (human readable list)

## Dataset
Expected CSV path: `data/farm_data.csv`

Required column:
- `target_crop` (string) – label to predict

All other columns are automatically split into numeric vs categorical features by dtype:
- Numeric (float/int) -> scaled (median impute + StandardScaler)
- Categorical (object/string) -> imputed (most frequent) + OneHotEncoder

A small sample dataset is provided for demonstration. Replace it with a larger real dataset for improved performance.

## How to Retrain
```bash
# (Optional) create & activate a virtual environment first
# python -m venv .venv
# .venv\Scripts\activate  (Windows PowerShell)

pip install tensorflow scikit-learn pandas numpy joblib
python ml/train_tensorflow.py
```
Artifacts will appear under `ml/artifacts/` on success.

## Integration Outline (Frontend or API)
1. Load the preprocessor and label encoder (Python backend or convert model to TF.js if running in browser).
2. Collect user input (soil + weather + management features).
3. Build a single-row DataFrame with the same columns as training.
4. Apply the preprocessor transform.
5. Run `model.predict(processed_row)` and take `argmax`.
6. Map index to crop label using `label_encoder.classes_` (or `classes.txt`).

## Converting to TF.js (Optional)
```bash
pip install tensorflowjs
tensorflowjs_converter --input_format=tf_saved_model \
  --signature_name=serving_default \
  --saved_model_tags=serve \
  ml/artifacts/tf_model \
  ml/artifacts/tfjs_model
```
Then load in the browser with `@tensorflow/tfjs`.

## Notes
- Do not commit large real datasets. Keep only small samples.
- You can version model improvements by adding a subfolder like `artifacts/v2/`.
- Consider adding evaluation metrics logging (accuracy, F1) for larger datasets.
