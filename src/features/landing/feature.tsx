export function Feature() {
  return (
    <section className="py-16 md:py-32" id="feature">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto flex max-w-3xl flex-col text-left md:text-center">
          <h2 className="mb-3 text-3xl font-semibold md:mb-4 lg:mb-6 lg:text-4xl">
            Unify your inbox. Supercharge your productivity
          </h2>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="flex-1 border-r border-border h-20 flex relative"></div>
          <div className="flex-1 rounded-xl"></div>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="flex-1 border-r border-border h-24 flex relative">
            <div className="w-2/3 h-full ml-auto border-t border-l border-border rounded-tl-xl"></div>
          </div>
          <div className="flex-1 rounded-xl">
            <div className="w-2/3 h-full border-t border-r border-border rounded-tr-xl"></div>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex-1 space-y-4 p-6 rounded-xl bg-secondary border">
            <h3 className="text-lg font-semibold">Unified Inbox</h3>
            <p className="text-sm text-muted-foreground">
              Connect multiple email accounts (Gmail, Outlook, iCloud) and
              manage all your conversations from one centralized interface — no
              switching tabs.
            </p>
          </div>

          <div className="flex-1 space-y-4 p-6 bg-secondary rounded-xl border">
            <h3 className="text-lg font-semibold">
              Send & Reply from Any Account
            </h3>
            <p className="text-sm text-muted-foreground">
              Compose new emails or respond using any of your connected
              addresses, all without leaving the app. Full control over sender
              identity.
            </p>
          </div>

          <div className="flex-1 space-y-4 p-6 bg-secondary rounded-xl border">
            <h3 className="text-lg font-semibold">Secure & Real-Time</h3>
            <p className="text-sm text-muted-foreground">
              All connections are handled through secure OAuth. Your inbox stays
              synced in real-time across all providers with industry-grade
              encryption.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
