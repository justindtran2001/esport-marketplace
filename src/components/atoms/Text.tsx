import { Typography } from "antd";
import { TextProps as AntdTextProps } from "antd/es/typography/Text";

export type TextProps = AntdTextProps;

export const Text = (props: TextProps) => {
  return <Typography.Text {...props} />;
};
