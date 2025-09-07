"use client";

import React from "react";
import Image from "next/image";
import { m } from "framer-motion";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-stone via-white to-stone">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/api/placeholder/1920/1080"
          alt="Beautiful landscaped patio with retaining wall"
          fill
          className="object-cover"
          priority
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
        <div className="absolute inset-0 bg-gradient-to-r from-evergreen/20 via-transparent to-moss/20" />
      </div>

      <Container className="relative z-10 text-center">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <m.div className="mb-6" data-aos="fade-up">
            <span className="inline-block px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-evergreen font-semibold text-sm mb-6">
              Premium Landscaping Solutions
            </span>
          </m.div>

          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-charcoal mb-6 leading-tight"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Stop Erosion. <br />
            <span className="gradient-text">Shape Space.</span> <br />
            Love Your Outdoors.
          </h1>

          <p
            className="text-lg md:text-xl lg:text-2xl text-charcoal/80 mb-8 max-w-4xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Landshapers designs and builds outdoor environments that solve water
            problems, protect your property, and look incredible—season after
            season.
          </p>

          <m.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <Button href="/contact" size="lg">
              Get a Custom Plan
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
            <Button href="tel:608-632-8046" variant="secondary" size="lg">
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
              Call 608-632-8046
            </Button>
          </m.div>
        </m.div>
      </Container>

      {/* Scroll Indicator */}
      <m.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-evergreen rounded-full flex justify-center">
          <div className="w-1 h-3 bg-evergreen rounded-full mt-2"></div>
        </div>
      </m.div>
    </section>
  );
};

export { Hero };
