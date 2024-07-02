import { ComponentProps, ElementType } from 'react'
import { tv } from 'tailwind-variants'

export const headingVariants = tv({
  base: 'font-default leading-shorter m-0 text-gray100',
  variants: {
    size: {
      sm: 'text-xl',
      md: 'text-2xl',
      lg: 'text-4xl',
      '2xl': 'text-5xl',
      '3xl': 'text-6xl',
      '4xl': 'text-7xl',
      '5xl': 'text-8xl',
      '6xl': 'text-9xl',
    } as const,
  },
  defaultVariants: {
    size: 'md',
  },
})

export interface HeadingProps extends ComponentProps<'p'> {
  size?: keyof typeof headingVariants.variants.size
  as?: ElementType
}

export function Heading({
  children,
  size,
  as: customElement,
  ...props
}: HeadingProps) {
  const Element = customElement || 'h2'

  return (
    <Element className={headingVariants({ size })} {...props}>
      {children}
    </Element>
  )
}
