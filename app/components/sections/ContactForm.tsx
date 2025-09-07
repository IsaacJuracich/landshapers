"use client";

import React, { useState } from "react";
import { m } from "framer-motion";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "../ui/Card";
import { Input } from "../ui/Input";
import { Textarea } from "../ui/Textarea";
import { Select } from "../ui/Select";
import { Button } from "../ui/Button";
import {
  PROJECT_TYPES,
  type ContactFormData,
  type FormErrors,
} from "@/app/lib/types/forms";
import { validateEmail, validatePhone } from "@/app/lib/utils";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.projectType) {
      newErrors.projectType = "Please select a project type";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // In a real app, you would send the data to your API
      console.log("Form submitted:", formData);

      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange =
    (field: keyof ContactFormData) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      setFormData((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));

      // Clear error when user starts typing
      if (errors[field]) {
        setErrors((prev) => ({
          ...prev,
          [field]: undefined,
        }));
      }
    };

  if (isSubmitted) {
    return (
      <section className="section-padding bg-evergreen text-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <m.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-lime-accent rounded-full flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-charcoal"
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
              </div>

              <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
              <p className="text-xl mb-6">
                We've received your message and will get back to you within 24
                hours.
              </p>
              <p className="text-white/80 mb-8">
                For urgent matters, please call us at{" "}
                <a
                  href="tel:608-632-8046"
                  className="text-lime-accent font-semibold"
                >
                  608-632-8046
                </a>
              </p>

              <Button
                variant="secondary"
                onClick={() => setIsSubmitted(false)}
                className="border-white text-white hover:bg-white hover:text-evergreen"
              >
                Send Another Message
              </Button>
            </m.div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="section-padding bg-stone">
      <Container>
        <SectionHeader
          title="Let's Fix Water Problems—and Upgrade Your Outdoors"
          subtitle="Tell us what's happening—standing water, slope erosion, basement seepage, or a space you'd love to use more. We'll design the right fix and make it beautiful."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-evergreen rounded-xl flex items-center justify-center text-white mr-4">
                  <svg
                    className="w-6 h-6"
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
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal">Phone</h3>
                  <a
                    href="tel:608-632-8046"
                    className="text-evergreen hover:text-moss transition-colors"
                  >
                    608-632-8046
                  </a>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-evergreen rounded-xl flex items-center justify-center text-white mr-4">
                  <svg
                    className="w-6 h-6"
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
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal">Email</h3>
                  <a
                    href="mailto:landshaperslax@gmail.com"
                    className="text-evergreen hover:text-moss transition-colors"
                  >
                    landshaperslax@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-evergreen rounded-xl flex items-center justify-center text-white mr-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal">Service Area</h3>
                  <p className="text-charcoal/70">
                    Local and surrounding communities
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  label="Name"
                  value={formData.name}
                  onChange={handleChange("name")}
                  error={errors.name}
                  placeholder="Your full name"
                  required
                />

                <Input
                  label="Email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange("email")}
                  error={errors.email}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  label="Phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange("phone")}
                  error={errors.phone}
                  placeholder="(555) 123-4567"
                  required
                />

                <Select
                  label="Project Type"
                  value={formData.projectType}
                  onChange={handleChange("projectType")}
                  error={errors.projectType}
                  options={PROJECT_TYPES}
                  placeholder="Select project type"
                  required
                />
              </div>

              <Textarea
                label="Message"
                value={formData.message}
                onChange={handleChange("message")}
                error={errors.message}
                placeholder="Tell us about your project, challenges, or vision..."
                rows={5}
                required
              />

              <Button
                type="submit"
                size="lg"
                loading={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? "Sending Message..." : "Send Message"}
              </Button>
            </form>
          </Card>
        </div>
      </Container>
    </section>
  );
};

export { ContactForm };
