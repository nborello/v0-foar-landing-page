"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all cursor-pointer disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-[#FF0000] text-white hover:bg-[#DD0000]",
        link: "text-[#FF0000] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        lg: "h-12 rounded-md px-8 text-base font-semibold",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, ...props }, ref) => {
  return <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
})
Button.displayName = "Button"

type ExternalButtonProps = React.ComponentProps<"a"> & VariantProps<typeof buttonVariants>

/** Botón externo hacia la sección #contacto */
export function ExternalContactButton({ className, variant, size, ...props }: ExternalButtonProps) {
  return (
    <a
      href="https://preview-foar-landing-page-kzmlzh4dbso2c5y3ilq1.vusercontent.net/#contacto"
      target="_blank"
      rel="noopener noreferrer"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      Hablemos
    </a>
  )
}

export { Button, buttonVariants }
