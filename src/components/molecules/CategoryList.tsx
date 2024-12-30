import { Category } from "@/data/models";
import { CategoryButton } from "../atoms";
import { Space } from "antd";

export type CategoryListProps = {
  categories: Category[];
  selectedCategory?: Category;
  onCategorySelect?: (categoryId: Category) => void;
};

export const CategoryList = ({
  categories,
  selectedCategory,
  onCategorySelect,
}: CategoryListProps) => {
  return (
    <Space size={"small"}>
      {categories.map((category, idx) => (
        <CategoryButton
          key={`category-${idx}`}
          onClick={() => onCategorySelect?.(category)}
          selected={category === selectedCategory}
        >
          {category}
        </CategoryButton>
      ))}
    </Space>
  );
};
