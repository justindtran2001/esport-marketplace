import { Typography } from "antd";
import { TitleProps } from "antd/es/typography/Title";

export type HeadingProps = TitleProps;

export const Heading = (props: HeadingProps) => <Typography.Title {...props} />;
