// Meta Pixel TypeScript definitions
declare global {
  interface Window {
    fbq: FacebookPixel;
    _fbq: FacebookPixel;
  }
}

export interface FacebookPixel {
  (command: "init", pixelId: string, options?: InitOptions): void;
  (
    command: "track",
    eventName: StandardEvent,
    parameters?: EventParameters
  ): void;
  (command: "track", eventName: string, parameters?: EventParameters): void;
  (
    command: "trackCustom",
    eventName: string,
    parameters?: EventParameters
  ): void;
  (
    command: "trackSingle",
    pixelId: string,
    eventName: StandardEvent,
    parameters?: EventParameters
  ): void;
  (
    command: "trackSingle",
    pixelId: string,
    eventName: string,
    parameters?: EventParameters
  ): void;
  (
    command: "trackSingleCustom",
    pixelId: string,
    eventName: string,
    parameters?: EventParameters
  ): void;
  (command: "consent", action: ConsentAction): void;
  (
    command: "dataProcessingOptions",
    options: string[],
    country?: number,
    state?: number
  ): void;
  queue: any[];
  push: (args: any[]) => void;
  loaded: boolean;
  version: string;
}

export interface InitOptions {
  autoConfig?: boolean;
  debug?: boolean;
  external_id?: string;
  agent?: string;
}

export type StandardEvent =
  | "AddPaymentInfo"
  | "AddToCart"
  | "AddToWishlist"
  | "CompleteRegistration"
  | "Contact"
  | "CustomizeProduct"
  | "Donate"
  | "FindLocation"
  | "InitiateCheckout"
  | "Lead"
  | "PageView"
  | "Purchase"
  | "Schedule"
  | "Search"
  | "StartTrial"
  | "SubmitApplication"
  | "Subscribe"
  | "ViewContent";

export type ConsentAction = "grant" | "revoke";

export interface EventParameters {
  content_category?: string;
  content_ids?: string[];
  content_name?: string;
  content_type?: string;
  contents?: Content[];
  currency?: string;
  custom_data?: Record<string, any>;
  delivery_category?: "in_store" | "curbside" | "home_delivery";
  num_items?: number;
  predicted_ltv?: number;
  search_string?: string;
  status?: boolean;
  subscription_id?: string;
  value?: number;
  // E-commerce specific
  order_id?: string;
  // Lead specific
  lead_event_source?: string;
  // Contact specific
  contact_method?: string;
  // Registration specific
  registration_method?: string;
}

export interface Content {
  id: string;
  quantity?: number;
  item_price?: number;
  title?: string;
  description?: string;
  brand?: string;
  category?: string;
}

export interface MetaPixelConfig {
  pixelId: string;
  autoConfig?: boolean;
  debug?: boolean;
  testMode?: boolean;
}
