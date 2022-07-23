import { NextPage } from "next";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/avo")
      .then((res) => res.json())
      .then(({ data, length })=> setProducts(data));
  }, []);

  return <h1>Home</h1>;
};

export default Home;
