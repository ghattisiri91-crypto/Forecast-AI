from datetime import datetime
from typing import List, Optional

from pydantic import BaseModel, EmailStr


class UserCreate(BaseModel):
    email: EmailStr
    password: str
    full_name: Optional[str] = None


class UserOut(BaseModel):
    id: int
    email: EmailStr
    full_name: Optional[str] = None

    class Config:
        from_attributes = True


class Token(BaseModel):
    access_token: str
    token_type: str = "bearer"


class SalesRow(BaseModel):
    date: str
    sku: str
    units_sold: int
    revenue: Optional[float] = None


class DatasetPreview(BaseModel):
    filename: str
    row_count: int
    columns: List[str]
    sample_rows: List[SalesRow]


class ForecastRequest(BaseModel):
    sku: Optional[str] = None
    horizon_days: int = 30
    model: str = "prophet"  # one of: arima, sarima, prophet, lstm


class ForecastPoint(BaseModel):
    date: datetime
    predicted_units: float
    lower_bound: Optional[float] = None
    upper_bound: Optional[float] = None


class ForecastResponse(BaseModel):
    sku: Optional[str]
    model_used: str
    accuracy: float
    points: List[ForecastPoint]


class InventoryAlert(BaseModel):
    sku: str
    name: str
    stock: int
    reorder_point: int
    status: str  # low | over | healthy
    action: str
