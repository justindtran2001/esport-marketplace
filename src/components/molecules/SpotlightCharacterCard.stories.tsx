import type { Meta, StoryObj } from "@storybook/react";

import { SpotlightCharacterCard } from "./SpotlightCharacterCard";

const meta = {
  component: SpotlightCharacterCard,
} satisfies Meta<typeof SpotlightCharacterCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "Darkwing",
    image: {
      ariaLabel: "darkwing",
      src: "/mafia-england.png",
    },
  },
};
