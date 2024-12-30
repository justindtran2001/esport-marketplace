import type { Meta, StoryObj } from '@storybook/react';

import { SelectInput } from './SelectInput';

const meta = {
  component: SelectInput,
} satisfies Meta<typeof SelectInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    inputLabel: 'Label 1',
  }
};