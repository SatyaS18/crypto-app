import React from "react";
import axios from "axios";
import { server } from "../index";
import { useEffect } from "react";
import { useState } from "react";
import {
  Button,
  Container,
  HStack,
  Radio,
  RadioGroup,
  Text,
} from "@chakra-ui/react";
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

  const changePage = (page) => {
    setPage(page);
    setLoading(true);
  };

  const btns = new Array(132).fill(1);

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
    <Container maxW={"container.xl"} p="4">
      {loading ? (
        <Loader />
      ) : (
        <>
          <RadioGroup value={currency} onChange={setCurrency}>
            <HStack
              justifyContent={"center"}
              spacing="8"
              my={"4"}
              fontWeight="bold"
            >
              <Radio value="inr">
                <Text fontSize={"3xl"}>₹</Text>
              </Radio>

              <Radio value="usd">
                {" "}
                <Text fontSize={"3xl"}>$</Text>
              </Radio>

              <Radio value="eur">
                {" "}
                <Text fontSize={"3xl"}>€</Text>
              </Radio>
            </HStack>
          </RadioGroup>

          <HStack wrap={"wrap"} justifyContent="space-evenly">
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

          <HStack w={"full"} overflowX={"auto"} p="8">
            {btns.map((item, index) => (
              <Button
                key={index}
                bgColor={"blackAlpha.900"}
                color="white"
                onClick={() => changePage(index + 1)}
              >
                {index + 1}
              </Button>
            ))}
            )
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Coins;
