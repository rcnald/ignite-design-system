import { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

const button = tv({
  base: 'font-default text-white rounded-md p-4',
  variants: {
    variant: {
      primary: 'bg-ignite500',
      secondary: 'bg-white',
    },
  },
})

export interface ButtonProps extends ComponentProps<'button'> {
  variant: 'primary' | 'secondary'
}

export function Button({ children, variant = 'primary' }: ButtonProps) {
  return <button className={button({ variant })}>{children}</button>
}
