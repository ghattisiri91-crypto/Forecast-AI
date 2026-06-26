import React, { useState } from 'react'
import { Mail, Phone, Linkedin, Twitter, Github, Send } from 'lucide-react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="bg-paper-dim/40 py-24 dark:bg-ink-soft">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-2">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber">09 — Contact</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink dark:text-paper md:text-4xl">
            Talk to the forecasting team
          </h2>
          <p className="mt-4 max-w-md font-body text-sm leading-relaxed text-ink/65 dark:text-paper/65">
            Tell us about your catalog size and current planning process — we'll
            show you what ForecastIQ would have predicted last quarter.
          </p>

          <div className="mt-8 space-y-3 font-mono text-sm text-ink/75 dark:text-paper/75">
            <p className="flex items-center gap-2"><Mail size={16} className="text-amber" /> hello@forecastiq.app</p>
            <p className="flex items-center gap-2"><Phone size={16} className="text-amber" /> +1 (415) 555-0142</p>
          </div>

          <div className="mt-6 flex gap-4 text-ink/50 dark:text-paper/50">
            <a href="#" aria-label="LinkedIn" className="focus-ring hover:text-amber"><Linkedin size={18} /></a>
            <a href="#" aria-label="Twitter" className="focus-ring hover:text-amber"><Twitter size={18} /></a>
            <a href="#" aria-label="GitHub" className="focus-ring hover:text-amber"><Github size={18} /></a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 rounded-sm border border-ink-line/30 bg-paper p-6 dark:border-paper/15 dark:bg-ink">
          <div>
            <label className="font-mono text-xs uppercase tracking-wide text-ink/50 dark:text-paper/50">Name</label>
            <input required type="text" className="focus-ring mt-1 w-full rounded-sm border border-ink-line/30 bg-transparent px-3 py-2 font-body text-sm text-ink outline-none dark:border-paper/20 dark:text-paper" />
          </div>
          <div>
            <label className="font-mono text-xs uppercase tracking-wide text-ink/50 dark:text-paper/50">Email</label>
            <input required type="email" className="focus-ring mt-1 w-full rounded-sm border border-ink-line/30 bg-transparent px-3 py-2 font-body text-sm text-ink outline-none dark:border-paper/20 dark:text-paper" />
          </div>
          <div>
            <label className="font-mono text-xs uppercase tracking-wide text-ink/50 dark:text-paper/50">Message</label>
            <textarea required rows={4} className="focus-ring mt-1 w-full rounded-sm border border-ink-line/30 bg-transparent px-3 py-2 font-body text-sm text-ink outline-none dark:border-paper/20 dark:text-paper" />
          </div>
          <button type="submit" className="focus-ring flex items-center gap-2 rounded-sm bg-ink px-5 py-2.5 font-mono text-xs uppercase tracking-wide text-paper hover:bg-amber hover:text-ink dark:bg-amber dark:text-ink">
            <Send size={14} /> Send message
          </button>
          {sent && <p className="font-mono text-xs text-forecast">Sent. We'll reply within one business day.</p>}
        </form>
      </div>
    </section>
  )
}
