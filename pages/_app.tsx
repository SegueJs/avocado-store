import "../global.css";

import Layout from "@components/Layout";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { store } from "app/store";
import { Provider } from "react-redux";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  return (
    <Provider store={store}>
      {router.pathname === "/" ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </Provider>
  );
};

export default MyApp;
