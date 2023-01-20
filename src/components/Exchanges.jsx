import React from "react";
import axios from "axios";
import { server } from "../index";
import { useEffect } from "react";
import { useState } from "react";
import { Container } from "@chakra-ui/react";

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExchanges = async () => {
      const { data } = await axios.get(`${server}/exchanges`);
      setExchanges(data);
      setLoading(false);
    };
    fetchExchanges();
  }, []);

  return <Container maxW={"container.xl"}></Container>;
};

export default Exchanges;
