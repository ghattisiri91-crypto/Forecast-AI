from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers import auth, datasets, forecast, inventory, reports

app = FastAPI(
    title="ForecastIQ API",
    description="AI-powered e-commerce sales forecasting and inventory optimization service.",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix="/api/auth", tags=["auth"])
app.include_router(datasets.router, prefix="/api/datasets", tags=["datasets"])
app.include_router(forecast.router, prefix="/api/forecast", tags=["forecast"])
app.include_router(inventory.router, prefix="/api/inventory", tags=["inventory"])
app.include_router(reports.router, prefix="/api/reports", tags=["reports"])


@app.get("/api/health", tags=["health"])
def health_check():
    return {"status": "ok", "service": "forecastiq-api"}
