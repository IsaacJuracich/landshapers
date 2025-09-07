"use client";

import { useState } from "react";
import { m } from "framer-motion";
import {
  trackEvent,
  trackCustomEvent,
  trackPurchase,
  trackAddToCart,
  trackLead,
  trackCompleteRegistration,
  trackContact,
  trackSearch,
  trackViewContent,
} from "../providers/MetaPixelProvider";

export default function MetaPixelExamples() {
  const [searchQuery, setSearchQuery] = useState("");
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      trackSearch(searchQuery);
      alert(`Search tracked: "${searchQuery}"`);
    }
  };

  const handleAddToCart = (productName: string, price: number) => {
    trackAddToCart(productName, price);
    alert(`Added to cart tracked: ${productName} - $${price}`);
  };

  const handlePurchase = (value: number) => {
    trackPurchase(value);
    alert(`Purchase tracked: $${value}`);
  };

  const handleViewContent = (contentName: string) => {
    trackViewContent(contentName, "product", 29.99);
    alert(`View content tracked: ${contentName}`);
  };

  const handleLead = () => {
    if (email.trim()) {
      trackLead("Newsletter Signup");
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
      setEmail("");
    }
  };

  const handleContact = (method: string) => {
    trackContact(method);
    alert(`Contact tracked via: ${method}`);
  };

  const handleRegistration = () => {
    trackCompleteRegistration("email");
    alert("Registration completion tracked");
  };

  const handleCustomEvent = () => {
    trackCustomEvent("TemplateDemo", {
      demo_type: "meta_pixel",
      user_engagement: "high",
    });
    alert("Custom event tracked: TemplateDemo");
  };

  return (
    <div className="space-y-16 py-16">
      <section className="space-y-8">
        <m.h2
          className="text-3xl font-bold text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          data-aos="fade-up"
        >
          Meta Pixel Event Tracking Examples
        </m.h2>

        <m.p
          className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Click the buttons below to trigger Meta Pixel events. Check your
          browser's developer tools or Meta Events Manager to see the events
          being fired.
        </m.p>
      </section>

      {/* Standard Events */}
      <section className="space-y-8" data-aos="fade-up">
        <h3 className="text-2xl font-bold text-center">Standard Events</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Search Event */}
          <m.div
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h4 className="font-semibold mb-4">Search Event</h4>
            <div className="space-y-3">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter search query..."
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700"
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
              />
              <button
                onClick={handleSearch}
                className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                disabled={!searchQuery.trim()}
              >
                Track Search
              </button>
            </div>
          </m.div>

          {/* Add to Cart Events */}
          <m.div
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h4 className="font-semibold mb-4">Add to Cart</h4>
            <div className="space-y-2">
              <button
                onClick={() => handleAddToCart("Template Pro", 49.99)}
                className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
              >
                Add Template Pro ($49.99)
              </button>
              <button
                onClick={() => handleAddToCart("Basic Template", 19.99)}
                className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
              >
                Add Basic Template ($19.99)
              </button>
            </div>
          </m.div>

          {/* Purchase Event */}
          <m.div
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h4 className="font-semibold mb-4">Purchase</h4>
            <div className="space-y-2">
              <button
                onClick={() => handlePurchase(49.99)}
                className="w-full px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors"
              >
                Track Purchase ($49.99)
              </button>
              <button
                onClick={() => handlePurchase(99.99)}
                className="w-full px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors"
              >
                Track Purchase ($99.99)
              </button>
            </div>
          </m.div>

          {/* View Content Events */}
          <m.div
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h4 className="font-semibold mb-4">View Content</h4>
            <div className="space-y-2">
              <button
                onClick={() => handleViewContent("Animation Guide")}
                className="w-full px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition-colors"
              >
                View Animation Guide
              </button>
              <button
                onClick={() => handleViewContent("Template Documentation")}
                className="w-full px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition-colors"
              >
                View Documentation
              </button>
            </div>
          </m.div>

          {/* Contact Events */}
          <m.div
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              <button
                onClick={() => handleContact("email")}
                className="w-full px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors"
              >
                Contact via Email
              </button>
              <button
                onClick={() => handleContact("phone")}
                className="w-full px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors"
              >
                Contact via Phone
              </button>
            </div>
          </m.div>

          {/* Registration Event */}
          <m.div
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h4 className="font-semibold mb-4">Registration</h4>
            <button
              onClick={handleRegistration}
              className="w-full px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              Complete Registration
            </button>
          </m.div>
        </div>
      </section>

      {/* Lead Generation */}
      <section className="space-y-8" data-aos="fade-up" data-aos-delay="200">
        <h3 className="text-2xl font-bold text-center">Lead Generation</h3>

        <m.div
          className="max-w-md mx-auto p-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h4 className="font-semibold mb-4 text-center">
            Subscribe to Newsletter
          </h4>
          <div className="space-y-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email..."
              className="w-full p-3 rounded text-gray-800"
              onKeyPress={(e) => e.key === "Enter" && handleLead()}
            />
            <button
              onClick={handleLead}
              className="w-full px-4 py-3 bg-white text-blue-600 rounded hover:bg-gray-100 transition-colors font-semibold"
              disabled={!email.trim()}
            >
              Subscribe & Track Lead
            </button>
          </div>

          {showSuccess && (
            <m.div
              className="mt-4 p-3 bg-green-500 rounded text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              ✅ Lead tracked successfully!
            </m.div>
          )}
        </m.div>
      </section>

      {/* Custom Events */}
      <section className="space-y-8" data-aos="fade-up" data-aos-delay="400">
        <h3 className="text-2xl font-bold text-center">Custom Events</h3>

        <div className="max-w-md mx-auto">
          <m.div
            className="p-6 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg text-white text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h4 className="font-semibold mb-4">Custom Event Example</h4>
            <button
              onClick={handleCustomEvent}
              className="px-6 py-3 bg-white text-orange-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Fire Custom Event
            </button>
          </m.div>
        </div>
      </section>

      {/* Event Tracking Info */}
      <section className="space-y-8" data-aos="fade-up" data-aos-delay="600">
        <div className="max-w-4xl mx-auto p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <h3 className="text-xl font-bold mb-4">How to Monitor Events</h3>
          <div className="space-y-4 text-sm">
            <div>
              <h4 className="font-semibold">Browser Developer Tools:</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Open DevTools → Network tab → Filter by "facebook" to see pixel
                requests
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Meta Events Manager:</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Visit{" "}
                <a
                  href="https://business.facebook.com/events_manager2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Meta Events Manager
                </a>{" "}
                to see real-time events
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Meta Pixel Helper:</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Install the{" "}
                <a
                  href="https://chrome.google.com/webstore/detail/meta-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Meta Pixel Helper Chrome extension
                </a>{" "}
                for easy debugging
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
