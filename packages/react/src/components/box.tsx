import { ComponentProps } from 'react'

export interface BoxProps extends ComponentProps<'div'> {}

export function Box({ children, ...props }: BoxProps) {
  return (
    <div
      className="p-4 rounded-md bg-gray800 border border-solid border-gray600"
      {...props}
    >
      {children}
    </div>
  )
}
