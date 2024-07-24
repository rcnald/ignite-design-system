// import { fontSizes } from '@ignite-ui-rcnald/tokens'
import { ComponentProps, ElementType } from 'react'
import { tv } from 'tailwind-variants'

import { cn } from '../lib/utils'

// function createSizeVariants<T extends Record<string, string>>(sizes: T) {
//   return Object.keys(sizes).reduce(
//     (sizesAccumulator, key) => {
//       const typedKey = key as keyof T

//       sizesAccumulator[typedKey] =
//         `text-${key}` as `text-${Extract<typeof typedKey, string>}`
//       return sizesAccumulator
//     },
//     {} as { [K in keyof T]: `text-${Extract<K, string>}` },
//   )
// }

// const sizes = createSizeVariants(fontSizes)

export const textVariants = tv({
  base: 'font-default leading-base text-gray100 m-0',
  variants: {
    size: {
      xxs: 'text-xxs',
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-md',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
      '7xl': 'text-7xl',
      '8xl': 'text-8xl',
      '9xl': 'text-9xl',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export interface TextProps extends ComponentProps<'p'> {
  size?: keyof typeof textVariants.variants.size
  as?: ElementType
}

export function Text({
  className,
  children,
  size = 'md',
  as: customElement,
  ...props
}: TextProps) {
  const Element = customElement || 'p'

  return (
    <Element {...props} className={cn(textVariants({ size }), className)}>
      {children}
    </Element>
  )
}
