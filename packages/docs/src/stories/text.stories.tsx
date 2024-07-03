import { Box, Text, TextProps, textVariants } from '@ignite-ui-rcnald/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,
  decorators: (Story) => {
    return <Box>{<Story />}</Box>
  },
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quos, error animi modi corrupti saepe dolore assumenda distinctio temporibus a facere repellat magni, aliquam maxime, adipisci sapiente nostrum quas. Consectetur!',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {
  argTypes: {
    size: {
      options: Object.keys(textVariants.variants.size),
      control: { type: 'inline-radio' },
    },
  },
  args: { size: 'md' },
}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
