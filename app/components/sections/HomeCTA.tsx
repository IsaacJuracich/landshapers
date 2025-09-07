"use client";

import React from "react";
import { m } from "framer-motion";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

const HomeCTA: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-evergreen to-moss text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-lime-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <Container className="relative z-10">
        <m.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            data-aos="fade-up"
          >
            Ready to Transform Your Outdoor Space?
          </h2>

          <p
            className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Get a custom plan that solves your water problems and creates the
            outdoor living space you've always wanted.
          </p>

          <m.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Button
              href="/contact"
              size="lg"
              className="border-2 border-evergreen text-evergreen hover:bg-stone hover:text-evergreen"
            >
              Get Your Custom Plan
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Button>

            <Button
              href="tel:608-632-8046"
              variant="secondary"
              size="lg"
              className="border-2 border-white text-white"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call Now: 608-632-8046
            </Button>
          </m.div>

          <m.p
            className="text-white/70 mt-6 text-sm"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            Free consultations • Licensed & insured • Satisfaction guaranteed
          </m.p>
        </m.div>
      </Container>
    </section>
  );
};

export { HomeCTA };
