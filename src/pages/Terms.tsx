import { motion } from 'motion/react';

export default function Terms() {
  return (
    <main>
      {/* Hero */}
      <header className="pt-40 pb-12 px-6 md:px-12 max-w-screen-2xl mx-auto">
        <div className="max-w-4xl">
          <p className="font-label text-xs uppercase tracking-[0.2em] text-primary mb-6">Legal</p>
          <h1 className="font-headline italic font-light text-4xl md:text-6xl leading-tight text-on-surface">
            Terms of Service
          </h1>
          <p className="font-label text-xs uppercase tracking-[0.2em] text-secondary mt-6">
            Last updated: May 21, 2026
          </p>
        </div>
      </header>

      {/* Body */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="px-6 md:px-12 pb-24 max-w-3xl mx-auto"
      >
        <div className="space-y-12 font-body text-base md:text-lg text-secondary leading-relaxed">
          <Section title="Agreement">
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the Dearborn Woods website at{' '}
              <a className="text-primary hover:underline" href="https://dearbornwoodsnh.com">dearbornwoodsnh.com</a>{' '}
              (the &ldquo;Site&rdquo;), operated for the Dearborn Woods development in Greenland, New Hampshire. By
              accessing or using the Site you agree to these Terms. If you do not agree, please do not use the Site.
            </p>
          </Section>

          <Section title="About the Site">
            <p>
              The Site is a marketing presence for the Dearborn Woods custom-home development. The homes are built by
              River Birch Builders and the development is listed by Proulx Real Estate. The Site is provided to share
              information about lots, floor plans, and the surrounding community, and to let interested parties get in
              touch with us.
            </p>
          </Section>

          <Section title="Not a real-estate offer">
            <p>
              Information on this Site &mdash; including lot status, floor plans, square footage, room counts, finishes,
              pricing, availability, and photographs &mdash; is provided for general informational purposes and is subject
              to change without notice. Nothing on this Site constitutes an offer to sell, a solicitation of an offer to
              buy, or a binding representation about any property or home. Any actual purchase of a home or lot at Dearborn
              Woods will be governed by a separate written purchase and sale agreement and any applicable state and
              federal real-estate laws and disclosures.
            </p>
            <p>
              Photographs and renderings on the Site may depict prior River Birch Builders projects, model homes, or
              artists&rsquo; conceptions and may not depict the specific home, lot, or finishes available for sale.
              Dimensions are approximate. Lot statuses (Available / Reserved / Sold) reflect our records at the time the
              Site is updated and can change at any time.
            </p>
          </Section>

          <Section title="Acceptable use">
            <p>
              You may browse the Site for your personal, non-commercial use. You agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Use the Site or any content from it for any unlawful purpose.</li>
              <li>Copy, reproduce, republish, or redistribute Site content for commercial purposes without our written permission.</li>
              <li>Attempt to interfere with, disable, or circumvent any security feature of the Site.</li>
              <li>Use automated tools (scrapers, bots, etc.) to harvest content or contact information from the Site.</li>
              <li>Misrepresent your identity when submitting a form or making an inquiry.</li>
            </ul>
          </Section>

          <Section title="Intellectual property">
            <p>
              Site content &mdash; including text, photography, floor plans, illustrations, the painted site plan, logos,
              and graphics &mdash; is the property of Dearborn Woods, River Birch Builders, Proulx Real Estate, or their
              respective photographers and licensors, and is protected by U.S. and international intellectual property laws.
              River Birch Builders and Proulx Real Estate logos are trademarks of their respective owners and are used here
              with permission. You may not use any of these marks without the owner&rsquo;s prior written permission.
            </p>
          </Section>

          <Section title="Third-party links">
            <p>
              The Site may link to third-party websites (for example, River Birch Builders&rsquo; or Proulx Real
              Estate&rsquo;s own sites). We do not control and are not responsible for the content, privacy practices, or
              availability of those sites. Following a link is at your own discretion and risk.
            </p>
          </Section>

          <Section title="No professional advice">
            <p>
              Information on the Site is not legal, financial, tax, or real-estate advice. You should consult your own
              attorney, broker, accountant, or other qualified professional before making decisions based on anything you
              read here.
            </p>
          </Section>

          <Section title="Disclaimer of warranties">
            <p>
              The Site and its content are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties
              of any kind, express or implied, including but not limited to warranties of accuracy, merchantability,
              fitness for a particular purpose, or non-infringement. We do not warrant that the Site will be uninterrupted,
              error-free, or secure, or that any information on it is accurate or current.
            </p>
          </Section>

          <Section title="Limitation of liability">
            <p>
              To the fullest extent permitted by law, Dearborn Woods, River Birch Builders, Proulx Real Estate, and their
              respective owners, employees, and affiliates will not be liable for any indirect, incidental, special,
              consequential, or punitive damages, or any loss of profits or data, arising out of your use of the Site or
              reliance on its content, even if we have been advised of the possibility of such damages.
            </p>
          </Section>

          <Section title="Governing law">
            <p>
              These Terms are governed by the laws of the State of New Hampshire, without regard to its conflict-of-laws
              rules. Any dispute arising out of or relating to these Terms or your use of the Site will be brought
              exclusively in the state or federal courts located in Rockingham County, New Hampshire, and you consent to
              the personal jurisdiction of those courts.
            </p>
          </Section>

          <Section title="Changes to these Terms">
            <p>
              We may update these Terms from time to time. When we do, we will update the &ldquo;Last updated&rdquo; date
              at the top of the page. Continued use of the Site after a change means you accept the updated Terms.
            </p>
          </Section>

          <Section title="Contact us">
            <p>
              Questions about these Terms should be sent to:
            </p>
            <div className="mt-4 space-y-1">
              <p className="text-on-surface">Dearborn Woods</p>
              <p>Wentworth Drive, Greenland, NH 03840</p>
              <p>
                <a className="text-primary hover:underline" href="mailto:info@dearbornwoodsnh.com">info@dearbornwoodsnh.com</a>
              </p>
              <p>
                <a className="text-primary hover:underline" href="tel:6032054463">603-205-4463</a>
              </p>
            </div>
          </Section>
        </div>
      </motion.section>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-headline italic text-2xl md:text-3xl text-on-surface mb-4">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}
