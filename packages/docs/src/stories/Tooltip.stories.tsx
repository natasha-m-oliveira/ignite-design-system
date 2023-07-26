import type { StoryObj, Meta } from '@storybook/react'
import { Tooltip, TooltipProps, Text } from '@ignite-ui/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {
    text: 'Lorem ipsum dollar set...',
    children: <Text>Add to calendar</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: '100%',
          height: '90vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {Story()}
      </div>
    ),
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
