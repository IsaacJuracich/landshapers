"use client";

import React from "react";
import { m } from "framer-motion";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "../ui/Card";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote:
        "They fixed a long-standing water problem and gave us a beautiful patio in the process.",
      author: "Jenna R.",
      rating: 5,
    },
    {
      quote:
        "Professional plan, meticulous work, and the crew was great with our timeline.",
      author: "Marcus T.",
      rating: 5,
    },
    {
      quote:
        "The only team that actually measured the grade and explained the solution.",
      author: "Alicia K.",
      rating: 5,
    },
  ];

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex justify-center mb-4">
      {[...Array(rating)].map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 text-lime-accent fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );

  return (
    <section className="section-padding bg-stone">
      <Container>
        <SectionHeader
          title="What Our Clients Say"
          subtitle="Real feedback from homeowners who chose Landshapers"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <m.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="text-center h-full">
                <StarRating rating={testimonial.rating} />

                <blockquote className="text-lg text-charcoal/80 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-evergreen to-moss rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-charcoal/60">
                      Verified Customer
                    </p>
                  </div>
                </div>
              </Card>
            </m.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export { Testimonials };
