import React from "react";
import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CoinCard = (props) => {
  return (
    <>
      <Link to={`/coin/${props.id}`} target="_blank" rel="noreferrer">
        <VStack
          w={"56"}
          shadow={"dark-lg"}
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
            {props.symbol}
          </Heading>
          <Text noOfLines={"1"}>{props.name}</Text>
          <Text noOfLines={"1"}>
            {props.price ? `${props.currencySymbol}${props.price}` : "NA"}
          </Text>
        </VStack>
      </Link>
    </>
  );
};

export default CoinCard;
