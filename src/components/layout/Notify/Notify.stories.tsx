import { ThemeProvider } from 'styled-components'
import type { Meta, StoryObj } from '@storybook/react'
import Notify from './Notify'
import theme from '../../../assets/styles/theme'

const meta: Meta<typeof Notify> = {
  title: 'Layout/Notify',
  component: Notify,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof Notify>

export const Default: Story = {
  args: {
    msg: 'Esta é uma mensagem de notificação.',
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}
