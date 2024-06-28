import { Button, ButtonProps } from '@ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Button',
  component: Button,
  args: { children: 'Enviar' },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = { args: { variant: 'primary' } }

export const Secondary: StoryObj<ButtonProps> = {
  args: { variant: 'secondary' },
}
