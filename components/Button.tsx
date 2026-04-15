import * as React from "react"

type ButtonProps = React.ComponentProps<"button"> & {
  variant?: "default" | "secondary" 
  size?: "default" | "sm" | "lg" | "xl"
}

const variants = {
  default: "bg-primary text-black hover:bg-primary/90",
  secondary: "bg-secondary text-primary ",
}

const sizes = {
  default: "h-9 px-4 py-2",
  sm: "h-8 px-3 text-sm",
  lg: "h-10 px-6",
  xl:"h-14 px-6 text-[16px]",
}

function Button({
  className = "",
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-xl text-sm font-medium transition-all disabled:opacity-50 cursor-pointer ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  )
}

export { Button }