import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import AppExtensionsSDK from "@pipedrive/app-extensions-sdk";
import { useEffect } from "react";
export default function Home() {
  const router = useRouter();
  useEffect(() => {
    async function openCustomFrontendModal() {
      const identifier = "my_custom_ui_identifier"; // Manually set the identifier
      const customUISize = { height: 500 }; // Manually set the custom UI size

      const sdk = await new AppExtensionsSDK({ identifier }).initialize({
        size: customUISize,
      });

      // Now you can use the `sdk` object to interact with Pipedrive and display your custom UI
      // For example:
      sdk.modal.setTitle("Custom Frontend");
      sdk.modal.setContent(
        '<iframe src="/custom_frontend" frameborder="0" style="width: 100%; height: 100%;"></iframe>'
      );
      sdk.modal.setWidth("90%");
      sdk.modal.setHeight("90%");
      sdk.modal.setIsFullWidth(true);
      sdk.modal.setIsFullHeight(true);
      sdk.modal.setIsHiddenOnClose(false);
      sdk.modal.open();
    }

    openCustomFrontendModal();
  }, [router]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>My title</h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
