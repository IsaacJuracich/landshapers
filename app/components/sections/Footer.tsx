"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { m } from "framer-motion";
import { Container } from "../ui/Container";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const currentYear = new Date().getFullYear();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      // Simulate newsletter signup
      console.log("Newsletter signup:", email);
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-charcoal text-white">
      <Container>
        <div className="py-12 border-b border-white/10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <Image
                  src="/images/logo.png"
                  alt="Landshapers Logo"
                  width={40}
                  height={40}
                  className="rounded-xl"
                />
                <span className="text-2xl font-bold">Landshapers</span>
              </Link>

              <p className="text-white/70 mb-6 max-w-md leading-relaxed">
                Premium landscaping solutions that solve water problems, prevent
                erosion, and create beautiful outdoor spaces that last.
              </p>

              {/* Newsletter */}
              <div className="max-w-md">
                <h3 className="font-semibold mb-3">Stay Updated</h3>
                {isSubscribed ? (
                  <m.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-lime-accent font-medium"
                  >
                    ✓ Thanks for subscribing!
                  </m.div>
                ) : (
                  <form
                    onSubmit={handleNewsletterSubmit}
                    className="flex gap-2"
                  >
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      required
                    />
                    <Button type="submit" size="sm">
                      Subscribe
                    </Button>
                  </form>
                )}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-white/70 hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-3">
                <a
                  href="tel:608-632-8046"
                  className="flex items-center text-white/70 hover:text-white transition-colors duration-200"
                >
                  <svg
                    className="w-5 h-5 mr-2"
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
                  608-632-8046
                </a>

                <a
                  href="mailto:landshaperslax@gmail.com"
                  className="flex items-center text-white/70 hover:text-white transition-colors duration-200"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  landshaperslax@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
          <p>© {currentYear} Landshapers. All rights reserved.</p>

          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export { Footer };
