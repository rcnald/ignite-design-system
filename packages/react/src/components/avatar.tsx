import * as AvatarComponent from '@radix-ui/react-avatar'
import { User } from 'lucide-react'
import { ComponentProps } from 'react'

import { cn } from '../lib/utils'

export interface AvatarProps
  extends ComponentProps<typeof AvatarComponent.Image> {}

export function Avatar({ className, ...props }: AvatarProps) {
  return (
    <AvatarComponent.Root
      className={cn(
        'size-16 flex justify-center items-center bg-gray600 rounded-full overflow-hidden',
        className,
      )}
    >
      <AvatarComponent.Image {...props} />
      <AvatarComponent.Fallback delayMs={600}>
        <User size={40} className="text-ignite300" />
      </AvatarComponent.Fallback>
    </AvatarComponent.Root>
  )
}
