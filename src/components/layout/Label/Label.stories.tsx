import { ThemeProvider } from 'styled-components'
import type { Meta, StoryObj } from '@storybook/react'
import Label from './Label'
import theme from '../../../assets/styles/theme'

const meta: Meta<typeof Label> = {
  title: 'Layout/Label',
  component: Label,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof Label>

export const Default: Story = {
  args: {
    children: 'Exemplo de Label',
    htmlFor: 'input-example',
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}
