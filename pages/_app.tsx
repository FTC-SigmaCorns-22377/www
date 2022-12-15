import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { AnimatePresence, motion, useIsPresent } from "framer-motion";

export default function App({ Component, pageProps, router }: AppProps) {
  const isPresent = useIsPresent();
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Component {...pageProps} key={router.pathname} />
      </AnimatePresence>
    </Layout>
  );
}
