import { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

import { cn } from '../lib/utils'

export const buttonVariants = tv({
  base: 'flex gap-2 items-center font-default justify-center px-6 font-medium text-sm rounded-sm',
  variants: {
    variant: {
      primary: 'bg-ignite500 text-white disabled:bg-gray500 hover:bg-ignite300',
      secondary:
        'bg-transparent disabled:ring-gray500 disabled:text-gray500 ring-2 ring-solid text-ignite500 hover:bg-ignite500 hover:text-white ring-inset ring-ignite500',
      ghost:
        'bg-transparent text-gray50 disabled:text-gray500 hover:text-white',
    },
    size: {
      sm: 'h-10',
      md: 'h-12',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<'button'> {
  variant?: keyof typeof buttonVariants.variants.variant
  size?: keyof typeof buttonVariants.variants.size
}

export function Button({
  className,
  variant,
  size,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  )
}
