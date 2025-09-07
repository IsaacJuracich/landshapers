"use client";

import { useEffect } from "react";
import Script from "next/script";
import { MetaPixelConfig } from "@/app/lib/types/meta-pixel";

interface MetaPixelProviderProps {
  children: React.ReactNode;
  config: MetaPixelConfig;
}

export default function MetaPixelProvider({
  children,
  config,
}: MetaPixelProviderProps) {
  const {
    pixelId,
    autoConfig = true,
    debug = false,
    testMode = false,
  } = config;

  useEffect(() => {
    if (typeof window !== "undefined" && window.fbq) {
      // Initialize the pixel
      window.fbq("init", pixelId, {
        autoConfig,
        debug,
      });

      // Track initial page view
      window.fbq("track", "PageView");

      if (debug) {
        console.log("Meta Pixel initialized:", pixelId);
      }
    }
  }, [pixelId, autoConfig, debug]);

  // Don't load the pixel in test mode or development
  const shouldLoadPixel = !testMode && pixelId && pixelId !== "YOUR_PIXEL_ID";

  return (
    <>
      {shouldLoadPixel && (
        <>
          <Script
            id="meta-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
              `,
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        </>
      )}
      {children}
    </>
  );
}

// Utility functions for tracking events
export const trackEvent = (
  eventName: string,
  parameters?: Record<string, any>
) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", eventName, parameters);
  }
};

export const trackCustomEvent = (
  eventName: string,
  parameters?: Record<string, any>
) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("trackCustom", eventName, parameters);
  }
};

// Standard event tracking functions
export const trackPurchase = (value: number, currency = "USD") => {
  trackEvent("Purchase", { value, currency });
};

export const trackAddToCart = (
  contentName: string,
  value?: number,
  currency = "USD"
) => {
  trackEvent("AddToCart", {
    content_name: contentName,
    value,
    currency,
  });
};

export const trackLead = (contentName?: string) => {
  trackEvent("Lead", {
    content_name: contentName,
  });
};

export const trackCompleteRegistration = (method?: string) => {
  trackEvent("CompleteRegistration", {
    registration_method: method,
  });
};

export const trackContact = (method?: string) => {
  trackEvent("Contact", {
    contact_method: method,
  });
};

export const trackSearch = (searchString: string) => {
  trackEvent("Search", {
    search_string: searchString,
  });
};

export const trackViewContent = (
  contentName: string,
  contentType?: string,
  value?: number,
  currency = "USD"
) => {
  trackEvent("ViewContent", {
    content_name: contentName,
    content_type: contentType,
    value,
    currency,
  });
};
