import { useEffect, useState } from "react";
import Pokemon from "./Pokemon";
import styles from "../styles/Home.module.css";
import Head from "next/head";

function Favorites() {
  

  return (
    <div className={styles.main}>
      <Head>
        <title>Favorites</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="pokedex description"></meta>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        ></meta>
      </Head>
      Favorites
    </div>
  );
}

export default Favorites;
