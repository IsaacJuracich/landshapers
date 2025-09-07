"use client";

import React from "react";
import { m } from "framer-motion";
import { Container } from "../ui/Container";

const TrustStrip: React.FC = () => {
  const services = [
    "Engineered Drainage",
    "Retaining Walls",
    "Patios & Walkways",
    "Erosion Control",
    "Landscape Design",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 bg-evergreen text-white">
      <Container>
        <m.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-6 md:gap-12"
        >
          {services.map((service, index) => (
            <m.div
              key={service}
              variants={itemVariants}
              className="flex items-center"
            >
              <span className="text-sm md:text-base font-semibold whitespace-nowrap">
                {service}
              </span>
              {index < services.length - 1 && (
                <div className="w-2 h-2 bg-lime-accent rounded-full ml-6 md:ml-12 hidden sm:block" />
              )}
            </m.div>
          ))}
        </m.div>
      </Container>
    </section>
  );
};

export { TrustStrip };
