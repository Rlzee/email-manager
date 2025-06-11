export function Footer() {
  return (
    <footer className="bg-background/60 backdrop-blur-lg border-t border-border py-6">
      <div className="mx-auto max-w-7xl px-6 flex flex-col items-center space-y-4">
        <div className="text-sm text-foreground font-sans">
          © {new Date().getFullYear()} EM. All rights reserved.
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-sm text-foreground/80 hover:text-primary">
            Privacy Policy
          </a>
          <a href="#" className="text-sm text-foreground/80 hover:text-primary">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
