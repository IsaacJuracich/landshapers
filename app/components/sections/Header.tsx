"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { m, AnimatePresence } from "framer-motion";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      className={`fixed top-0 fixed-safe z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo.png"
              alt="Landshapers Logo"
              width={40}
              height={40}
              className="rounded-xl"
            />
            <span className="text-2xl font-bold text-charcoal">
              Landshapers
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-charcoal hover:text-evergreen transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Button href="tel:608-632-8046" size="sm">
              Call 608-632-8046
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-charcoal hover:bg-stone transition-colors"
            aria-label="Toggle menu"
          >
            <m.div
              animate={isOpen ? "open" : "closed"}
              className="w-6 h-6 flex flex-col justify-center items-center"
            >
              <m.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 5 },
                }}
                className="w-6 h-0.5 bg-charcoal block mb-1 origin-center transition-all duration-300"
              />
              <m.span
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                className="w-6 h-0.5 bg-charcoal block mb-1 transition-all duration-300"
              />
              <m.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -5 },
                }}
                className="w-6 h-0.5 bg-charcoal block origin-center transition-all duration-300"
              />
            </m.div>
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <m.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-stone/20 bg-white/95 backdrop-blur-md"
            >
              <div className="py-4 space-y-4">
                {navigation.map((item, index) => (
                  <m.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="block px-4 py-2 text-charcoal hover:text-evergreen hover:bg-stone/50 rounded-lg transition-colors duration-200 font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </m.div>
                ))}
                <m.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navigation.length * 0.1 }}
                  className="px-4"
                >
                  <Button
                    href="tel:608-632-8046"
                    size="sm"
                    className="w-full justify-center"
                  >
                    Call 608-632-8046
                  </Button>
                </m.div>
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
};

export { Header };
