import { useEffect, useState } from "react";
import Pokemon from "./Pokemon";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { addPokemonsToStore } from "../reducers/pokemons";
import { addfavoritesToStore } from "../reducers/favorites";

function Home() {
  const [startIndex, setStartIndex] = useState(1);
  const [pokemonsNumber, setPokemonsNumber] = useState(3);
  const dispatch = useDispatch();
  const listPokemons = useSelector((state) => state.pokemons.value);
  const favoritesPokemons = useSelector((state) => state.favorites.value);

  const fetchPokemons = async () => {
    for (let i = startIndex; i <= pokemonsNumber; i++) {
      const randomId = Math.floor(Math.random() * (151 - 1 + 1) + 1)
      const response = await fetch(`https://tyradex.app/api/v1/pokemon/${randomId}`);
      const data = await response.json();

      const newPokemon = {
        id: data.pokedex_id,
        name: data.name.fr[0].toUpperCase() + data.name.fr.slice(1),
        type: data.types[0].name,
        height: data.height,
        weight: data.weight,
        stats: data.stats,
      };

      dispatch(addPokemonsToStore(newPokemon));
    }

    setStartIndex(startIndex + pokemonsNumber);
    setPokemonsNumber(pokemonsNumber + pokemonsNumber);
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  // Créations des cartes sur la page Pokemons
  const pokemons = listPokemons.map((data, i) => {
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
        <title>Pokedex</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="pokedex description"></meta>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        ></meta>
      </Head>
      <div className={styles.container}>
        <div className={styles.pokemonContainer}>{pokemons}</div>
        <button
          type="button"
          value="Next"
          onClick={() => fetchPokemons()}
          className={styles.next}
        >
          NEXT
        </button>
      </div>
    </div>
  );
}

export default Home;
