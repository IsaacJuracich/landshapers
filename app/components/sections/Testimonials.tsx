"use client";

import React from "react";
import { m } from "framer-motion";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "../ui/Card";

interface Testimonial {
  quote: string;
  author: string;
  rating: number;
  timeAgo?: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote:
        "Had them come out for a mulch, rock and patio job. Luke and Ryan were very professional and gave me an estimate the next day. They had very good pricing, communication and quality of work. Highly recommend if you are looking for a fair priced landscaping company.",
      author: "Malik Reynolds",
      rating: 5,
      timeAgo: "5 months ago",
    },
    {
      quote:
        "Ryan was doing a paver patio next door to us, I asked him for an estimate on a paver walkway to our house that we had been wanting to have redone and a drainage issue on the side of our house. He was very professional, helpful and responsive.",
      author: "Cj Fox",
      rating: 5,
      timeAgo: "2 months ago",
    },
    {
      quote:
        "I called Ryan about having mulch and rock put into our landscape this spring. He quickly responded and helped me through picking out a type of rock that suited my house and surrounding landscape. He gave me a fair price and finished it in a timely matter. Highly suggest calling if you need work done.",
      author: "Grace Goodin",
      rating: 5,
      timeAgo: "4 months ago",
    },
    {
      quote:
        "Called them for a retaining wall quote on the side of my house. Ryan gave me an estimate the next day. Fair pricing and was done in a timely matter.",
      author: "Porter P",
      rating: 5,
      timeAgo: "5 months ago",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                    <p className="text-sm text-charcoal/60">Google Review</p>
                    {testimonial.timeAgo && (
                      <p className="text-xs text-charcoal/50">
                        {testimonial.timeAgo}
                      </p>
                    )}
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
