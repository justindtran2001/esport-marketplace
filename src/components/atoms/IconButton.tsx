import { RequireFields } from "@/utils";
import { Button, ButtonProps } from "antd";

export type IconButtonProps = Omit<ButtonProps, "children"> &
  RequireFields<ButtonProps, "icon">;

export const IconButton = (props: IconButtonProps) => {
  return <Button {...props} />;
};
