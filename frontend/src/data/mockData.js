// Mock data — replace with live API responses from the backend forecasting service.

export const salesHistory = [
  { month: 'Jan', actual: 42000, forecast: null },
  { month: 'Feb', actual: 45200, forecast: null },
  { month: 'Mar', actual: 48900, forecast: null },
  { month: 'Apr', actual: 46100, forecast: null },
  { month: 'May', actual: 51200, forecast: null },
  { month: 'Jun', actual: 53800, forecast: null },
  { month: 'Jul', actual: 58300, forecast: null },
  { month: 'Aug', actual: 56700, forecast: null },
  { month: 'Sep', actual: 60100, forecast: 60100 },
  { month: 'Oct', actual: null, forecast: 64200 },
  { month: 'Nov', actual: null, forecast: 71500 },
  { month: 'Dec', actual: null, forecast: 79800 },
  { month: 'Jan’27', actual: null, forecast: 68900 },
  { month: 'Feb’27', actual: null, forecast: 70300 },
]

export const revenueTrend = [
  { month: 'Apr', revenue: 46100, target: 44000 },
  { month: 'May', revenue: 51200, target: 48000 },
  { month: 'Jun', revenue: 53800, target: 52000 },
  { month: 'Jul', revenue: 58300, target: 55000 },
  { month: 'Aug', revenue: 56700, target: 58000 },
  { month: 'Sep', revenue: 60100, target: 59000 },
]

export const productForecasts = [
  { sku: 'SKU-1042', name: 'Wireless Earbuds Pro', change: 18.4, units: 1240, status: 'rising' },
  { sku: 'SKU-2087', name: 'Insulated Travel Mug', change: 6.1, units: 980, status: 'rising' },
  { sku: 'SKU-3315', name: 'Yoga Mat — Eco Line', change: -4.2, units: 410, status: 'falling' },
  { sku: 'SKU-4456', name: 'Smart LED Strip 5m', change: 27.9, units: 2210, status: 'rising' },
  { sku: 'SKU-5521', name: 'Ceramic Knife Set', change: -9.6, units: 312, status: 'falling' },
  { sku: 'SKU-6678', name: 'Bluetooth Speaker Mini', change: 12.3, units: 1560, status: 'rising' },
]

export const seasonalTrend = [
  { quarter: 'Q1', index: 82 },
  { quarter: 'Q2', index: 96 },
  { quarter: 'Q3', index: 104 },
  { quarter: 'Q4', index: 138 },
]

export const inventoryAlerts = [
  { sku: 'SKU-4456', name: 'Smart LED Strip 5m', stock: 84, reorderPoint: 220, status: 'low', action: 'Reorder 600 units within 5 days' },
  { sku: 'SKU-1042', name: 'Wireless Earbuds Pro', stock: 140, reorderPoint: 300, status: 'low', action: 'Reorder 400 units within 7 days' },
  { sku: 'SKU-3315', name: 'Yoga Mat — Eco Line', stock: 1840, reorderPoint: 500, status: 'over', action: 'Pause incoming PO, run 15% clearance' },
  { sku: 'SKU-5521', name: 'Ceramic Knife Set', stock: 1320, reorderPoint: 450, status: 'over', action: 'Bundle with slow movers' },
  { sku: 'SKU-6678', name: 'Bluetooth Speaker Mini', stock: 610, reorderPoint: 600, status: 'healthy', action: 'No action needed' },
]

export const forecastModels = [
  {
    name: 'ARIMA',
    full: 'AutoRegressive Integrated Moving Average',
    accuracy: '88.4%',
    description: 'A classical statistical model that forecasts using a linear combination of past values and past errors. Strong on stable, trend-driven series.',
    advantages: ['Fast to train', 'Interpretable coefficients', 'Works well with limited data'],
    useCases: ['Stable-demand products', 'Short-term replenishment', 'Single-store forecasting'],
  },
  {
    name: 'SARIMA',
    full: 'Seasonal ARIMA',
    accuracy: '91.2%',
    description: 'Extends ARIMA with explicit seasonal terms, capturing recurring patterns like holiday spikes or back-to-school demand.',
    advantages: ['Captures seasonality natively', 'Good for monthly/quarterly cycles', 'Still relatively fast'],
    useCases: ['Seasonal apparel', 'Holiday-driven categories', 'Quarterly planning'],
  },
  {
    name: 'Prophet',
    full: 'Facebook/Meta Prophet',
    accuracy: '93.6%',
    description: 'A decomposable model built for business time series with multiple seasonalities, holidays and missing data tolerance.',
    advantages: ['Handles holidays explicitly', 'Robust to missing data', 'Easy to tune for analysts'],
    useCases: ['Multi-channel e-commerce', 'Promotion-heavy calendars', 'New product lines with gaps'],
  },
  {
    name: 'LSTM',
    full: 'Long Short-Term Memory Networks',
    accuracy: '95.1%',
    description: 'A deep learning architecture that learns long-range, non-linear dependencies across large historical datasets.',
    advantages: ['Captures complex non-linear patterns', 'Scales across thousands of SKUs', 'Improves with more data'],
    useCases: ['High-volume marketplaces', 'Cross-SKU demand correlation', 'Long forecast horizons'],
  },
]

export const industries = [
  { title: 'Retail Stores', blurb: 'Forecast footfall-driven demand and plan shelf-level replenishment by location.' },
  { title: 'E-Commerce Platforms', blurb: 'Predict order volume across channels and align fulfillment capacity ahead of spikes.' },
  { title: 'Supply Chain Management', blurb: 'Sync upstream supplier orders with downstream demand signals to cut lead-time risk.' },
  { title: 'Warehousing', blurb: 'Plan storage allocation and labor schedules around predicted inbound and outbound volume.' },
  { title: 'Demand Planning', blurb: 'Give planning teams a single forecast of record across SKUs, regions and time horizons.' },
]

export const testimonials = [
  {
    quote: 'We cut stockouts on our top 50 SKUs by 41% in one quarter — the LSTM model caught a seasonal shift our spreadsheets never would have.',
    name: 'Priya Raman',
    role: 'Head of Merchandising, Loomstack Retail',
  },
  {
    quote: 'Forecast accuracy went from roughly 70% with manual planning to over 92% within six weeks of switching to ForecastIQ.',
    name: 'Daniel Ofori',
    role: 'Supply Chain Director, Northbound Goods',
  },
  {
    quote: 'The inventory alerts alone paid for the platform — we stopped overstocking slow movers and freed up working capital.',
    name: 'Maya Chen',
    role: 'Operations Lead, Brightfield Co.',
  },
]
