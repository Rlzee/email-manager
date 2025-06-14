'use client'

import { AnimatedGroup } from "@/components/ui/animatedGroup"

export function Feature2() {
  return (
    <section className="pb-10 md:pb-16" id="feature2">
      <div  className="mx-auto max-w-7xl px-6">
        {/* Bloc 1 : Smart Email Sending */}
        <AnimatedGroup preset="blur-slide" inView inViewMargin="-200px">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-16 md:py-32 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Send Smart from the Right Account
              </h2>
              <p className="text-muted-foreground mb-6 text-base md:text-lg">
                Choose which address to send from with every message. Whether it's work or personal, your emails always go out from the right inbox — no switching platforms or risking confusion.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-secondary border rounded-xl h-52 w-52 pb-16 md:pb-0">
                <div className="bg-background border rounded-xl h-52 w-52 md:top-1/2 md:left-1/2 top-1/3 left-1/3 z-5 relative">
                  <img src="f2-1.png" className="rounded-xl" alt="" />
                </div>
              </div>
            </div>
          </div>
        </AnimatedGroup>

        {/* Bloc 2 : Advanced Search */}
        <AnimatedGroup preset="blur-slide" inView inViewMargin="-200px">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-16 md:py-32 items-center">
            <div className="flex items-center justify-center order-2 md:order-1 pb-16 md:pb-0">
              <div className="bg-secondary border rounded-xl h-52 w-52">
                <div className="bg-background border rounded-xl h-52 w-52 md:top-1/2 md:right-1/2 top-1/3 right-1/3 z-5 relative">
                  <img src="f2-2.png" className="rounded-xl" alt="" />
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Find Anything, Instantly
              </h2>
              <p className="text-muted-foreground mb-6 text-base md:text-lg">
                Search across all connected inboxes with powerful filters. Find exactly what you need — no matter where it was sent, received, or buried.
              </p>
            </div>
          </div>
        </AnimatedGroup>
      </div>
    </section>
  )
}
