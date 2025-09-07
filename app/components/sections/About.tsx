"use client";

import React from "react";
import Image from "next/image";
import { m } from "framer-motion";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";

const About: React.FC = () => {
  const differentiators = [
    {
      title: "Engineering-first approach",
      description:
        "We diagnose the grade, soil, and water movement before we design.",
      icon: (
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
            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Durability by design",
      description: "Materials and methods selected for Midwest seasons.",
      icon: (
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
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "Clean execution",
      description: "Professional crews, tidy job sites, reliable timelines.",
      icon: (
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
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <SectionHeader
              title="Built on Craft. Driven by Problem-Solving."
              centered={false}
            />

            <div
              className="space-y-6 mb-8"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <p className="text-lg text-charcoal/80 leading-relaxed">
                Landshapers is a premium landscaping team focused on the two
                things your property needs most: functional solutions and
                lasting beauty. From engineered drainage to thoughtfully
                designed outdoor living, we bring the right plan, the right
                materials, and the right crew to get it done right the first
                time.
              </p>
            </div>

            <m.div
              className="space-y-6"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {differentiators.map((item, index) => (
                <m.div
                  key={item.title}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-evergreen/10 rounded-xl flex items-center justify-center text-evergreen">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">
                      {item.title}
                    </h3>
                    <p className="text-charcoal/70">{item.description}</p>
                  </div>
                </m.div>
              ))}
            </m.div>
          </div>

          <div className="relative" data-aos="fade-left" data-aos-delay="200">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/api/placeholder/600/700"
                alt="Professional landscaping crew working on a project"
                width={600}
                height={700}
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-evergreen/20 to-transparent" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-lime-accent/20 rounded-full blur-xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-moss/20 rounded-full blur-xl" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export { About };
