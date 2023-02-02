import "@/styles/globals.css";
import { StoreProvider } from "../context/StoreProvider";

export default function App({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}
