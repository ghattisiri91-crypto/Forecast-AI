import io

import pandas as pd
from fastapi import APIRouter, File, HTTPException, UploadFile

from app.schemas import DatasetPreview, SalesRow

router = APIRouter()

REQUIRED_COLUMNS = {"date", "sku", "units_sold"}


@router.post("/upload", response_model=DatasetPreview)
async def upload_dataset(file: UploadFile = File(...)):
    """Validate and preview an uploaded sales-history CSV.

    Expects at minimum: date, sku, units_sold columns. `revenue` is optional.
    """
    if not file.filename.lower().endswith(".csv"):
        raise HTTPException(status_code=400, detail="Only .csv files are supported")

    raw = await file.read()
    try:
        df = pd.read_csv(io.BytesIO(raw))
    except Exception as exc:  # noqa: BLE001
        raise HTTPException(status_code=400, detail=f"Could not parse CSV: {exc}") from exc

    columns = {c.lower().strip() for c in df.columns}
    missing = REQUIRED_COLUMNS - columns
    if missing:
        raise HTTPException(
            status_code=422,
            detail=f"Missing required column(s): {', '.join(sorted(missing))}",
        )

    df.columns = [c.lower().strip() for c in df.columns]
    sample = df.head(10)

    sample_rows = [
        SalesRow(
            date=str(row["date"]),
            sku=str(row["sku"]),
            units_sold=int(row["units_sold"]),
            revenue=float(row["revenue"]) if "revenue" in df.columns and not pd.isna(row.get("revenue")) else None,
        )
        for _, row in sample.iterrows()
    ]

    return DatasetPreview(
        filename=file.filename,
        row_count=len(df),
        columns=list(df.columns),
        sample_rows=sample_rows,
    )
