import React from "react";
import Image from "next/image";
import { Header } from "../components/sections/Header";
import { Footer } from "../components/sections/Footer";
import { Container } from "../components/ui/Container";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { generateMetadata } from "../lib/seo";

export const metadata = generateMetadata(
  "Services",
  "Comprehensive landscaping services including drainage solutions, erosion control, outdoor living spaces, and landscape styling.",
  "/services"
);

const services = [
  {
    title: "Drainage Solutions",
    description:
      "Comprehensive water management systems that protect your property from flooding and water damage.",
    features: [
      "French drain installation",
      "Surface water redirection",
      "Downspout extensions",
      "Grading and slope correction",
      "Catch basin installation",
      "Sump pump systems",
    ],
    image: "/api/placeholder/600/400",
    benefits: [
      "Prevents basement flooding",
      "Eliminates standing water",
      "Protects foundation integrity",
      "Reduces erosion risk",
    ],
  },
  {
    title: "Erosion Control",
    description:
      "Engineered solutions to stabilize slopes, prevent soil loss, and protect your landscape investment.",
    features: [
      "Retaining wall construction",
      "Terracing and grading",
      "Geogrid reinforcement",
      "Erosion matting installation",
      "Slope stabilization",
      "Bioengineering solutions",
    ],
    image: "/api/placeholder/600/400",
    benefits: [
      "Stops soil washout",
      "Stabilizes steep slopes",
      "Prevents property damage",
      "Long-term durability",
    ],
  },
  {
    title: "Outdoor Living & Patios",
    description:
      "Beautiful, functional outdoor spaces designed for entertainment, relaxation, and year-round enjoyment.",
    features: [
      "Paver patio installation",
      "Natural stone patios",
      "Fire pit and fireplace construction",
      "Outdoor kitchen integration",
      "Seating walls and planters",
      "Landscape lighting",
    ],
    image: "/api/placeholder/600/400",
    benefits: [
      "Increases property value",
      "Extends living space",
      "Perfect for entertaining",
      "Low maintenance materials",
    ],
  },
  {
    title: "Landscape Styling",
    description:
      "Thoughtful plant selection and design that enhances curb appeal while requiring minimal maintenance.",
    features: [
      "Native plant installation",
      "Seasonal color planning",
      "Mulching and edging",
      "Decorative rock features",
      "Bed reshaping and design",
      "Maintenance planning",
    ],
    image: "/api/placeholder/600/400",
    benefits: [
      "Enhanced curb appeal",
      "Reduced maintenance",
      "Seasonal interest",
      "Increased property value",
    ],
  },
  {
    title: "Protect & Prevent",
    description:
      "Proactive measures to safeguard your property against water damage and structural issues.",
    features: [
      "Foundation waterproofing",
      "Driveway edge protection",
      "Walkway stabilization",
      "Preventive grading",
      "Drainage inspections",
      "Maintenance programs",
    ],
    image: "/api/placeholder/600/400",
    benefits: [
      "Prevents costly repairs",
      "Long-term protection",
      "Peace of mind",
      "Professional maintenance",
    ],
  },
];

export default function Services() {
  return (
    <>
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
                Our <span className="gradient-text">Services</span>
              </h1>
              <p
                className="text-xl md:text-2xl text-charcoal/80 mb-8 leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Comprehensive landscaping solutions designed to solve problems,
                enhance beauty, and protect your property investment.
              </p>
              <Button
                href="/contact"
                size="lg"
                data-aos="fade-up"
                data-aos-delay="400"
                className="bg-white text-evergreen hover:bg-stone hover:text-evergreen"
              >
                Get Your Custom Plan
              </Button>
            </div>
          </Container>
        </section>

        {/* Services Detail */}
        <section className="section-padding bg-white">
          <Container>
            <div className="space-y-20">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <h2
                      className="text-3xl md:text-4xl font-bold text-charcoal mb-4"
                      data-aos="fade-up"
                    >
                      {service.title}
                    </h2>
                    <p
                      className="text-lg text-charcoal/80 mb-6 leading-relaxed"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      {service.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div data-aos="fade-up" data-aos-delay="200">
                        <h3 className="font-semibold text-charcoal mb-3">
                          What We Do:
                        </h3>
                        <ul className="space-y-2">
                          {service.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-center text-charcoal/70"
                            >
                              <svg
                                className="w-5 h-5 text-evergreen mr-2 flex-shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div data-aos="fade-up" data-aos-delay="300">
                        <h3 className="font-semibold text-charcoal mb-3">
                          Benefits:
                        </h3>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit) => (
                            <li
                              key={benefit}
                              className="flex items-center text-charcoal/70"
                            >
                              <svg
                                className="w-5 h-5 text-lime-accent mr-2 flex-shrink-0"
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
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <Button
                      href="/contact"
                      data-aos="fade-up"
                      data-aos-delay="400"
                    >
                      Learn More About {service.title}
                    </Button>
                  </div>

                  <div
                    className={`relative ${
                      index % 2 === 1 ? "lg:col-start-1" : ""
                    }`}
                    data-aos="fade-left"
                    data-aos-delay="200"
                  >
                    <Card hover={false} className="overflow-hidden">
                      <Image
                        src={service.image}
                        alt={`${service.title} by Landshapers`}
                        width={600}
                        height={400}
                        className="w-full h-64 md:h-80 object-cover"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                      />
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-evergreen text-white">
          <Container>
            <div className="text-center max-w-4xl mx-auto">
              <h2
                className="text-3xl md:text-4xl font-bold mb-6"
                data-aos="fade-up"
              >
                Ready to Get Started?
              </h2>
              <p
                className="text-xl text-white/90 mb-8 leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Every project starts with understanding your unique challenges
                and goals. Let's discuss how we can transform your outdoor
                space.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  href="/contact"
                  size="lg"
                  className="border-2 border-evergreen text-evergreen hover:bg-stone hover:text-evergreen"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  Get Your Free Consultation
                </Button>
                <Button
                  href="tel:608-632-8046"
                  variant="secondary"
                  size="lg"
                  className="border-2 border-white text-white"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  Call 608-632-8046
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
