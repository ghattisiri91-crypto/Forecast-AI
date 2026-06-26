import React from 'react'
import {
  ResponsiveContainer, LineChart, Line, BarChart, Bar, XAxis, YAxis,
  CartesianGrid, Tooltip, Legend,
} from 'recharts'
import { salesHistory, revenueTrend, seasonalTrend, productForecasts } from '../data/mockData'

const axisStyle = { fontSize: 11, fontFamily: 'IBM Plex Mono' }

function ChartCard({ title, sub, children }) {
  return (
    <div className="rounded-sm border border-ink-line/30 bg-paper p-5 dark:border-paper/15 dark:bg-ink-soft">
      <div className="flex items-baseline justify-between">
        <h3 className="font-display text-lg text-ink dark:text-paper">{title}</h3>
        {sub && <span className="font-mono text-[11px] text-ink/40 dark:text-paper/40">{sub}</span>}
      </div>
      <div className="mt-4 h-56">{children}</div>
    </div>
  )
}

export default function Dashboard() {
  return (
    <section id="dashboard" className="bg-paper-dim/40 py-24 dark:bg-ink">
      <div className="mx-auto max-w-7xl px-6">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber">03 — Forecast dashboard</p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-ink dark:text-paper md:text-4xl">
          One screen, every signal
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ChartCard title="Historical vs. forecasted sales" sub="monthly, $">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salesHistory}>
                <CartesianGrid stroke="#22304A" strokeOpacity={0.15} vertical={false} />
                <XAxis dataKey="month" tick={axisStyle} axisLine={false} tickLine={false} />
                <YAxis tick={axisStyle} axisLine={false} tickLine={false} width={50} />
                <Tooltip contentStyle={{ fontFamily: 'IBM Plex Mono', fontSize: 12 }} />
                <Legend wrapperStyle={{ fontFamily: 'IBM Plex Mono', fontSize: 11 }} />
                <Line type="monotone" dataKey="actual" name="Actual" stroke="#F2A93B" strokeWidth={2} dot={false} connectNulls />
                <Line type="monotone" dataKey="forecast" name="Forecast" stroke="#36C2A1" strokeWidth={2} strokeDasharray="5 4" dot={false} connectNulls />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Revenue trend vs. target" sub="last 6 months">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueTrend}>
                <CartesianGrid stroke="#22304A" strokeOpacity={0.15} vertical={false} />
                <XAxis dataKey="month" tick={axisStyle} axisLine={false} tickLine={false} />
                <YAxis tick={axisStyle} axisLine={false} tickLine={false} width={50} />
                <Tooltip contentStyle={{ fontFamily: 'IBM Plex Mono', fontSize: 12 }} />
                <Legend wrapperStyle={{ fontFamily: 'IBM Plex Mono', fontSize: 11 }} />
                <Bar dataKey="revenue" name="Revenue" fill="#F2A93B" radius={[2, 2, 0, 0]} />
                <Bar dataKey="target" name="Target" fill="#22304A" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Seasonal demand index" sub="100 = yearly average">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={seasonalTrend}>
                <CartesianGrid stroke="#22304A" strokeOpacity={0.15} vertical={false} />
                <XAxis dataKey="quarter" tick={axisStyle} axisLine={false} tickLine={false} />
                <YAxis tick={axisStyle} axisLine={false} tickLine={false} width={40} />
                <Tooltip contentStyle={{ fontFamily: 'IBM Plex Mono', fontSize: 12 }} />
                <Bar dataKey="index" name="Index" fill="#36C2A1" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          <div className="rounded-sm border border-ink-line/30 bg-paper p-5 dark:border-paper/15 dark:bg-ink-soft">
            <div className="flex items-baseline justify-between">
              <h3 className="font-display text-lg text-ink dark:text-paper">Product-wise forecast</h3>
              <span className="font-mono text-[11px] text-ink/40 dark:text-paper/40">next 30 days</span>
            </div>
            <ul className="mt-4 space-y-3">
              {productForecasts.map((p) => (
                <li key={p.sku} className="flex items-center justify-between border-b border-ink-line/15 pb-2 font-mono text-xs dark:border-paper/10">
                  <span className="text-ink/70 dark:text-paper/70">{p.name}</span>
                  <span className={p.status === 'rising' ? 'text-forecast' : 'text-alert'}>
                    {p.status === 'rising' ? '▲' : '▼'} {Math.abs(p.change)}%
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
