import type { Meta, StoryObj } from "@storybook/react";

import { CharacterAuthor } from "./CharacterAuthor";

const meta = {
  component: CharacterAuthor,
} satisfies Meta<typeof CharacterAuthor>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "Author name 123",
    profilePic: {
      ariaLabel: "author-123-img",
      src: "",
    },
  },
};
