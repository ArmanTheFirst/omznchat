import { ComponentPropsWithoutRef, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type ButtonVariant = "default" | "outline" | "ghost";

interface ButtonProps<T extends React.ElementType = "button"> {
  as?: T;
  variant?: ButtonVariant;
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps & ComponentPropsWithoutRef<"button">>(({
  as: Component = "button",
  variant = "default",
  className,
  children,
  ...props
}, ref) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";
  
  const variantStyles = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
  };

  return (
    <Component
      ref={ref}
      className={twMerge(
        baseStyles,
        variantStyles[variant],
        "h-10 py-2 px-4",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
});

Button.displayName = "Button";

export { Button };
export default Button;
