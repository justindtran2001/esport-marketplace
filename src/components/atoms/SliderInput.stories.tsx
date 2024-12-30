import type { Meta, StoryObj } from '@storybook/react';

import { SliderInput } from './SliderInput';

const meta = {
  component: SliderInput,
} satisfies Meta<typeof SliderInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};