import React from "react";
import { cn } from "@/app/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  centered = true,
  className,
}) => {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4"
        data-aos="fade-up"
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="text-lg md:text-xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export { SectionHeader };
