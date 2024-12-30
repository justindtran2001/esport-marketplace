import { Flex } from "antd";
import { TextButton, TextInput, TextInputProps } from "../atoms";

export type ActionTextInputProps = TextInputProps & {
  actionLabel: string;
};

export const ActionTextInput = ({
  actionLabel,
  ...textInputProps
}: ActionTextInputProps) => {
  return (
    <Flex gap="small">
      <TextInput {...textInputProps} />
      <TextButton color="primary" variant="solid">
        {actionLabel}
      </TextButton>
    </Flex>
  );
};
