import type { Meta, StoryObj } from "@storybook/react";

import { CharacterCard } from "./CharacterCard";
import { Category } from "../../data/models";

const meta = {
  component: CharacterCard,
} satisfies Meta<typeof CharacterCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "Mafia England",
    category: Category.COMMON,
    image: {
      ariaLabel: "mafia-england-img",
      src: "",
    },
    price: 1200,
    author: {
      name: "Author name 123",
      profilePic: {
        ariaLabel: "author-123-img",
        src: "",
      },
    },
  },
};
