import type { Meta, StoryObj } from "@storybook/react";

import { Navigator } from "./Navigator";

const meta = {
  component: Navigator,
} satisfies Meta<typeof Navigator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        label: "Nav 1",
      },
      {
        label: "Nav 2",
      },
      {
        label: "Nav 3",
      },
    ],
  },
};
