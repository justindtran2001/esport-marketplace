import { Space } from "antd";
import { Text } from "../atoms";

export type ContactInfoTextProps = {
  iconComponent: React.ReactNode;
  text: React.ReactNode;
};

export const ContactInfoText = ({
  iconComponent,
  text,
}: ContactInfoTextProps) => {
  return (
    <Space size="middle">
      {iconComponent}
      <Text>{text}</Text>
    </Space>
  );
};
