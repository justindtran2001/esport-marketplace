import { Author } from "@/data/models";
import { Text } from "../atoms";
import { Avatar, Space } from "antd";

export type CharacterAuthorProps = Omit<Author, "id">;

export const CharacterAuthor = ({ profilePic, name }: CharacterAuthorProps) => {
  return (
    <Space direction="horizontal">
      <Avatar src={profilePic.src} />
      <Text>{name}</Text>
    </Space>
  );
};
