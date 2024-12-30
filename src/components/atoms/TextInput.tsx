import { Input as AntdInput, InputProps as AntdInputProps } from "antd";

export type TextInputProps = AntdInputProps;

export const TextInput = (props: TextInputProps) => {
  return <AntdInput {...props} />;
};
