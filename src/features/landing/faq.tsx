import { Accordion, Accordions } from '@/components/ui/accordion';

export function Faq() {
  return (
    <section className="mb-32 mt-12" id='faq'>
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto flex max-w-3xl flex-col text-left md:text-center">
          <h2 className="mb-3 text-3xl font-semibold md:mb-4 lg:mb-6 lg:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground lg:text-lg mb-6 md:mb-8 lg:mb-12">
            Everything you need to know about our unified email inbox. Still have questions? Don’t hesitate to reach out to our support team.
          </p>
        </div>
        <Accordions className="w-full" type="single">
          <Accordion id="how-it-works" title="How does the unified inbox work?">
            <p>
              You connect your existing email accounts (Gmail, Outlook, iCloud, etc.) via OAuth. We securely fetch your emails and display them in a single, unified interface.
            </p>
          </Accordion>

          <Accordion id="is-it-secure" title="Is it safe to connect my email accounts?">
            <p>
              Yes. We use industry-standard OAuth 2.0 for authentication and never store your passwords. Your tokens are encrypted and access is limited to reading and sending emails.
            </p>
          </Accordion>

          <Accordion id="which-providers" title="Which email providers are supported?">
            <p>
              We support Gmail, Outlook, iCloud, Yahoo, and any other provider with IMAP access. More integrations are added regularly.
            </p>
          </Accordion>

          <Accordion id="can-i-send" title="Can I send emails from connected accounts?">
            <p>
              Absolutely. You can choose which account to send from when composing a new email in the app.
            </p>
          </Accordion>

          <Accordion id="is-there-a-free-plan" title="Is there a free plan?">
            <p>
              Yes, you can connect up to two email accounts for free. Premium plans unlock more connections and advanced features.
            </p>
          </Accordion>
        </Accordions>
      </div>
    </section>
  );
}
