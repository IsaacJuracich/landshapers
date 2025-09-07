import React from "react";
import { Header } from "../components/sections/Header";
import { Footer } from "../components/sections/Footer";
import { Container } from "../components/ui/Container";
import { createPageMetadata } from "../lib/seo";

export const metadata = createPageMetadata(
  "Privacy Policy",
  "Privacy policy for Landshapers - learn how we collect, use, and protect your personal information.",
  "/privacy"
);

export default function Privacy() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-24 pb-16 bg-white">
          <Container size="md">
            <div className="prose prose-lg max-w-none">
              <h1
                className="text-4xl font-bold text-charcoal mb-8"
                data-aos="fade-up"
              >
                Privacy Policy
              </h1>

              <div
                className="text-charcoal/70 space-y-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <p className="text-sm text-charcoal/60">
                  Last updated: {new Date().toLocaleDateString()}
                </p>

                <section>
                  <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">
                    Information We Collect
                  </h2>
                  <p>
                    When you contact Landshapers or use our website, we may
                    collect the following information:
                  </p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>
                      Name and contact information (email, phone number,
                      address)
                    </li>
                    <li>Project details and preferences you share with us</li>
                    <li>Website usage data through cookies and analytics</li>
                    <li>Communication preferences</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">
                    How We Use Your Information
                  </h2>
                  <p>We use your information to:</p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>
                      Provide landscaping services and project consultations
                    </li>
                    <li>Communicate about your projects and our services</li>
                    <li>Improve our website and services</li>
                    <li>
                      Send occasional updates about our services (with your
                      consent)
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">
                    Information Sharing
                  </h2>
                  <p>
                    We do not sell, trade, or otherwise transfer your personal
                    information to third parties without your consent, except as
                    described in this policy. We may share information with:
                  </p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>Service providers who help us operate our business</li>
                    <li>Legal authorities when required by law</li>
                    <li>
                      Business partners directly related to your project (with
                      your consent)
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">
                    Data Security
                  </h2>
                  <p>
                    We implement appropriate security measures to protect your
                    personal information against unauthorized access,
                    alteration, disclosure, or destruction. However, no method
                    of transmission over the internet is 100% secure.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">
                    Your Rights
                  </h2>
                  <p>You have the right to:</p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>Access and update your personal information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Opt out of marketing communications</li>
                    <li>Request information about how we use your data</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">
                    Cookies
                  </h2>
                  <p>
                    Our website uses cookies to enhance your experience and
                    analyze website traffic. You can control cookie settings
                    through your browser preferences.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">
                    Contact Us
                  </h2>
                  <p>
                    If you have questions about this Privacy Policy or how we
                    handle your information, please contact us:
                  </p>
                  <div className="mt-4 p-4 bg-stone rounded-xl">
                    <p>
                      <strong>Landshapers</strong>
                    </p>
                    <p>
                      Email:{" "}
                      <a
                        href="mailto:landshaperslax@gmail.com"
                        className="text-evergreen"
                      >
                        landshaperslax@gmail.com
                      </a>
                    </p>
                    <p>
                      Phone:{" "}
                      <a href="tel:608-632-8046" className="text-evergreen">
                        608-632-8046
                      </a>
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">
                    Changes to This Policy
                  </h2>
                  <p>
                    We may update this Privacy Policy from time to time. We will
                    notify you of any changes by posting the new policy on this
                    page and updating the "last updated" date.
                  </p>
                </section>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
