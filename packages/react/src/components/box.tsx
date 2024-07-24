import { ComponentProps } from 'react'

import { cn } from '../lib/utils'

export interface BoxProps extends ComponentProps<'div'> {}

export function Box({ className, children, ...props }: BoxProps) {
  return (
    <div
      className={cn(
        'p-4 rounded-md flex bg-gray800 border border-solid border-gray600',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
