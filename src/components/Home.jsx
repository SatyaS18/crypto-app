import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import btcn from "../assets/btc.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w="full" h={"95vh"}>
      <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          w={"full"}
          h="full"
          objectFit={"contain"}
          src={btcn}
          filter="grayscale(1)"
        />
      </motion.div>
      <Text
        fontSize={"7xl"}
        textAlign="center"
        fontWeight={"thin"}
        color="whiteAlpha.700"
        mt={"-20"}
      >
        CryptX
      </Text>
    </Box>
  );
};

export default Home;
