import "@/styles/index.css";
import { makeServer } from "../mirage";

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" });
}

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
