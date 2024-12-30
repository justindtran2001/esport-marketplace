import type { Meta, StoryObj } from "@storybook/react";

import { ShoppingSection } from "./ShoppingSection";

const meta = {
  component: ShoppingSection,
} satisfies Meta<typeof ShoppingSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
