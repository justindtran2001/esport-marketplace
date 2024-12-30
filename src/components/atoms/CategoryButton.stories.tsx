import type { Meta, StoryObj } from "@storybook/react";

import { CategoryButton } from "./CategoryButton";

const meta = {
  component: CategoryButton,
} satisfies Meta<typeof CategoryButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selected: false,
    children: 'Text'
  }
};
