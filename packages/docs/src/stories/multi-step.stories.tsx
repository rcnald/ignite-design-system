import { Box, MultiStep, MultiStepProps } from '@ignite-ui-rcnald/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Multi Step',
  component: MultiStep,
  tags: ['autodocs'],
  decorators: (Story) => (
    <Box>
      <Story />
    </Box>
  ),
  args: {
    totalSteps: 4,
    currentStep: 1,
  },
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {}
