import * as Check from '@radix-ui/react-checkbox'
import { Check as CheckIcon } from 'lucide-react'
import { ComponentProps } from 'react'

import { cn } from '../lib/utils'

export interface CheckboxProps extends ComponentProps<typeof Check.Root> {}

export function Checkbox({ className, checked, ...props }: CheckboxProps) {
  return (
    <Check.Root
      className={cn(
        'group size-6 focus:ring-1 focus:ring-ignite300 focus:ring-inset hover:ring-1 hover:ring-ignite300 hover:ring-inset overflow-hidden bg-gray900 rounded-xs aspect-square',
        className,
      )}
      checked={checked}
      {...props}
    >
      <Check.Indicator className="bg-ignite300 text-white size-full flex items-center justify-center group-data-[state=unchecked]:animate-out group-data-[state=unchecked]:zoom-out-90 group-data-[state=unchecked]:fade-out">
        <CheckIcon
          size={20}
          className="group-data-[state=checked]:animate-in group-data-[state=checked]:slide-in-from-top group-data-[state=checked]:duration-300"
        />
      </Check.Indicator>
    </Check.Root>
  )
}
