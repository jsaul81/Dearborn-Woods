import { motion } from 'motion/react';

export default function Privacy() {
  return (
    <main>
      {/* Hero */}
      <header className="pt-40 pb-12 px-6 md:px-12 max-w-screen-2xl mx-auto">
        <div className="max-w-4xl">
          <p className="font-label text-xs uppercase tracking-[0.2em] text-primary mb-6">Legal</p>
          <h1 className="font-headline italic font-light text-4xl md:text-6xl leading-tight text-on-surface">
            Privacy Policy
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
          <Section title="Overview">
            <p>
              Dearborn Woods (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) operates this website at{' '}
              <a className="text-primary hover:underline" href="https://dearbornwoodsnh.com">dearbornwoodsnh.com</a>{' '}
              to share information about our custom-home development in Greenland, New Hampshire. This policy explains what
              information we collect when you visit the site, how we use it, and the choices you have. The development is
              built by River Birch Builders and listed by Proulx Real Estate; inquiries you send through this site are
              forwarded to those parties so they can respond to you.
            </p>
          </Section>

          <Section title="Information you provide">
            <p>
              You only share information with us when you choose to. The two ways that happens on this site are:
            </p>
            <ul className="list-disc pl-6 space-y-3 mt-4">
              <li>
                <strong className="text-on-surface font-medium">Contact form.</strong> If you submit the form on our{' '}
                <a className="text-primary hover:underline" href="/contact">Contact</a> page, we collect the name, email
                address, phone number, interest level, and message you provide. We use that information to respond to your
                inquiry and to follow up about properties at Dearborn Woods.
              </li>
              <li>
                <strong className="text-on-surface font-medium">Email and phone.</strong> If you click an email link or
                call a phone number on this site, your message or call goes directly to the relevant party (typically
                <a className="text-primary hover:underline" href="mailto:info@dearbornwoodsnh.com"> info@dearbornwoodsnh.com</a>{' '}
                or our listing agent at Proulx Real Estate). We retain those communications in our standard email and phone
                records.
              </li>
            </ul>
            <p className="mt-4">
              We do not require you to create an account, and we do not sell, rent, or trade your information to third
              parties for marketing purposes.
            </p>
          </Section>

          <Section title="Information collected automatically">
            <p>
              This site does not use Google Analytics, advertising pixels, or third-party behavioral tracking. Our hosting
              provider may keep standard server logs (IP address, browser type, pages visited, timestamps) for security and
              performance purposes. These logs are retained by the hosting provider on our behalf and are not used to build
              a profile of you.
            </p>
          </Section>

          <Section title="Cookies">
            <p>
              This site does not set tracking or advertising cookies. A browser may store small amounts of data locally to
              keep the site running smoothly (for example, remembering that an image has already been loaded), but we do
              not use cookies to follow you across other websites.
            </p>
          </Section>

          <Section title="How we share information">
            <p>
              Information you submit through the contact form, by email, or by phone is shared with the people who need to
              respond to you &mdash; typically River Birch Builders and Proulx Real Estate. We may also share information
              if required by law, in response to a valid legal request, or to protect the rights, property, or safety of
              our customers, our partners, or the public.
            </p>
          </Section>

          <Section title="How long we keep your information">
            <p>
              We retain inquiries and related correspondence for as long as needed to respond to you and to manage the
              relationship that follows. You can ask us to delete your information at any time by emailing the address
              below, and we will do so unless a legal or business record requires us to retain it.
            </p>
          </Section>

          <Section title="Your choices">
            <p>
              You can choose not to provide information through the contact form &mdash; you can also reach us by phone if
              you prefer. If you have submitted information and would like to access it, correct it, or have it deleted,
              email us at{' '}
              <a className="text-primary hover:underline" href="mailto:info@dearbornwoodsnh.com">info@dearbornwoodsnh.com</a>{' '}
              and we will respond within a reasonable time.
            </p>
          </Section>

          <Section title="Children's privacy">
            <p>
              This site is intended for adults considering the purchase of a home. We do not knowingly collect personal
              information from children under 13. If you believe we have collected information from a child, please contact
              us and we will delete it.
            </p>
          </Section>

          <Section title="Changes to this policy">
            <p>
              We may update this policy from time to time. When we do, we will update the &ldquo;Last updated&rdquo; date
              at the top of the page. Material changes will be reflected on this page; continued use of the site after a
              change means you accept the updated policy.
            </p>
          </Section>

          <Section title="Contact us">
            <p>
              Questions about this policy or about information we may hold about you should be sent to:
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
