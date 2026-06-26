# ForecastIQ — E-Commerce Sales Prediction Platform

AI-powered sales forecasting and inventory optimization for retail and
e-commerce teams. Predict demand by SKU, visualize trends, and turn forecasts
into reorder actions.

```
forecastiq/
  frontend/   React + Vite + Tailwind CSS landing page & dashboard
  backend/    FastAPI service: auth, dataset upload, forecasting, inventory, reports
```

## Quick start

**Frontend**
```bash
cd frontend
npm install
npm run dev
```

**Backend**
```bash
cd backend
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
uvicorn app.main:app --reload --port 8000
```

See `frontend/README.md` and `backend/README.md` for full details.

## Features

- Landing page with animated forecast hero and live SKU ticker
- Drag-and-drop CSV dataset upload with client-side validation & preview
- Forecast dashboard: historical vs. forecasted sales, revenue trend, seasonal
  index, product-wise forecasts
- Analytics summary: total sales, predicted revenue, growth %, best sellers
- Inventory optimization: low-stock / overstock alerts with reorder actions
- Forecast model comparison: ARIMA, SARIMA, Prophet, LSTM
- Industry use-case cards, testimonials, contact form
- Dark / light mode, fully responsive, keyboard-accessible focus states
- FastAPI backend with JWT auth, CSV ingestion, pluggable forecasting models,
  and PDF/Excel report export

## Tech stack

**Frontend:** React, Tailwind CSS, Recharts, Framer Motion
**Backend:** FastAPI, Pandas, NumPy, scikit-learn, Prophet, statsmodels
**Database:** PostgreSQL (via SQLAlchemy; swap the `DATABASE_URL` for SQLite locally)

## License

MIT — see `LICENSE`.
