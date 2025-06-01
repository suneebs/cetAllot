import * as React from "react";
import { cva } from "class-variance-authority";

const avatarVariants = cva(
  "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-muted",
  {
    variants: {
      size: {
        sm: "h-8 w-8",
        md: "h-10 w-10",
        lg: "h-12 w-12",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

const Avatar = React.forwardRef(({ className, size, ...props }, ref) => {
  return (
    <div ref={ref} className={avatarVariants({ size, className })} {...props} />
  );
});
Avatar.displayName = "Avatar";

const AvatarImage = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <img
      ref={ref}
      className={`aspect-square h-full w-full object-cover ${className}`}
      {...props}
    />
  );
});
AvatarImage.displayName = "AvatarImage";

const AvatarFallback = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`flex h-full w-full items-center justify-center bg-gray-300 text-sm font-medium text-gray-600 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
});
AvatarFallback.displayName = "AvatarFallback";

export { Avatar, AvatarImage, AvatarFallback };
