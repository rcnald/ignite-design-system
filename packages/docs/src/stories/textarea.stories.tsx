import { Box, Text, Textarea, TextareaProps } from '@ignite-ui-rcnald/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  decorators: (Story, { args }) => (
    <Box>
      <label
        htmlFor="textarea"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          width: '100%',
        }}
      >
        <Text>Observações</Text>
        <Story args={{ id: 'textarea', ...args }} />
      </label>
    </Box>
  ),
  args: {
    placeholder: 'adicione suas observações...',
    disabled: false,
  },
} as Meta<TextareaProps>

export const Primary: StoryObj<TextareaProps> = {}
export const Disabled: StoryObj<TextareaProps> = { args: { disabled: true } }
