import { Button, ButtonProps } from "antd";
import { RequireFields } from "@/utils";

export type TextButtonProps = RequireFields<ButtonProps, "children">;

export const TextButton = (props: TextButtonProps) => {
  return <Button {...props} />;
};
