import { Character } from "@/data/models";
import { Flex } from "antd";
import { Heading } from "../atoms";

export type SpotlightCharacterCardProps = Pick<Character, "image" | "name">;

export const SpotlightCharacterCard = ({
  image,
  name,
}: SpotlightCharacterCardProps) => {
  return (
    <Flex vertical align="center" style={{ width: "fit-content" }}>
      <div style={{ position: "relative", width: 200, height: 168 }}>
        <img
          src={image.src}
          width={180}
          style={{
            position: "absolute",
            bottom: 0,
            left: 10,
            objectFit: "contain",
            zIndex: 10,
          }}
        />
        <img
          src="/bg-character.png"
          width={200}
          height={120}
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            zIndex: 9,
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 200,
            height: 120,
            bottom: -10,
            left: -10,
            backgroundColor: "black",
            zIndex: 8,
          }}
        ></div>
      </div>
      <Heading level={3} style={{ textTransform: "uppercase", color: "black" }}>
        {name}
      </Heading>
    </Flex>
  );
};
