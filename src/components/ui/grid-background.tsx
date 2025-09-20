"use client"

import { cn } from "@/lib/utils"
import { forwardRef } from "react"

export const GridBackground = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={cn(
          "relative w-full overflow-hidden",
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 [background-size:40px_40px] [background-image:linear-gradient(to_right,rgba(228,228,231,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(228,228,231,0.5)_1px,transparent_1px)] dark:[background-image:linear-gradient(to_right,rgba(82,82,82,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(82,82,82,0.5)_1px,transparent_1px)]" />
        <div className="pointer-events-none absolute inset-0 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black_90%)] dark:bg-black" />
        <div className="relative">
          {children}
        </div>
      </div>
    )
  }
)
GridBackground.displayName = "GridBackground"
