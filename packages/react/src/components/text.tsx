import { fontSizes } from '@ignite-ui/tokens'
import { ComponentProps, ElementType } from 'react'
import { tv } from 'tailwind-variants'

export type FontSizesKeys = keyof typeof fontSizes

const sizes = Object.entries(fontSizes).reduce(
  (sizesAccumulator, [key]) => {
    sizesAccumulator = {
      ...sizesAccumulator,
      [key as FontSizesKeys]: `text-${key}`,
    }

    return sizesAccumulator
  },
  {} as Record<FontSizesKeys, string>,
)

export const textVariants = tv({
  base: 'font-default leading-base m-0 text-gray100',
  variants: {
    size: {
      ...sizes,
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
  children,
  size,
  as: customElement,
  ...props
}: TextProps) {
  const Element = customElement || 'p'

  return (
    <Element className={textVariants({ size })} {...props}>
      {children}
    </Element>
  )
}
