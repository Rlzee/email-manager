import { Mail, Search, Bell, Shield, Zap, Users, Archive, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function Bento() {
  return (
    <section className="pb-16 md:pb-32" id="bento">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 w-full gap-4">
          {/* Left Grid - Email Unification */}
          <div className="bg-secondary border rounded-tl-xl h-auto p-8 flex flex-col justify-between min-h-[400px]">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-background">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold">All your emails, one place</h3>
              </div>
              <p className="text-muted-foreground text-lg mb-8">
                Connect Gmail, iCloud, Outlook and more. Manage all your email accounts from a single, intuitive
                interface.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge className="text-sm text-secondary py-2 px-4 rounded-xl">
                  Gmail
                </Badge>
                <Badge className="text-sm text-secondary py-2 px-4 rounded-xl">
                  iCloud
                </Badge>
                <Badge className="text-sm text-secondary py-2 px-4 rounded-xl">
                  Outlook
                </Badge>
                <Badge className="text-sm text-secondary py-2 px-4 rounded-xl">
                  Yahoo
                </Badge>
              </div>
            </div>
            <div className="mt-8">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span>Real-time synchronization</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Grid - Smart Features */}
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
                <div className="flex items-center gap-3 p-3 bg-background/50 rounded-lg">
                  <Search className="w-5 h-5" />
                  <span className="text-sm">Smart search</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-background/50 rounded-lg">
                  <Archive className="w-5 h-5" />
                  <span className="text-sm">Auto sorting</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-background/50 rounded-lg">
                  <Star className="w-5 h-5" />
                  <span className="text-sm">Priority emails</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Grid - Security & Collaboration */}
        <div className="bg-secondary border rounded-b-xl h-auto mt-4 p-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Security */}
            <div className="text-center">
              <div className="p-4 bg-background rounded-xl w-fit mx-auto mb-4">
                <Shield className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Maximum Security</h4>
              <p className="text-muted-foreground">
                End-to-end encryption and two-factor authentication to protect your data.
              </p>
            </div>

            {/* Notifications */}
            <div className="text-center">
              <div className="p-4 bg-background rounded-xl w-fit mx-auto mb-4">
                <Bell className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Smart Notifications</h4>
              <p className="text-muted-foreground">
                Receive only important notifications thanks to our intelligent filtering system.
              </p>
            </div>

            {/* Collaboration */}
            <div className="text-center">
              <div className="p-4 bg-background rounded-xl w-fit mx-auto mb-4">
                <Users className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Collaboration</h4>
              <p className="text-muted-foreground">
                Share emails and collaborate with your team directly from the interface.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-12 pt-8 border-t border-border/50">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">Guaranteed uptime</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Supported providers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">2M+</div>
                <div className="text-sm text-muted-foreground">Emails processed/day</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">{"<1s"}</div>
                <div className="text-sm text-muted-foreground">Sync time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
