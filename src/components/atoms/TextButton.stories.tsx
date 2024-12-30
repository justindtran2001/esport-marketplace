import type { Meta, StoryObj } from '@storybook/react';

import { TextButton } from './TextButton';

const meta = {
  component: TextButton,
} satisfies Meta<typeof TextButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};