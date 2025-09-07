"use client";

import React from "react";
import { m } from "framer-motion";
import { cn } from "@/app/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

const Card: React.FC<CardProps> = ({
  children,
  className,
  hover = true,
  padding = "md",
}) => {
  const paddings = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  const cardClasses = cn(
    "bg-white rounded-2xl shadow-sm border border-stone/20",
    paddings[padding],
    className
  );

  if (hover) {
    return (
      <m.div
        className={cardClasses}
        whileHover={{
          y: -4,
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        {children}
      </m.div>
    );
  }

  return <div className={cardClasses}>{children}</div>;
};

export { Card };
