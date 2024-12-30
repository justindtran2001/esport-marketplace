import { SearchOutlined } from "@ant-design/icons";
import { TextInput, TextInputProps } from "../atoms";

export type SearchInputProps = Omit<TextInputProps, "prefix" | "placeholder">;

export const SearchInput = (props: SearchInputProps) => {
  return (
    <TextInput
      {...props}
      prefix={<SearchOutlined />}
      placeholder="Quick search"
    />
  );
};
