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
            We re the best crypto trading app in India, we provide our guidance
            at a very cheap price.
          </Text>
        </VStack>

        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={avatarsrc} />
          <Text color="white">Our Founder</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;