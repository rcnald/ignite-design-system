import * as AvatarComponent from '@radix-ui/react-avatar'
import { User } from 'lucide-react'
import { ComponentProps } from 'react'

export interface AvatarProps
  extends ComponentProps<typeof AvatarComponent.Image> {}

export function Avatar({ ...props }: AvatarProps) {
  return (
    <AvatarComponent.Root className="size-16 flex justify-center items-center bg-gray600 rounded-full overflow-hidden">
      <AvatarComponent.Image {...props} />
      <AvatarComponent.Fallback delayMs={600}>
        <User size={40} className="text-ignite300" />
      </AvatarComponent.Fallback>
    </AvatarComponent.Root>
  )
}
