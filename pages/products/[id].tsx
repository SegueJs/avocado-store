import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "@styles/views/ProductDetail.module.css";
import { motion } from "framer-motion";
import AvocadoInfo from "@components/AvocadoInfo";
import Loader from "@components/Loader";
import { useAppDispatch } from "app/hooks";
import { addToCart } from "redux/slices/cartSlice";
import Head from "next/head";

const ProductDetail: NextPage = () => {
  const router = useRouter();
  const {
    query: { id },
  } = router;

  const [product, setProduct] = useState<TProduct>();

  const [number, setNumber] = useState<number>(0);

  const dispatch = useAppDispatch();

  useEffect(() => {
    fetch(`/api/avo/${id}`)
      .then((res) => res.json())
      .then(({ data }) => setProduct(data));
  }, [id]);

  const onPlus = () => setNumber(number + 1);
  const onMinus = () => (number > 0 ? setNumber(number - 1) : setNumber(0));

  const addProduct = () => {
    dispatch(
      addToCart({
        item: product,
        qty: number,
      })
    );
  };

  if (product === undefined) {
    return <Loader />;
  }

  return (
    <>
      <Head>
        <title>{product.name}</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <img src={product?.image} />
            <div className={styles.detail}>
              <h3>{product?.name}</h3>
              <h4>${product?.price}</h4>
              <span className={styles.sku}>SKU: {product?.sku}</span>
              <div className={styles.controls}>
                <div className={styles.qty}>
                  <span className="number">{number}</span>
                  <div className={styles.buttons}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={onPlus}
                    >
                      +
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={onMinus}
                    >
                      -
                    </motion.button>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={styles.addButton}
                  onClick={addProduct}
                >
                  Add
                </motion.button>
              </div>
            </div>
          </div>
          {product && <AvocadoInfo product={product} />}
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
