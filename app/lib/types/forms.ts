export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  message?: string;
}

export interface FormState {
  data: ContactFormData;
  errors: FormErrors;
  isSubmitting: boolean;
  isSubmitted: boolean;
}

export const PROJECT_TYPES = [
  { value: "drainage", label: "Drainage Solutions" },
  { value: "erosion", label: "Erosion Control" },
  { value: "outdoor-living", label: "Outdoor Living & Patios" },
  { value: "landscape-styling", label: "Landscape Styling" },
  { value: "protect-prevent", label: "Protect & Prevent" },
  { value: "other", label: "Other" },
] as const;
