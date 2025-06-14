'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export function Feature() {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    amount: 0.8,
  })

  return (
    <section id="feature" ref={ref} className="pt-16 md:pt-0">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="mx-auto max-w-7xl px-6"
      >
        <div className="hidden md:flex md:flex-row">
          <div className="flex-1 border-r border-border h-28 flex relative"></div>
          <div className="flex-1 rounded-xl"></div>
        </div>

        <div className="hidden md:flex md:flex-row">
          <div className="flex-1 border-r border-border h-24 flex relative">
            <div className="w-2/3 h-full ml-auto border-t border-l border-border rounded-tl-xl"></div>
          </div>
          <div className="flex-1 rounded-xl">
            <div className="w-2/3 h-full border-t border-r border-border rounded-tr-xl"></div>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex-1 space-y-4 p-6 md:rounded-l-xl md:rounded-tr-none rounded-t-xl bg-secondary border">
            <h3 className="text-lg font-semibold">Smart Signatures</h3>
            <p className="text-sm text-muted-foreground">
              Automatically apply the right signature for the right email — work, personal, or custom — with zero effort.
            </p>
          </div>

          <div className="flex-1 space-y-4 p-6 bg-secondary border">
            <h3 className="text-lg font-semibold">One-Click Unsubscribe</h3>
            <p className="text-sm text-muted-foreground">
              Unsubscribe from unwanted emails across all inboxes instantly. Take back control of your attention.
            </p>
          </div>

          <div className="flex-1 space-y-4 p-6 bg-secondary md:rounded-r-xl md:rounded-bl-none rounded-b-xl border">
            <h3 className="text-lg font-semibold">Smart Reply Suggestions</h3>
            <p className="text-sm text-muted-foreground">
              Reply faster with AI-generated responses tailored to your message tone and content.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
