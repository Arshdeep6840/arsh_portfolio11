// components/ui/card.tsx
import React from "react";
import { cn } from "@/lib/utils"; // If using Tailwind utility merger, otherwise remove

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        "rounded-2xl border bg-white dark:bg-blue-950 dark:border-blue-800 shadow-md p-4 transition-all",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
