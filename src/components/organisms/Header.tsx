import { Space } from "antd";
import { Header as AntdHeader } from "antd/es/layout/layout";
import { Navigator, NavigatorItem } from "../molecules";
import { Dropdown, DropdownItems, IconButton, TextButton } from "../atoms";
import { GlobalOutlined } from "@ant-design/icons";

const navItems: NavigatorItem[] = [
  {
    label: "Home",
  },
  {
    label: "About us",
  },
  {
    label: "Our teams",
  },
  {
    label: "Marketplace roadmap",
  },
  {
    label: "Whitepaper",
  },
];

const dropdownItems: DropdownItems = [
  {
    label: "Settings",
    key: "menu-settings",
  },
];

export const Header = () => {
  return (
    <AntdHeader style={{ display: "flex", justifyContent: "space-between" }}>
      <Navigator items={navItems} />
      <Space>
        <TextButton color="primary" variant="solid">
          Connect Wallet
        </TextButton>
        <IconButton icon={<GlobalOutlined />} color="default" variant="link" />
        <Dropdown items={dropdownItems} />
      </Space>
    </AntdHeader>
  );
};
