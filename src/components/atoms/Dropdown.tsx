import { DownOutlined } from "@ant-design/icons";
import {
  Dropdown as AntdDropdown,
  DropdownProps as AntdDropdownProps,
  MenuProps,
} from "antd";

export type DropdownItems = MenuProps["items"];

export type DropdownProps = Omit<AntdDropdownProps, "children"> & {
  items: DropdownItems;
};

export const Dropdown = ({ items, ...restProps }: DropdownProps) => {
  return (
    <AntdDropdown {...restProps} menu={{ items }} trigger={["click"]}>
      <DownOutlined />
    </AntdDropdown>
  );
};
