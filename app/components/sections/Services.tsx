"use client";

import React from "react";
import { m } from "framer-motion";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "../ui/Card";

const Services: React.FC = () => {
  const services = [
    {
      title: "Drainage Solutions",
      description:
        "French drains, swales, downspout redirection, grading that moves water away from structures.",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.002 4.002 0 003 15z"
          />
        </svg>
      ),
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Erosion Control",
      description:
        "Retaining walls, terracing, geogrid, erosion matting, slope stabilization.",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
      color: "text-evergreen",
      bgColor: "bg-evergreen/10",
    },
    {
      title: "Outdoor Living & Patios",
      description:
        "Paver patios, steps, fire features, seating walls, integrated lighting.",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.879 16.121A3 3 0 1012.015 11L11 14l4 4c-.387 1.333-1.333 2.333-2.5 2.5l-1.5-1.5-1.5-1.5z"
          />
        </svg>
      ),
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      title: "Landscape Styling",
      description:
        "Planting schemes, bed shaping, edging, mulch/rock, curb appeal refreshes.",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      color: "text-moss",
      bgColor: "bg-moss/10",
    },
    {
      title: "Protect & Prevent",
      description:
        "Waterproofing interfaces, driveway edges, foundation protection details.",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="section-padding bg-stone">
      <Container>
        <SectionHeader
          title="Services Overview"
          subtitle="Comprehensive solutions for every outdoor challenge"
        />

        <m.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <m.div key={service.title} variants={cardVariants}>
              <Card className="h-full text-center group">
                <m.div
                  className={`w-20 h-20 mx-auto mb-6 rounded-2xl ${service.bgColor} flex items-center justify-center ${service.color} group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </m.div>

                <h3 className="text-xl font-bold text-charcoal mb-4">
                  {service.title}
                </h3>

                <p className="text-charcoal/70 leading-relaxed">
                  {service.description}
                </p>
              </Card>
            </m.div>
          ))}
        </m.div>
      </Container>
    </section>
  );
};

export { Services };
