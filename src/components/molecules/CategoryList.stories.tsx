import type { Meta, StoryObj } from "@storybook/react";

import { CategoryList } from "./CategoryList";
import { Category } from "../../data/models";

const meta = {
  component: CategoryList,
} satisfies Meta<typeof CategoryList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    categories: [Category.COMMON, Category.EPIC, Category.RARE],
    selectedCategory: Category.COMMON,
    onCategorySelect: (category) => console.log(category),
  },
};
