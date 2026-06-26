from typing import List

from fastapi import APIRouter

from app.schemas import InventoryAlert

router = APIRouter()

# In production this would query SalesRecord + ForecastResult and apply
# reorder-point / safety-stock logic. Mocked here to keep the API runnable
# without a seeded database.
_MOCK_ALERTS = [
    InventoryAlert(sku="SKU-4456", name="Smart LED Strip 5m", stock=84, reorder_point=220, status="low", action="Reorder 600 units within 5 days"),
    InventoryAlert(sku="SKU-1042", name="Wireless Earbuds Pro", stock=140, reorder_point=300, status="low", action="Reorder 400 units within 7 days"),
    InventoryAlert(sku="SKU-3315", name="Yoga Mat — Eco Line", stock=1840, reorder_point=500, status="over", action="Pause incoming PO, run 15% clearance"),
    InventoryAlert(sku="SKU-5521", name="Ceramic Knife Set", stock=1320, reorder_point=450, status="over", action="Bundle with slow movers"),
    InventoryAlert(sku="SKU-6678", name="Bluetooth Speaker Mini", stock=610, reorder_point=600, status="healthy", action="No action needed"),
]


@router.get("/alerts", response_model=List[InventoryAlert])
def get_inventory_alerts():
    return _MOCK_ALERTS
