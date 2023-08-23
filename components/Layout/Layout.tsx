import Head from "next/head";
import { Footer, Header } from "@/components";

type LayoutProps = {
  title?: string;
  description?: string;
  ogImage?: string;
  children: React.ReactNode;
};

export function Layout({
  ogImage = "/sharing-default.png",
  children,
}: LayoutProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content={ogImage} />
        <link rel="icon" href="/favicon.png" />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/analytics.js/2.9.1/analytics.js"
          async
        />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
