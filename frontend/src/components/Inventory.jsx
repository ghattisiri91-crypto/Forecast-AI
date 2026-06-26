import React from 'react'
import { AlertCircle, PackageX, PackageCheck, RefreshCcw } from 'lucide-react'
import { inventoryAlerts } from '../data/mockData'

const statusMap = {
  low: { label: 'Low inventory', icon: AlertCircle, cls: 'text-alert border-alert/40 bg-alert/5' },
  over: { label: 'Overstock', icon: PackageX, cls: 'text-amber border-amber/40 bg-amber/5' },
  healthy: { label: 'Healthy', icon: PackageCheck, cls: 'text-forecast border-forecast/40 bg-forecast/5' },
}

export default function Inventory() {
  return (
    <section id="inventory" className="bg-paper-dim/40 py-24 dark:bg-ink-soft">
      <div className="mx-auto max-w-7xl px-6">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber">05 — Inventory optimization</p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-ink dark:text-paper md:text-4xl">
          Know what to reorder before it's a problem
        </h2>

        <div className="mt-10 overflow-x-auto rounded-sm border border-ink-line/30 dark:border-paper/15">
          <table className="w-full font-mono text-sm">
            <thead className="bg-ink text-paper dark:bg-paper/5 dark:text-paper/60">
              <tr>
                <th className="px-5 py-3 text-left text-xs uppercase tracking-wide">SKU</th>
                <th className="px-5 py-3 text-left text-xs uppercase tracking-wide">Product</th>
                <th className="px-5 py-3 text-left text-xs uppercase tracking-wide">Stock</th>
                <th className="px-5 py-3 text-left text-xs uppercase tracking-wide">Reorder pt.</th>
                <th className="px-5 py-3 text-left text-xs uppercase tracking-wide">Status</th>
                <th className="px-5 py-3 text-left text-xs uppercase tracking-wide">Recommended action</th>
              </tr>
            </thead>
            <tbody className="bg-paper dark:bg-ink">
              {inventoryAlerts.map((row) => {
                const s = statusMap[row.status]
                return (
                  <tr key={row.sku} className="border-t border-ink-line/15 dark:border-paper/10">
                    <td className="px-5 py-3 text-ink/60 dark:text-paper/50">{row.sku}</td>
                    <td className="px-5 py-3 text-ink dark:text-paper">{row.name}</td>
                    <td className="px-5 py-3 text-ink/80 dark:text-paper/70">{row.stock.toLocaleString()}</td>
                    <td className="px-5 py-3 text-ink/60 dark:text-paper/50">{row.reorderPoint.toLocaleString()}</td>
                    <td className="px-5 py-3">
                      <span className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs ${s.cls}`}>
                        <s.icon size={12} /> {s.label}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-ink/70 dark:text-paper/60">
                      <span className="flex items-center gap-1.5">
                        <RefreshCcw size={12} className="text-ink/30 dark:text-paper/30" /> {row.action}
                      </span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
