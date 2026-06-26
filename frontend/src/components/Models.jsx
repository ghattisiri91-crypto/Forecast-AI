import React from 'react'
import { forecastModels } from '../data/mockData'

export default function Models() {
  return (
    <section id="models" className="bg-paper py-24 dark:bg-ink">
      <div className="mx-auto max-w-7xl px-6">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber">06 — Forecast models</p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-ink dark:text-paper md:text-4xl">
          Choose the model that fits the signal
        </h2>
        <p className="mt-3 max-w-xl font-body text-sm text-ink/65 dark:text-paper/65">
          ForecastIQ benchmarks every SKU against four model families and routes
          it to whichever performs best on holdout data.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {forecastModels.map((m) => (
            <div
              key={m.name}
              className="rounded-sm border border-ink-line/30 bg-paper p-6 dark:border-paper/15 dark:bg-ink-soft"
            >
              <div className="flex items-baseline justify-between">
                <div>
                  <h3 className="font-display text-2xl text-ink dark:text-paper">{m.name}</h3>
                  <p className="font-mono text-[11px] uppercase tracking-wide text-ink/40 dark:text-paper/40">{m.full}</p>
                </div>
                <span className="font-mono text-xl text-forecast">{m.accuracy}</span>
              </div>
              <p className="mt-4 font-body text-sm leading-relaxed text-ink/70 dark:text-paper/70">{m.description}</p>

              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wide text-amber">Advantages</p>
                  <ul className="mt-2 space-y-1 font-body text-xs text-ink/65 dark:text-paper/60">
                    {m.advantages.map((a) => <li key={a}>· {a}</li>)}
                  </ul>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wide text-amber">Use cases</p>
                  <ul className="mt-2 space-y-1 font-body text-xs text-ink/65 dark:text-paper/60">
                    {m.useCases.map((u) => <li key={u}>· {u}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
