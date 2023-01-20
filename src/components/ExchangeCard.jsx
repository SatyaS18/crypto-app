import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const ExchangeCard = (props) => {
  return (
    <>
      <a href={props.url} target="blank">
        <VStack
          w={"56"}
          shadow={"lg"}
          p="8"
          borderRadius={"lg"}
          transition={"all 0.3s"}
          m="4"
          css={{
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
        >
          <Image
            src={props.img}
            w="12"
            h={"12"}
            objectFit="contain"
            alt="Exchanges"
          />
          <Heading size={"md"} noOfLines="1">
            {props.rank}
          </Heading>
          <Text noOfLines={"1"}>{props.name}</Text>
        </VStack>
      </a>
    </>
  );
};

export default ExchangeCard;
