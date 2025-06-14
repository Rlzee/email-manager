'use client'

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, Search, Bell, Shield, Zap, Users, Archive, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function Bento() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="pb-16 md:pb-32" id="bento" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-7xl px-6"
      >
        <div className="grid grid-cols-2 w-full gap-4">
          {/* Left Grid */}
          <div className="bg-secondary border rounded-tl-xl h-auto p-8 flex flex-col justify-between min-h-[400px]">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-background">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold">All your emails, one place</h3>
              </div>
              <p className="text-muted-foreground text-lg mb-8">
                Connect Gmail, iCloud, Outlook and more. Manage all your email accounts from a single, intuitive interface.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Gmail", "iCloud", "Outlook", "Yahoo"].map((provider) => (
                  <Badge key={provider} className="text-sm text-secondary py-2 px-4 rounded-xl">
                    {provider}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="mt-8 text-sm text-muted-foreground">
              <span>Real-time synchronization</span>
            </div>
          </div>

          {/* Right Grid */}
          <div className="bg-secondary border rounded-tr-xl p-8 flex flex-col justify-between min-h-[400px]">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-background rounded-xl">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold">Artificial Intelligence</h3>
              </div>
              <p className="text-muted-foreground text-lg mb-8">
                Automatically sort your emails, detect spam and organize your inbox with AI.
              </p>
              <div className="space-y-4">
                {[
                  { icon: <Search className="w-5 h-5" />, text: "Smart search" },
                  { icon: <Archive className="w-5 h-5" />, text: "Auto sorting" },
                  { icon: <Star className="w-5 h-5" />, text: "Priority emails" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-background/50 rounded-lg">
                    {item.icon}
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="bg-secondary border rounded-b-xl h-auto mt-4 p-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[{
              icon: Shield,
              title: "Maximum Security",
              desc: "End-to-end encryption and two-factor authentication to protect your data."
            }, {
              icon: Bell,
              title: "Smart Notifications",
              desc: "Receive only important notifications thanks to our intelligent filtering system."
            }, {
              icon: Users,
              title: "Collaboration",
              desc: "Share emails and collaborate with your team directly from the interface."
            }].map((item, i) => (
              <div key={i} className="text-center">
                <div className="p-4 bg-background rounded-xl w-fit mx-auto mb-4">
                  <item.icon className="w-10 h-10" />
                </div>
                <h4 className="text-xl font-semibold mb-3">{item.title}</h4>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-12 pt-8 border-t border-border/50">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                ["99.9%", "Guaranteed uptime"],
                ["15+", "Supported providers"],
                ["2M+", "Emails processed/day"],
                ["<1s", "Sync time"],
              ].map(([value, label]) => (
                <div key={label}>
                  <div className="text-3xl font-bold text-primary mb-2">{value}</div>
                  <div className="text-sm text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
