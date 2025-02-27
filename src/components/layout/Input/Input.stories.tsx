import { ThemeProvider } from 'styled-components'
import type { Meta, StoryObj } from '@storybook/react'
import Input from './Input'
import theme from '../../../assets/styles/theme'

const meta: Meta<typeof Input> = {
  title: 'Layout/Input',
  component: Input,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    placeholder: 'Digite seu texto...',
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}
