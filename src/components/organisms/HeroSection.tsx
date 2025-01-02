import { v4 as uuid } from "uuid";
import { Flex } from "antd";
import { useState } from "react";
import { Category, Character } from "@/data/models";
import { SpotlightCharacterCard } from "../molecules";

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
    <Flex
      vertical
      style={{
        position: "relative",
        width: "100vw",
        height: "45em",
      }}
    >
      <img
        src="/background-image.jpeg"
        style={{
          position: "absolute",
          width: "100%",
          height: "40em",
          objectFit: "contain",
          filter: "opacity(30%)",
          zIndex: 0,
        }}
      />
      <img
        src="/newArrivalTitle.svg"
        height="auto"
        width="900rem"
        style={{ position: "relative", left: "10em", top: "4em" }}
      />
      <Flex
        style={{
          backgroundColor: "rgba(251, 198, 37, 1)",
          position: "absolute",
          bottom: 0,
          height: "18em",
          width: "100%",
        }}
        gap="large"
        justify="center"
      >
        {characters.map(({ id, image, name }) => (
          <SpotlightCharacterCard
            key={`spotlight-character-card-${id}`}
            image={image}
            name={name}
          />
        ))}
        <img
          src="/dj-character-spotlight.png"
          style={{ height: "40em", alignSelf: "end" }}
        />
      </Flex>
    </Flex>
  );
};
