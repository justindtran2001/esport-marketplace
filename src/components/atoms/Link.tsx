import { Typography } from "antd";
import { LinkProps as AntDLinkProps } from "antd/es/typography/Link";

export type LinkProps = AntDLinkProps;

export const Link = (props: LinkProps) => {
  return <Typography.Link {...props} />;
};
