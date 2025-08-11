import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Button } from './button';

const meta = {
  title: 'ui/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
    },
    variant: {
      control: 'text',
    },
    size: {

    }
  },
  args: {
    children: 'Button',
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};