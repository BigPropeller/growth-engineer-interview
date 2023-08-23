import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

const graphikWeb = localFont({
  variable: "--font-graphik",
  src: [
    {
      path: "../fonts/graphik/Graphik-Regular-Web.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/graphik/Graphik-RegularItalic-Web.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/graphik/Graphik-Medium-Web.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/graphik/Graphik-MediumItalic-Web.woff2",
      weight: "500",
      style: "italic",
    },
  ],
});

const jakartaPlus = localFont({
  variable: "--font-jakarta",
  src: [
    {
      path: "../fonts/jakarta/plus-jakarta-bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${graphikWeb.variable} font-sans ${jakartaPlus.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
