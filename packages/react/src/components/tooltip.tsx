import * as TooltipComponent from '@radix-ui/react-tooltip'
import { ComponentProps } from 'react'

import { cn } from '../lib/utils'

export interface TooltipProps
  extends ComponentProps<typeof TooltipComponent.Root> {}

export function Tooltip({ children, ...props }: TooltipProps) {
  return (
    <TooltipComponent.Provider>
      <TooltipComponent.Root {...props}>{children}</TooltipComponent.Root>
    </TooltipComponent.Provider>
  )
}

export interface TooltipTriggerProps
  extends ComponentProps<typeof TooltipComponent.Trigger> {}

export function TooltipTrigger({ children, ...props }: TooltipTriggerProps) {
  return (
    <TooltipComponent.Trigger {...props}>{children}</TooltipComponent.Trigger>
  )
}

export interface TooltipContentProps
  extends ComponentProps<typeof TooltipComponent.Content> {}

export function TooltipContent({
  className,
  children,
  ...props
}: TooltipContentProps) {
  return (
    <TooltipComponent.Portal>
      <TooltipComponent.Content
        className={cn(
          "bg-gray900 px-4 py-3 rounded-sm font-default text-sm text-white font-medium data-[state='delayed-open']:animate-in data-[state='delayed-open']:fade-in-5 data-[state='delayed-open']:duration-150 data-[state='delayed-open']:data-[side='top']:slide-in-from-top-2 data-[state='delayed-open']:data-[side='bottom']:slide-in-from-bottom-2 data-[state='delayed-open']:data-[side='left']:slide-in-from-left-2 data-[state='delayed-open']:data-[side='right']:slide-in-from-right-2 data-[state='closed']:animate-out data-[state='closed']:fade-out",
          className,
        )}
        {...props}
      >
        {children}
        <TooltipComponent.Arrow className="fill-gray900 stroke-2" />
      </TooltipComponent.Content>
    </TooltipComponent.Portal>
  )
}
