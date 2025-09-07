"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface AOSProviderProps {
  children: React.ReactNode;
  duration?: number;
  easing?: string;
  once?: boolean;
  mirror?: boolean;
  offset?: number;
}

export default function AOSProvider({
  children,
  duration = 800,
  easing = "ease-in-out",
  once = true,
  mirror = false,
  offset = 120,
}: AOSProviderProps) {
  useEffect(() => {
    AOS.init({
      duration,
      easing,
      once,
      mirror,
      offset,
      disable: "phone", // Disable on mobile for better performance
    });

    // Refresh AOS on route changes
    const handleRouteChange = () => {
      AOS.refresh();
    };

    // Listen for route changes if using Next.js router
    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, [duration, easing, once, mirror, offset]);

  return <>{children}</>;
}
