import { Typography } from "antd";

export type LinkProps = {
  href?: string;
  target?: string;
  children: string;
};

export const Link = (props: LinkProps) => {
  return <Typography.Link {...props} />;
};
