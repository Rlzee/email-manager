import { Icons } from "@/components/icons";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background/60 backdrop-blur-lg border-t border-border py-6">
      <div className="mx-auto max-w-7xl px-6 flex justify-center items-center gap-8">
        <div className="text-sm text-foreground font-sans">
          © {new Date().getFullYear()} EM. All rights reserved.
        </div>
        <div className="flex items-center gap-2">
          <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Terms of Service
          </Link>
        </div>
        <div className="flex items-center gap-3 cursor-pointer">
          <Link href="">
            <Icons.github className="size-4 text-muted-foreground hover:text-foreground transition-colors" />
          </Link>
          <Link href="">
            <Icons.x className="size-4 text-muted-foreground hover:text-foreground transition-colors" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
