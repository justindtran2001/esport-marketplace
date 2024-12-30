import { RequireFields } from "@/utils";
import { Button, ButtonProps } from "antd";

export type CategoryButtonProps = Omit<
  RequireFields<ButtonProps, "children">,
  "variant" | "color"
> & {
  selected?: boolean;
};

export const CategoryButton = ({
  selected = false,
  ...restProps
}: CategoryButtonProps) => {
  return (
    <Button
      {...restProps}
      color="primary"
      variant={selected ? "solid" : "filled"}
    />
  );
};
