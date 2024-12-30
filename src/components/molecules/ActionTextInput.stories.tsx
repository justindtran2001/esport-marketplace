import type { Meta, StoryObj } from "@storybook/react";

import { ActionTextInput } from "./ActionTextInput";

const meta = {
  component: ActionTextInput,
} satisfies Meta<typeof ActionTextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    actionLabel: "Subscribe",
    placeholder: "Your email address",
  },
};
