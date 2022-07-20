import "../styles/globals.css";
import type { AppProps } from "next/app";

import {store} from "/redux/Store";

import {Provider} from "react-redux";

// 全てのコンポーネントからstoreにアクセスできるように、Providerで包みます

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
