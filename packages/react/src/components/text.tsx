import { fontSizes } from '@ignite-ui-rcnald/tokens'
import { ComponentProps, ElementType } from 'react'
import { tv } from 'tailwind-variants'

function createSizeVariants<T extends Record<string, string>>(sizes: T) {
  return Object.keys(sizes).reduce(
    (sizesAccumulator, key) => {
      const typedKey = key as keyof T

      sizesAccumulator[typedKey] =
        `text-${key}` as `text-${Extract<typeof typedKey, string>}`
      return sizesAccumulator
    },
    {} as { [K in keyof T]: `text-${Extract<K, string>}` },
  )
}

const sizes = createSizeVariants(fontSizes)

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
