import React from "react";
import axios from "axios";
import { server } from "../index";
import { useEffect } from "react";
import { useState } from "react";
import { Container, HStack } from "@chakra-ui/react";
import Loader from "./Loader.jsx";
import CoinCard from "./CoinCard.jsx";
import ErrorContainer from "./ErrorContainer.jsx";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
  }, [currency, page]);

  if (error) return <ErrorContainer message={"Error while fetching coins"} />;

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack wrap={"wrap"} justify="center">
            {coins.map((item, index) => (
              <CoinCard
                name={item.name}
                id={item.id}
                price={item.current_price}
                key={index}
                img={item.image}
                symbol={item.symbol}
                currencySymbol={currencySymbol}
              />
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Coins;
