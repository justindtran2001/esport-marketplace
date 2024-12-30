import type { Meta, StoryObj } from "@storybook/react";

import { ContactInfoText } from "./ContactInfoText";
import { PhoneFilled } from "@ant-design/icons";

const meta = {
  component: ContactInfoText,
} satisfies Meta<typeof ContactInfoText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconComponent: <PhoneFilled />,
    text: "0331002000",
  },
};
