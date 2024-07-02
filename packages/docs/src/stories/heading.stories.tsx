import {
  Box,
  Heading,
  HeadingProps,
  headingVariants,
} from '@ignite-ui-rcnald/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  decorators: (Story) => <Box>{<Story />}</Box>,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quos, error animi modi corrupti saepe dolore assumenda distinctio temporibus a facere repellat magni, aliquam maxime, adipisci sapiente nostrum quas. Consectetur!',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {
  argTypes: {
    size: {
      options: Object.keys(headingVariants.variants.size),
      control: { type: 'inline-radio' },
    },
  },
  args: { size: 'md' },
}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'Custom heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`.',
      },
    },
  },
}
