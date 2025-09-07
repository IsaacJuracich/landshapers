"use client";

import { LazyMotion, domAnimation } from "framer-motion";

interface FramerProviderProps {
  children: React.ReactNode;
}

export default function FramerProvider({ children }: FramerProviderProps) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}
