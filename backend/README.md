# ForecastIQ API

FastAPI backend for the ForecastIQ sales forecasting platform.

## Setup

```bash
cd backend
python -m venv .venv
source .venv/bin/activate          # Windows: .venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
uvicorn app.main:app --reload --port 8000
```

API docs: http://localhost:8000/docs

## Endpoints

| Method | Path                     | Description                          |
|--------|--------------------------|---------------------------------------|
| POST   | `/api/auth/register`     | Create a user account                 |
| POST   | `/api/auth/login`        | Get a JWT access token                |
| POST   | `/api/datasets/upload`   | Upload & validate a sales-history CSV |
| POST   | `/api/forecast`          | Run a forecast (ARIMA/SARIMA/Prophet/LSTM) |
| GET    | `/api/inventory/alerts`  | Stock / reorder / overstock alerts    |
| POST   | `/api/reports/excel`     | Export a forecast as `.xlsx`          |
| POST   | `/api/reports/pdf`       | Export a forecast as `.pdf`           |
| GET    | `/api/health`            | Health check                          |

## Notes

- `DATABASE_URL` defaults to PostgreSQL; swap for a `sqlite:///./forecastiq.db`
  URL for quick local testing without a Postgres instance.
- Prophet/TensorFlow are optional — `app/services/forecasting.py` degrades to
  a trend-based fallback if those packages aren't installed, so the API stays
  runnable on a lightweight install (`pip install -r requirements.txt` minus
  `prophet`).
- Wire a trained LSTM checkpoint into `forecast_lstm()` for production use.
