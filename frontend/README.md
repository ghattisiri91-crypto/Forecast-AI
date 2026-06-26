# ForecastIQ — Frontend

React + Vite + Tailwind CSS frontend for the ForecastIQ sales forecasting platform.

## Setup

```bash
cd frontend
npm install
npm run dev
```

Visit http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

## Stack

- React 18 + Vite
- Tailwind CSS (custom "forecast ledger" design tokens — see `tailwind.config.js`)
- Recharts for charts
- Framer Motion for entrance animation
- lucide-react for icons

## Structure

```
src/
  components/   Section components (Hero, Dashboard, Inventory, Models, ...)
  data/          Mock data — swap for live calls to the FastAPI backend
  App.jsx        Page assembly + dark/light mode state
```

All chart and table data currently comes from `src/data/mockData.js`. Replace
those reads with `fetch` calls to the backend's `/api/forecast`,
`/api/inventory/alerts`, and `/api/datasets/upload` endpoints to go live.
