import React from "react";
import { Header } from "../components/sections/Header";
import { Footer } from "../components/sections/Footer";
import { ContactForm } from "../components/sections/ContactForm";
import { Container } from "../components/ui/Container";
import { createPageMetadata } from "../lib/seo";

export const metadata = createPageMetadata(
  "Contact",
  "Get in touch with Landshapers for your landscaping project. Call 608-632-8046 or fill out our contact form for a free consultation.",
  "/contact"
);

export default function Contact() {
  return (
    <div className="no-overflow">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-stone via-white to-stone">
          <Container>
            <div className="text-center max-w-4xl mx-auto">
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6"
                data-aos="fade-up"
              >
                Get In <span className="gradient-text">Touch</span>
              </h1>
              <p
                className="text-xl md:text-2xl text-charcoal/80 mb-8 leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Ready to solve your outdoor challenges? Let's discuss your
                project and create a custom plan that works for your property
                and budget.
              </p>
            </div>
          </Container>
        </section>

        {/* Contact Form Section */}
        <ContactForm />

        {/* Additional Info */}
        <section className="section-padding bg-white">
          <Container>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div data-aos="fade-up">
                <div className="w-16 h-16 mx-auto mb-4 bg-evergreen/10 rounded-2xl flex items-center justify-center text-evergreen">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-2">
                  Quick Response
                </h3>
                <p className="text-charcoal/70">
                  We respond to all inquiries within 24 hours, often much
                  sooner.
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="200">
                <div className="w-16 h-16 mx-auto mb-4 bg-evergreen/10 rounded-2xl flex items-center justify-center text-evergreen">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-2">
                  Free Consultation
                </h3>
                <p className="text-charcoal/70">
                  Initial site assessment and project consultation at no charge.
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="400">
                <div className="w-16 h-16 mx-auto mb-4 bg-evergreen/10 rounded-2xl flex items-center justify-center text-evergreen">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-2">
                  Detailed Proposal
                </h3>
                <p className="text-charcoal/70">
                  Clear scope, timeline, and pricing for your specific project.
                </p>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
