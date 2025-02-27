import { ThemeProvider } from 'styled-components'
import type { Meta, StoryObj } from '@storybook/react'
import Title from './Title'
import theme from '../../../assets/styles/theme'

const meta: Meta<typeof Title> = {
  title: 'Layout/Title',
  component: Title,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof Title>

export const Default: Story = {
  args: {
    children: 'Exemplo de Título',
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}
