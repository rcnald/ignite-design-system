import {
  Tooltip,
  TooltipContent,
  TooltipProps,
  TooltipTrigger,
} from '@ignite-ui-rcnald/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Tooltip',
  component: Tooltip,
  render: (args) => (
    <Tooltip {...args}>
      <TooltipTrigger>
        <span style={{ color: 'white' }}>19/04/2022</span>
      </TooltipTrigger>
      <TooltipContent>19 de abril de 2022</TooltipContent>
    </Tooltip>
  ),
  tags: ['autodocs'],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
