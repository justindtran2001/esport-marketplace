import { Character } from "@/data/models";
import { CharacterAuthor, CharacterAuthorProps } from "./CharacterAuthor";
import { Flex } from "antd";
import { Image, Text } from "../atoms";

export type CharacterCardProps = Omit<Character, "id" | "author"> & {
  author: CharacterAuthorProps;
};

export const CharacterCard = (props: CharacterCardProps) => {
  const { name, price, author, category, image } = props;

  return (
    <Flex
      vertical
      gap={10}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        borderRadius: 10,
        width: "14em",
        padding: "1em",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
        }}
      >
        <Text
          strong
          style={{
            position: "absolute",
            top: "1em",
            left: "1em",
            zIndex: 2,
            backgroundColor: "rgba(0,0,0, 0.8)",
            color: "white",
            padding: "0.5em 1em",
            borderRadius: 5,
          }}
        >
          {category}
        </Text>
        <Image
          src={image.src}
          aria-label={image.ariaLabel}
          width={"100%"}
          style={{
            zIndex: 1,
          }}
        />
      </div>
      <Flex
        vertical={false}
        justify="space-between"
        align="baseline"
        style={{}}
      >
        <Text strong style={{ fontSize: 16 }}>
          {name}
        </Text>
        <Text strong style={{ fontSize: 16 }}>
          ${price}
        </Text>
      </Flex>
      <CharacterAuthor {...author} />
    </Flex>
  );
};
