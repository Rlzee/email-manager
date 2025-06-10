import { Button } from "@/components/ui/button";
import Link from 'next/link'

export function Header() {
  return (
    <nav className="z-50 sticky top-0 w-full bg-background/60 backdrop-blur-lg border-b border-border h-16">
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-full">
            <div className="flex items-center space-x-4">
                <div className="hidden md:flex items-center">
                    <span className="font-bold font-sans pr-2">EM</span>
                    <span className="pr-2">|</span>
                    <Button variant="ghost" className="text-sm text-foreground hover:text-foreground">
                        Features
                    </Button>
                    <Button variant="ghost" className="text-sm text-foreground hover:text-foreground">
                        Pricing
                    </Button>
                    <Button variant="ghost" className="text-sm text-foreground hover:text-foreground">
                        Faq
                    </Button>
                </div>
            </div>
            <div className="flex items-center">
                <Button asChild>
                   <Link href="">
                       to identify
                   </Link>
                </Button>
            </div>
        </div>
    </nav>
  );
}