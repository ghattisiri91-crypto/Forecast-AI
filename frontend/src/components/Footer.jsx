import React from 'react'
import { LineChart } from 'lucide-react'

const cols = [
  { title: 'Product', links: ['Dashboard', 'Inventory', 'Models', 'Pricing'] },
  { title: 'Resources', links: ['Documentation', 'API Reference', 'Changelog'] },
  { title: 'Company', links: ['About', 'Industries', 'Contact'] },
  { title: 'Legal', links: ['Privacy Policy', 'Terms & Conditions'] },
]

export default function Footer() {
  return (
    <footer className="bg-ink py-16 text-paper/70">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <div className="flex items-center gap-2 font-display text-lg font-semibold text-paper">
              <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-amber text-ink">
                <LineChart size={16} strokeWidth={2.5} />
              </span>
              ForecastIQ
            </div>
            <p className="mt-3 max-w-xs font-body text-sm text-paper/50">
              AI-powered sales forecasting and inventory optimization for retail and e-commerce teams.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <p className="font-mono text-xs uppercase tracking-wide text-paper/40">{c.title}</p>
              <ul className="mt-3 space-y-2 font-body text-sm">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="focus-ring hover:text-amber">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-2 border-t border-paper/10 pt-6 font-mono text-xs text-paper/40 sm:flex-row">
          <span>© {new Date().getFullYear()} ForecastIQ. All rights reserved.</span>
          <span>Built with React, Tailwind CSS &amp; Recharts.</span>
        </div>
      </div>
    </footer>
  )
}
