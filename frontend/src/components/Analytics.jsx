import React from 'react'
import { TrendingUp, DollarSign, Percent, Award } from 'lucide-react'

const stats = [
  { icon: DollarSign, label: 'Total sales (YTD)', value: '$612,400', delta: '+12.8% YoY' },
  { icon: TrendingUp, label: 'Predicted revenue (next Q)', value: '$214,900', delta: '+18.4% vs. last Q' },
  { icon: Percent, label: 'Forecast accuracy', value: '95.1%', delta: 'LSTM model' },
  { icon: Award, label: 'Best seller', value: 'Smart LED Strip 5m', delta: '+27.9% predicted' },
]

export default function Analytics() {
  return (
    <section className="bg-paper py-24 dark:bg-ink">
      <div className="mx-auto max-w-7xl px-6">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber">04 — Analytics</p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-ink dark:text-paper md:text-4xl">
          The numbers leadership asks for first
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-ink-line/30 bg-ink-line/30 dark:border-paper/15 dark:bg-paper/15 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ icon: Icon, label, value, delta }) => (
            <div key={label} className="bg-paper p-6 dark:bg-ink">
              <Icon className="text-amber" size={20} />
              <p className="mt-4 font-mono text-[11px] uppercase tracking-wide text-ink/50 dark:text-paper/50">{label}</p>
              <p className="mt-1 font-display text-2xl text-ink dark:text-paper">{value}</p>
              <p className="mt-1 font-mono text-xs text-forecast">{delta}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
