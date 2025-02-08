import { useEffect, useState } from "react";
import Pokemon from "./Pokemon";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import { useSelector } from "react-redux";

function Favorites() {
  const listFavoritesPokemons = useSelector((state) => state.favorites.value);

  // Créations des cartes sur la page Favorites
  const pokemons = listFavoritesPokemons.map((data, i) => {
    return (
      <Pokemon
        key={i}
        id={data.id}
        name={data.name}
        type={data.type}
        height={data.height}
        weight={data.weight}
        stats={data.stats}
      />
    );
  });

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
      <div className={styles.container}>
        <div className={styles.pokemonContainer}>{pokemons}</div>
      </div>
    </div>
  );
}

export default Favorites;
