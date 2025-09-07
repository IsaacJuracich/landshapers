"use client";

import React from "react";
import { m } from "framer-motion";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { Badge } from "../ui/Badge";

const Features: React.FC = () => {
  const stats = [
    { number: "10+", label: "Years Combined Experience" },
    { number: "100+", label: "Drainage Issues Resolved" },
    { number: "4-Season", label: "Durability Standards" },
  ];

  const benefits = [
    {
      title: "Protect your foundation",
      description: "Stop costly water damage before it starts.",
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
            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2v0a2 2 0 002-2h6l2 2h6a2 2 0 012 2v1"
          />
        </svg>
      ),
    },
    {
      title: "Keep your soil in place",
      description: "Solve slope and wash-out problems for good.",
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
    {
      title: "Add value instantly",
      description: "Outdoor living that looks premium and lasts.",
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
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeader
          title="Why Homeowners Choose Landshapers"
          subtitle="Proven results that protect and enhance your property"
        />

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16" data-aos="fade-up">
          {stats.map((stat, index) => (
            <m.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-evergreen to-moss rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
                {stat.number}
              </div>
              <Badge variant="success" size="lg">
                {stat.label}
              </Badge>
            </m.div>
          ))}
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <m.div
              key={benefit.title}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-evergreen/10 rounded-2xl flex items-center justify-center text-evergreen group-hover:bg-evergreen group-hover:text-white transition-all duration-300">
                {benefit.icon}
              </div>

              <h3 className="text-xl font-bold text-charcoal mb-3">
                {benefit.title}
              </h3>

              <p className="text-charcoal/70 leading-relaxed">
                {benefit.description}
              </p>
            </m.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export { Features };
