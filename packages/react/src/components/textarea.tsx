import { ComponentProps, forwardRef } from 'react'

import { cn } from '../lib/utils'

export interface TextareaProps extends ComponentProps<'textarea'> {}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <label
        className={cn(
          'px-4 py-3 w-full rounded-sm bg-gray900 focus-within:outline text-white font-default focus-within:outline-ignite300',
          className,
        )}
      >
        <textarea
          ref={ref}
          className="bg-transparent w-full disabled:text-gray500 disabled:placeholder:text-gray500 focus:outline-none placeholder:text-gray-400"
          {...props}
        />
      </label>
    )
  },
)

Textarea.displayName = 'Textarea'
