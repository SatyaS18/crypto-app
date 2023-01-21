import React from "react";
import axios from "axios";
import { server } from "../index";
import { useEffect } from "react";
import { useState } from "react";
import { Container, HStack } from "@chakra-ui/react";
import Loader from "./Loader.jsx";
import ExchangeCard from "./ExchangeCard.jsx";
import ErrorContainer from "./ErrorContainer.jsx";

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
        setExchanges(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchExchanges();
  }, []);

  if (error)
    return <ErrorContainer message={"Error while fetching exchanges"} />;

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack wrap={"wrap"} justify="center">
            {exchanges.map((item, index) => (
              <ExchangeCard
                name={item.name}
                key={index}
                img={item.image}
                rank={item.trust_score_rank}
                url={item.url}
              />
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Exchanges;
