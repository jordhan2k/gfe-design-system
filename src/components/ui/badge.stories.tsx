import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Badge } from './badge';

const meta = {
  title: 'ui/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
    },
    variant: {
      control: 'select',
      options: ['neutral', 'danger', 'warning', 'success', 'brand']
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', '2xl']
    }
  },
  args: {
    children: 'Badge',
  },
  parameters: {
    layout: 'centered',
  },

} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'brand',
    size: 'md',
  }
};

export const Neutral: Story = {
  args: {
    variant: 'neutral',
    size: 'md',
  }
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    size: 'md',
  }
};
export const Warning: Story = {
  args: {
    variant: 'warning',
    size: 'md',
  }
};
export const Success: Story = {
  args: {
    variant: 'success',
    size: 'md',
  }
};
export const Brand: Story = {
  args: {
    variant: 'brand',
    size: 'md',
  }
};
