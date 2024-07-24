import { ComponentProps } from 'react'

import { cn } from '../lib/utils'

export interface InputProps extends ComponentProps<'input'> {
  prefix?: string
}

export function Input({ className, prefix, ...props }: InputProps) {
  return (
    <label
      className={cn(
        'px-4 py-3 rounded-sm has-[input[disabled]]:select-none bg-gray900 focus-within:outline text-white font-default focus-within:outline-ignite300',
        className,
      )}
    >
      {prefix ? <span className="text-gray-400">{prefix}</span> : null}
      <input
        type="text"
        className="bg-transparent disabled:text-gray500 disabled:placeholder:text-gray500 focus:outline-none placeholder:text-gray-400"
        {...props}
      />
    </label>
  )
}
