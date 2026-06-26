import React, { useState } from 'react'
import { Menu, X, Sun, Moon, LineChart } from 'lucide-react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#dashboard', label: 'Dashboard' },
  { href: '#inventory', label: 'Inventory' },
  { href: '#models', label: 'Models' },
  { href: '#industries', label: 'Industries' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar({ dark, setDark }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-ink-line/30 bg-paper/90 dark:bg-ink/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold text-ink dark:text-paper">
          <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-ink text-amber dark:bg-amber dark:text-ink">
            <LineChart size={18} strokeWidth={2.5} />
          </span>
          ForecastIQ
        </a>

        <nav className="hidden items-center gap-8 font-body text-sm font-medium text-ink/70 dark:text-paper/70 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="focus-ring transition-colors hover:text-ink dark:hover:text-paper">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <button
            aria-label="Toggle dark mode"
            onClick={() => setDark(!dark)}
            className="focus-ring rounded-full border border-ink-line/40 p-2 text-ink dark:text-paper"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a
            href="#upload"
            className="focus-ring rounded-sm bg-ink px-4 py-2 font-mono text-xs uppercase tracking-wider text-paper transition-colors hover:bg-amber hover:text-ink dark:bg-amber dark:text-ink dark:hover:bg-forecast"
          >
            Get Started
          </a>
        </div>

        <button className="md:hidden text-ink dark:text-paper" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink-line/30 bg-paper dark:bg-ink px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4 font-body text-sm font-medium text-ink/80 dark:text-paper/80">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <button
              onClick={() => setDark(!dark)}
              className="flex items-center gap-2 text-left"
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />} Toggle theme
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
