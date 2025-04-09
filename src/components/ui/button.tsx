// Button component placeholder
// components/ui/button.tsx
import React from "react";
import { cn } from "@/lib/utils"; // Utility function to merge class names

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  asChild?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "primary",
  asChild = false,
  ...props
}) => {
  const baseStyles = "px-4 py-2 rounded-xl font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all";

  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-white text-blue-900 border border-blue-600 hover:bg-blue-100",
    ghost: "bg-transparent text-inherit hover:bg-gray-100 dark:hover:bg-blue-900"
  };

  const Comp = asChild ? "span" : "button";

  return (
    <Comp
      className={cn(baseStyles, variantStyles[variant], className)}
      {...(asChild ? {} : props)}
    >
      {children}
    </Comp>
  );
};
