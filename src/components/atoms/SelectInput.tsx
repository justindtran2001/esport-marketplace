import { Select, SelectProps } from "antd";

export type SelectInputProps = SelectProps;

export const SelectInput = (props: SelectInputProps) => {
  return <Select {...props} />;
};
