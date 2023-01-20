import React from "react";
import axios from "axios";
import { server } from "../index";
import { useEffect } from "react";
import { useState } from "react";
import { Container, HStack } from "@chakra-ui/react";
import Loader from "./Loader.jsx";
import ExchangeCard from "./ExchangeCard.jsx";

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExchanges = async () => {
      const { data } = await axios.get(`${server}/exchanges`);
      console.log(data);
      setExchanges(data);
      setLoading(false);
    };
    fetchExchanges();
  }, []);

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack wrap={"wrap"}>
            {exchanges.map((item, index) => (
              <ExchangeCard name={item.name} key={index} />
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Exchanges;
