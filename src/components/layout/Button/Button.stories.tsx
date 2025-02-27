import { ThemeProvider } from 'styled-components'
import type { Meta, StoryObj } from '@storybook/react'

import theme from '../../../assets/styles/theme'
import ButtonPrimary from './Button'

const meta: Meta<typeof ButtonPrimary> = {
  title: 'Layout/ButtonPrimary',
  component: ButtonPrimary,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof ButtonPrimary>

export const Default: Story = {
  args: {
    children: 'Clique Aqui',
    type: 'button',
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}
