import ListItem from "@components/ListItem";
import Loader from "@components/Loader";
import { Grid } from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";

const Products: NextPage = () => {
  const [products, setProducts] = useState<TProduct[]>();

  const router = useRouter();

  useEffect(() => {
    fetch("/api/avo")
      .then((res) => res.json())
      .then(({ data, length }) => setProducts(data));
  }, []);

  const onClick = (id: string) => {
    router.push(`products/${id}`);
  };

  if (products === undefined) {
    return <Loader />;
  }

  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      <Grid mt={1} container spacing={3} justifyContent="center">
        {products.map((item) => (
          <Grid item xs={10} md={7}>
            <ListItem item={item} onClick={onClick} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Products;
