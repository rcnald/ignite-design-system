import { Box, Input, InputProps, Text } from '@ignite-ui-rcnald/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Input',
  component: Input,
  tags: ['autodocs'],
  decorators: (Story, { args }) => (
    <Box>
      <label
        htmlFor="input"
        style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
      >
        <Text>Email</Text>
        <Story args={{ id: 'input', ...args }} />
      </label>
    </Box>
  ),
  args: {
    placeholder: 'seu email',
    disabled: false,
  },
} as Meta<InputProps>

export const Primary: StoryObj<InputProps> = {}
export const Prefix: StoryObj<InputProps> = {
  args: { prefix: 'empresa@', placeholder: 'gmail.com' },
}
export const Disabled: StoryObj<InputProps> = {
  args: { placeholder: 'seu email', disabled: true },
}
