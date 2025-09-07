"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface AOSProviderProps {
  children: React.ReactNode;
  duration?: number;
  easing?:
    | "linear"
    | "ease"
    | "ease-in"
    | "ease-out"
    | "ease-in-out"
    | "ease-in-back"
    | "ease-out-back"
    | "ease-in-out-back"
    | "ease-in-sine"
    | "ease-out-sine"
    | "ease-in-out-sine"
    | "ease-in-quad"
    | "ease-out-quad"
    | "ease-in-out-quad"
    | "ease-in-cubic"
    | "ease-out-cubic"
    | "ease-in-out-cubic"
    | "ease-in-quart"
    | "ease-out-quart"
    | "ease-in-out-quart";
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
