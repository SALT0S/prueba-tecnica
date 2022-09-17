import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import { EntriesProvider } from "../context/entries";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <EntriesProvider>
      <DefaultSeo
        titleTemplate="%s | Jose Sanchez S"
        defaultTitle="Template | NextJS Typescript Tailwind CSS Starter by Jose SS"
        description="NextJS Typescript Tailwind CSS Starter by Jose SS"
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "",
          title: "Template | NextJS Typescript Tailwind CSS Starter by Jose SS",
          description: "NextJS Typescript Tailwind CSS Starter by Jose SS",
          images: [
            {
              url: "",
              width: 1200,
              height: 630,
              alt: "Nextjs Typescript Tailwind CSS Starter by Jose SS",
            },
          ],
          site_name: "Template by Jose SS",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "Jose, Sanchez, Saltos, Template, Nextjs, Typescript, Tailwind, CSS, Starter",
          },
        ]}
        twitter={{
          handle: "@Jose_schzs",
          cardType: "summary_large_image",
        }}
      />

      <Component {...pageProps} />
    </EntriesProvider>
  );
}

export default MyApp;
