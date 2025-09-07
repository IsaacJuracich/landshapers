import React from "react";
import { Header } from "../components/sections/Header";
import { Footer } from "../components/sections/Footer";
import { Container } from "../components/ui/Container";
import { generateMetadata } from "../lib/seo";

export const metadata = generateMetadata(
  "Terms of Service",
  "Terms of service for Landshapers - understand the terms and conditions for our landscaping services.",
  "/terms"
);

export default function Terms() {
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
                Terms of Service
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
                    Agreement to Terms
                  </h2>
                  <p>
                    By accessing and using Landshapers' services or website, you
                    agree to be bound by these Terms of Service and all
                    applicable laws and regulations. If you do not agree with
                    any of these terms, you are prohibited from using our
                    services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">
                    Services
                  </h2>
                  <p>
                    Landshapers provides landscaping services including but not
                    limited to:
                  </p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>Drainage solutions and water management</li>
                    <li>Erosion control and slope stabilization</li>
                    <li>Outdoor living space construction</li>
                    <li>Landscape design and installation</li>
                    <li>Property protection and maintenance</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">
                    Project Agreements
                  </h2>
                  <p>
                    All landscaping projects are subject to separate written
                    agreements that will include:
                  </p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>Detailed scope of work</li>
                    <li>Project timeline and milestones</li>
                    <li>Pricing and payment terms</li>
                    <li>Materials and warranty information</li>
                    <li>Change order procedures</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">
                    Payment Terms
                  </h2>
                  <p>
                    Payment terms will be specified in individual project
                    agreements. Generally:
                  </p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>
                      Consultations and estimates are provided at no charge
                    </li>
                    <li>
                      Project deposits may be required to secure scheduling
                    </li>
                    <li>Progress payments align with project milestones</li>
                    <li>
                      Final payment is due upon project completion and approval
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">
                    Warranties and Guarantees
                  </h2>
                  <p>
                    We stand behind our work with appropriate warranties on
                    materials and workmanship. Specific warranty terms will be
                    detailed in your project agreement and may vary based on the
                    type of work performed and materials used.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">
                    Limitations of Liability
                  </h2>
                  <p>
                    Landshapers' liability is limited to the cost of the
                    specific services provided. We are not responsible for:
                  </p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>
                      Pre-existing conditions not disclosed during assessment
                    </li>
                    <li>
                      Damage from extreme weather events beyond normal design
                      parameters
                    </li>
                    <li>
                      Issues arising from client modifications or third-party
                      work
                    </li>
                    <li>Consequential or indirect damages</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">
                    Property Access and Permits
                  </h2>
                  <p>Clients are responsible for:</p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>Providing clear access to work areas</li>
                    <li>
                      Obtaining necessary permits (unless otherwise agreed)
                    </li>
                    <li>Marking underground utilities before work begins</li>
                    <li>Informing us of any site hazards or restrictions</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">
                    Cancellation Policy
                  </h2>
                  <p>
                    Project cancellation terms will be specified in individual
                    agreements. Generally, cancellations must be made in
                    writing, and costs for materials ordered or work completed
                    may apply.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">
                    Dispute Resolution
                  </h2>
                  <p>
                    We are committed to resolving any issues promptly and
                    fairly. Disputes will first be addressed through direct
                    communication. If necessary, disputes may be resolved
                    through mediation or arbitration as specified in project
                    agreements.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">
                    Contact Information
                  </h2>
                  <p>
                    For questions about these Terms of Service or any of our
                    policies, please contact us:
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
                    Changes to Terms
                  </h2>
                  <p>
                    We reserve the right to modify these terms at any time.
                    Changes will be posted on this page with an updated revision
                    date. Continued use of our services constitutes acceptance
                    of any changes.
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
