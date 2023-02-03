import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import avatarsrc from "../assets/satya.jpg";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color="whatsapp.700"
      minH={"48"}
      px="16"
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h="full" alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"} color="white">
            About Us
          </Text>
          <Text
            fontSize={"sm"}
            letterSpacing="widest"
            textAlign={["center", "left"]}
            color="white"
          >
            Welcome to the future of crypto trading! Our app is designed for
            individuals and institutions who are looking to invest in the
            dynamic world of cryptocurrencies. With real-time market data and a
            user-friendly interface, our app makes it easy for you to buy and
            sell your favorite cryptocurrencies, manage your portfolio, and stay
            up-to-date on market trends. Start trading today and experience the
            power of crypto!
          </Text>
        </VStack>

        <VStack w="50%"></VStack>

        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={avatarsrc} />
          <Text color="white">Our Founder</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
