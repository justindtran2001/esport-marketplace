import { v4 as uuid } from "uuid";
import { Flex } from "antd";
import { useState } from "react";
import { Category, Character } from "@/data/models";
import { SpotlightCharacterCard } from "../molecules";
import { Content } from "antd/es/layout/layout";

export const HeroSection = () => {
  // TODO: Integrate data from API
  const [characters] = useState<Character[]>(
    new Array(4).fill({
      id: uuid(),
      name: "Mafia England",
      category: Category.COMMON,
      image: {
        ariaLabel: "mafia-england-img",
        src: "/mafia-england.png",
      },
      price: 1200,
      author: {
        id: "author-id-123",
        name: "Author name 123",
        profilePic: {
          ariaLabel: "author-123-img",
          src: "",
        },
      },
    }),
  );

  return (
    <Content>
      <Flex
        vertical
        style={{
          width: "100vw",
        }}
      >
        <img
          src="/background-image.jpeg"
          style={{
            position: "absolute",
            width: "100%",
            filter: "opacity(30%)",
            zIndex: -1,
          }}
        />
        <img src="/newArrivalTitle.svg" height="auto" width="70%" />
        <Flex style={{ backgroundColor: "rgba(251, 198, 37, 1)" }} gap="large">
          {characters.map(({ id, image, name }) => (
            <SpotlightCharacterCard
              key={`spotlight-character-card-${id}`}
              image={image}
              name={name}
            />
          ))}
        </Flex>
      </Flex>
    </Content>
  );
};
