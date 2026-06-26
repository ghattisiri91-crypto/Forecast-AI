import React from 'react'
import { Quote } from 'lucide-react'
import { testimonials } from '../data/mockData'

export default function Testimonials() {
  return (
    <section className="bg-paper py-24 dark:bg-ink">
      <div className="mx-auto max-w-7xl px-6">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber">08 — Testimonials</p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-ink dark:text-paper md:text-4xl">
          Results, in their own words
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex flex-col rounded-sm border border-ink-line/30 bg-paper p-6 dark:border-paper/15 dark:bg-ink-soft">
              <Quote className="text-amber" size={20} />
              <blockquote className="mt-4 flex-1 font-body text-sm leading-relaxed text-ink/75 dark:text-paper/75">
                {t.quote}
              </blockquote>
              <figcaption className="mt-5 border-t border-ink-line/20 pt-4 font-mono text-xs dark:border-paper/10">
                <span className="text-ink dark:text-paper">{t.name}</span>
                <span className="block text-ink/45 dark:text-paper/45">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
