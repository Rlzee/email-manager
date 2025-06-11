"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface NavbarItem {
  label: string;
  sectionId: string;
}

interface NavbarButton {
  label: string;
  href: string;
  variant?: "default" | "secondary" | "outline" | "ghost";
}

interface NavbarProps {
  appName?: string;
  items: NavbarItem[];
  buttons?: NavbarButton[];
}

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar = ({ appName, items, buttons }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  return (
    <nav className="z-50 sticky top-0 w-full bg-background/60 backdrop-blur-lg border-b border-border">
        <div className="flex items-center justify-between h-14 mx-auto md:max-w-7xl md:px-6 px-2">
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>

          <div className="hidden md:flex items-center">
            <button onClick={() => handleNavClick("hero")} className="cursor-pointer mr-3">
                <span className="font-sans font-bold">{appName}/</span>
            </button>
            {items.map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  onClick={() => handleNavClick(item.sectionId)}
                >
                  {item.label}
                </Button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {buttons?.map((button) => (
              <Button
                key={button.label}
                asChild
                variant={button.variant || "default"}
                className="text-sm"
              >
                <Link href={button.href}>{button.label}</Link>
              </Button>
            ))}
            <ThemeToggle />
          </div>
        </div>

        {isOpen && (
          <div className="pt-4 pb-4 flex flex-col md:hidden border-t border-border">
            {items.map((item) => (
              <button
                key={item.label}
                className="text-left py-2 px-4 text-base opacity-80 hover:opacity-100 transition-opacity"
                onClick={() => handleNavClick(item.sectionId)}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
    </nav>
  );
};

export { Navbar };
