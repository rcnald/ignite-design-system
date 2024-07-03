import {
  Toast,
  ToastContent,
  ToastProps,
  ToastTrigger,
} from '@ignite-ui-rcnald/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Toast',
  component: Toast,
  render: (args) => (
    <Toast {...args}>
      <ToastTrigger>
        <span style={{ color: 'white' }}>Adicione ao calendário</span>
      </ToastTrigger>
      <ToastContent
        title="Agendamento realizado"
        description="Quarta-feira, 23 de Outubro às 16h"
      />
    </Toast>
  ),
  tags: ['autodocs'],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
