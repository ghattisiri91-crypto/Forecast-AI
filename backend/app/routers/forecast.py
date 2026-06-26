from datetime import timedelta

import numpy as np
import pandas as pd
from fastapi import APIRouter, HTTPException

from app.schemas import ForecastPoint, ForecastRequest, ForecastResponse
from app.services.forecasting import run_forecast

router = APIRouter()


def _demo_series(days: int = 180) -> pd.Series:
    """Synthetic daily units-sold series used when no dataset is supplied yet."""
    dates = pd.date_range(end=pd.Timestamp.today(), periods=days, freq="D")
    trend = np.linspace(40, 90, days)
    weekly = 8 * np.sin(np.arange(days) * (2 * np.pi / 7))
    noise = np.random.normal(0, 4, days)
    values = np.clip(trend + weekly + noise, 0, None)
    return pd.Series(values, index=dates)


@router.post("", response_model=ForecastResponse)
def generate_forecast(payload: ForecastRequest):
    if payload.horizon_days <= 0 or payload.horizon_days > 365:
        raise HTTPException(status_code=422, detail="horizon_days must be between 1 and 365")

    series = _demo_series()
    try:
        preds, accuracy = run_forecast(series, payload.horizon_days, payload.model)
    except ValueError as exc:
        raise HTTPException(status_code=422, detail=str(exc)) from exc

    last_date = series.index[-1]
    points = [
        ForecastPoint(
            date=last_date + timedelta(days=i + 1),
            predicted_units=round(float(p), 2),
            lower_bound=round(float(p) * 0.9, 2),
            upper_bound=round(float(p) * 1.1, 2),
        )
        for i, p in enumerate(preds)
    ]

    return ForecastResponse(
        sku=payload.sku,
        model_used=payload.model,
        accuracy=accuracy,
        points=points,
    )
