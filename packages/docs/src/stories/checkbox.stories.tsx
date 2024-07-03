import { Box, Checkbox, CheckboxProps, Text } from '@ignite-ui-rcnald/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  decorators: (Story, { args }) => (
    <Box>
      <label htmlFor="check" className="flex gap-2">
        <Story args={{ id: 'check', ...args }} />
        <Text>Aceitar termos</Text>
      </label>
    </Box>
  ),
  args: {
    checked: true,
  },
  argTypes: {
    checked: {
      type: 'boolean',
    },
  },
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}
