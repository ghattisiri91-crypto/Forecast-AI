import React from 'react'

const items = [
  {
    label: 'What it is',
    title: 'Sales forecasting, defined',
    body: 'Sales forecasting uses historical transaction data — orders, returns, seasonality, promotions — to estimate demand for future periods, down to the individual SKU and store.',
  },
  {
    label: 'Why it matters',
    title: 'The cost of guessing',
    body: 'Retailers without a forecasting discipline either over-order and tie up cash in dead stock, or under-order and lose sales to stockouts. Both errors compound every cycle.',
  },
  {
    label: 'The shift',
    title: 'Why AI changes the math',
    body: 'Classical spreadsheets average the past. Models like Prophet and LSTM learn non-linear seasonality, promotion lift and cross-SKU effects — catching shifts a moving average misses.',
  },
  {
    label: 'The payoff',
    title: 'What better forecasts buy you',
    body: 'Tighter reorder points, fewer emergency freight costs, and inventory that turns instead of sitting — the three levers that move retail margin fastest.',
  },
]

export default function About() {
  return (
    <section id="about" className="bg-paper py-24 dark:bg-ink">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber">01 — About forecasting</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink dark:text-paper md:text-4xl">
            Why prediction beats reaction
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-ink-line/30 bg-ink-line/30 dark:border-paper/15 dark:bg-paper/15 md:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.title} className="bg-paper p-6 dark:bg-ink">
              <p className="font-mono text-[11px] uppercase tracking-wide text-forecast">{it.label}</p>
              <h3 className="mt-3 font-display text-xl text-ink dark:text-paper">{it.title}</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-ink/65 dark:text-paper/65">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
