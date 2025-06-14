'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Check } from "lucide-react"

export function Pricing() {
  return (
    <section className="scroll-mt-60 md:scroll-mt-20" id="pricing">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto flex max-w-3xl flex-col text-center">
          <h2 className="mb-3 text-3xl font-semibold md:mb-4 lg:mb-6 lg:text-4xl">
            Plans made for every inbox
          </h2>
          <p className="text-muted-foreground lg:text-lg mb-6 md:mb-8 lg:mb-12">
            Start managing all your email accounts in one place. Upgrade anytime
            as your needs grow.
          </p>
        </div>

        <div className="rounded-xl flex flex-col justify-between border p-1">
          <div className="flex flex-col gap-4 md:flex-row">
            {/* Free Plan */}
            <div className="flex-1 space-y-4 p-6">
              <div>
                <h2 className="font-medium">Free</h2>
                <span className="my-3 block text-2xl font-semibold">
                  $0 / mo
                </span>
                <p className="text-muted-foreground text-sm">
                  Ideal to test the unified inbox experience
                </p>
              </div>

              <Button asChild variant="outline" className="w-full">
                <Link href="">Get Started</Link>
              </Button>

              <ul className="list-outside space-y-3 text-sm border-t pt-4">
                {[
                  "Connect up to 2 email accounts",
                  "Unified inbox interface",
                  "Read & search emails",
                  "Basic spam filtering",
                  "Email support",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="size-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pro Plan */}
            <div className="rounded-xl flex flex-col justify-between bg-secondary w-full md:w-1/2 space-y-4 p-6 border">
              <div>
                <h2 className="font-medium">Pro</h2>
                <span className="my-3 block text-2xl font-semibold">
                  $19 / mo
                </span>
                <p className="text-muted-foreground text-sm">
                  For professionals managing multiple accounts
                </p>
              </div>

              <Button asChild className="w-full">
                <Link href="">Get Started</Link>
              </Button>

              <div className="border-t pt-4">
                <div className="text-sm font-medium">
                  Everything in Free, plus:
                </div>
                <ul className="mt-2 list-outside space-y-3 text-sm">
                  {[
                    "Connect unlimited email accounts",
                    "Send emails from any connected address",
                    "Smart labels & filters",
                    "Real-time sync with Gmail, Outlook, iCloud",
                    "Advanced search & filters",
                    "Mobile app access",
                    "Priority email support",
                    "Custom signatures per account",
                    "Attachment previews",
                    "Daily backup of inboxes",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="size-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
