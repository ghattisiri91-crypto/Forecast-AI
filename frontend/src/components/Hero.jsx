import React from 'react'
import { motion } from 'framer-motion'
import { AreaChart, Area, XAxis, ResponsiveContainer, Tooltip } from 'recharts'
import { ArrowUpRight, Upload } from 'lucide-react'
import { salesHistory, productForecasts } from '../data/mockData'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-paper pt-16 dark:bg-ink">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 pb-16 pt-10 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber">Forecast ledger / live demo</p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.08] text-ink dark:text-paper md:text-6xl">
            Predict future sales with{' '}
            <span className="italic text-forecast">AI-powered</span> forecasting
          </h1>
          <p className="mt-6 max-w-md font-body text-base leading-relaxed text-ink/70 dark:text-paper/70">
            ForecastIQ turns years of transaction history into a clear, SKU-level
            picture of what sells next — so you can plan inventory, staffing and
            cash flow before demand moves, not after.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#upload"
              className="focus-ring flex items-center gap-2 rounded-sm bg-ink px-6 py-3 font-mono text-sm uppercase tracking-wide text-paper transition-transform hover:-translate-y-0.5 dark:bg-amber dark:text-ink"
            >
              Get Started <ArrowUpRight size={16} />
            </a>
            <a
              href="#upload"
              className="focus-ring flex items-center gap-2 rounded-sm border border-ink/30 px-6 py-3 font-mono text-sm uppercase tracking-wide text-ink transition-colors hover:border-ink dark:border-paper/30 dark:text-paper dark:hover:border-paper"
            >
              <Upload size={16} /> Upload Dataset
            </a>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-ink-line/30 pt-6 dark:border-paper/20">
            <div>
              <dt className="font-mono text-[11px] uppercase text-ink/50 dark:text-paper/50">Accuracy</dt>
              <dd className="font-display text-2xl text-ink dark:text-paper">95.1%</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase text-ink/50 dark:text-paper/50">SKUs tracked</dt>
              <dd className="font-display text-2xl text-ink dark:text-paper">12,400+</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase text-ink/50 dark:text-paper/50">Stockouts cut</dt>
              <dd className="font-display text-2xl text-forecast">−41%</dd>
            </div>
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-sm border border-ink-line/30 bg-ink/[0.02] p-5 dark:border-paper/15 dark:bg-paper/[0.03]"
        >
          <div className="flex items-baseline justify-between font-mono text-xs uppercase tracking-wide text-ink/50 dark:text-paper/50">
            <span>Revenue — actual vs. forecast</span>
            <span className="text-forecast">● forecast</span>
          </div>
          <div className="mt-4 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={salesHistory}>
                <defs>
                  <linearGradient id="actualFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#F2A93B" stopOpacity={0.35} />
                    <stop offset="100%" stopColor="#F2A93B" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="forecastFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#36C2A1" stopOpacity={0.35} />
                    <stop offset="100%" stopColor="#36C2A1" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" tick={{ fontSize: 10, fontFamily: 'IBM Plex Mono' }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{ fontFamily: 'IBM Plex Mono', fontSize: 12, border: '1px solid #22304A' }}
                  formatter={(v) => (v ? `$${v.toLocaleString()}` : '—')}
                />
                <Area type="monotone" dataKey="actual" stroke="#F2A93B" fill="url(#actualFill)" strokeWidth={2} connectNulls />
                <Area type="monotone" dataKey="forecast" stroke="#36C2A1" fill="url(#forecastFill)" strokeWidth={2} strokeDasharray="4 3" connectNulls />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Signature element: live ticker strip of SKU-level forecasts */}
      <div className="overflow-hidden border-y border-ink-line/30 bg-ink py-3 dark:border-paper/15 dark:bg-paper/5">
        <div className="ticker-track flex w-max gap-10 font-mono text-xs text-paper/80 dark:text-paper/70">
          {[...productForecasts, ...productForecasts].map((p, i) => (
            <span key={i} className="flex items-center gap-2 whitespace-nowrap">
              <span className="text-paper/40 dark:text-paper/30">{p.sku}</span>
              <span>{p.name}</span>
              <span className={p.status === 'rising' ? 'text-forecast' : 'text-alert'}>
                {p.status === 'rising' ? '▲' : '▼'} {Math.abs(p.change)}%
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
