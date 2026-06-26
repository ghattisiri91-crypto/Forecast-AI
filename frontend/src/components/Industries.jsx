import React from 'react'
import { industries } from '../data/mockData'

export default function Industries() {
  return (
    <section id="industries" className="bg-paper-dim/40 py-24 dark:bg-ink-soft">
      <div className="mx-auto max-w-7xl px-6">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber">07 — Industries</p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-ink dark:text-paper md:text-4xl">
          Built for every link in the chain
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => (
            <div
              key={ind.title}
              className="rounded-sm border border-ink-line/30 bg-paper p-6 transition-transform hover:-translate-y-1 dark:border-paper/15 dark:bg-ink"
            >
              <h3 className="font-display text-xl text-ink dark:text-paper">{ind.title}</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-ink/65 dark:text-paper/65">{ind.blurb}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
