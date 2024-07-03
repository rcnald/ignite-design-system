import { Avatar, AvatarProps } from '@ignite-ui-rcnald/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    src: 'https://github.com/rcnald.png',
    alt: 'Ronaldo Junior',
  },
  argTypes: { src: { type: 'string' } },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}
export const Fallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
