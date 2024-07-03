import { ComponentProps } from 'react'

export interface TextareaProps extends ComponentProps<'textarea'> {}

export function Textarea({ ...props }: TextareaProps) {
  return (
    <label className="px-4 py-3 w-full rounded-sm bg-gray900 focus-within:outline text-white font-default focus-within:outline-ignite300">
      <textarea
        className="bg-transparent w-full disabled:text-gray500 disabled:placeholder:text-gray500 focus:outline-none placeholder:text-gray-400"
        {...props}
      />
    </label>
  )
}
