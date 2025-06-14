export function Feature() {
  return (
    <section id="feature" className="pt-16 md:pt-0">
      <div className="mx-auto max-w-7xl px-6">
        {/* <div className="mx-auto flex max-w-3xl flex-col text-left md:text-center">
          <h2 className="mb-3 text-3xl font-semibold md:mb-4 lg:mb-6 lg:text-4xl">
            Unify your inbox. Supercharge your productivity
          </h2>
        </div> */}

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
              Automatically apply the right signature for the right email —
              work, personal, or custom — with zero effort.
            </p>
          </div>

          <div className="flex-1 space-y-4 p-6 bg-secondary border">
            <h3 className="text-lg font-semibold">One-Click Unsubscribe</h3>
            <p className="text-sm text-muted-foreground">
              Unsubscribe from unwanted emails across all inboxes instantly.
              Take back control of your attention.
            </p>
          </div>

          <div className="flex-1 space-y-4 p-6 bg-secondary md:rounded-r-xl md:rounded-bl-none rounded-b-xl border">
            <h3 className="text-lg font-semibold">Smart Reply Suggestions</h3>
            <p className="text-sm text-muted-foreground">
              Reply faster with AI-generated responses tailored to your message
              tone and content.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
