import io
from datetime import timedelta

import pandas as pd
from fastapi import APIRouter
from fastapi.responses import StreamingResponse
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas

from app.routers.forecast import _demo_series
from app.schemas import ForecastRequest
from app.services.forecasting import run_forecast

router = APIRouter()


def _build_forecast_frame(payload: ForecastRequest) -> pd.DataFrame:
    series = _demo_series()
    preds, accuracy = run_forecast(series, payload.horizon_days, payload.model)
    last_date = series.index[-1]
    dates = [last_date + timedelta(days=i + 1) for i in range(len(preds))]
    return pd.DataFrame({"date": dates, "predicted_units": preds.round(2)}), accuracy


@router.post("/excel")
def export_excel(payload: ForecastRequest):
    df, accuracy = _build_forecast_frame(payload)
    buffer = io.BytesIO()
    with pd.ExcelWriter(buffer, engine="openpyxl") as writer:
        df.to_excel(writer, index=False, sheet_name="Forecast")
    buffer.seek(0)
    headers = {"Content-Disposition": "attachment; filename=forecastiq_forecast.xlsx"}
    return StreamingResponse(
        buffer,
        media_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        headers=headers,
    )


@router.post("/pdf")
def export_pdf(payload: ForecastRequest):
    df, accuracy = _build_forecast_frame(payload)
    buffer = io.BytesIO()
    pdf = canvas.Canvas(buffer, pagesize=letter)

    pdf.setFont("Helvetica-Bold", 16)
    pdf.drawString(50, 740, "ForecastIQ — Forecast Report")
    pdf.setFont("Helvetica", 10)
    pdf.drawString(50, 720, f"Model: {payload.model.upper()}   Accuracy: {accuracy:.1%}   Horizon: {payload.horizon_days} days")

    y = 690
    pdf.setFont("Helvetica-Bold", 10)
    pdf.drawString(50, y, "Date")
    pdf.drawString(200, y, "Predicted units")
    pdf.setFont("Helvetica", 9)
    y -= 18
    for _, row in df.head(40).iterrows():
        pdf.drawString(50, y, str(row["date"].date()))
        pdf.drawString(200, y, str(row["predicted_units"]))
        y -= 14
        if y < 50:
            pdf.showPage()
            y = 740

    pdf.save()
    buffer.seek(0)
    headers = {"Content-Disposition": "attachment; filename=forecastiq_forecast.pdf"}
    return StreamingResponse(buffer, media_type="application/pdf", headers=headers)
