import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import btcn from "../assets/btc.png";

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w="full" h={"85vh"}>
      <Image
        w={"full"}
        h="full"
        objectFit={"contain"}
        src={btcn}
        filter="grayscale(1)"
      />
      <Text
        fontSize={"7xl"}
        textAlign="center"
        fontWeight={"thin"}
        color="whiteAlpha.700"
        mt={"-28"}
      >
        CryptX
      </Text>
    </Box>
  );
};

export default Home;
