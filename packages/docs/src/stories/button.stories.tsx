import { Button, ButtonProps, buttonVariants } from '@ignite-ui-rcnald/react'
import type { Meta, StoryObj } from '@storybook/react'
import { ArrowRight } from 'lucide-react'

export default {
  title: 'Form/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Enviar',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    variant: {
      options: Object.keys(buttonVariants.variants.variant),
      control: { type: 'inline-radio' },
    },
    size: {
      options: Object.keys(buttonVariants.variants.size),
      control: { type: 'inline-radio' },
    },
    disabled: {
      type: 'boolean',
    },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
  },
}

export const Ghost: StoryObj<ButtonProps> = {
  args: {
    variant: 'ghost',
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
}

// in storybook _ represents a white space
// eslint-disable-next-line camelcase
export const With_Icon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Next
        <ArrowRight size={20} />
      </>
    ),
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}
