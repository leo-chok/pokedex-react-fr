import { useEffect, useState } from "react";
import Pokemon from "./Pokemon";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { addPokemonsToStore } from "../reducers/pokemons";

function Home() {
  const [startIndex, setStartIndex] = useState(1);
  const [pokemonsNumber, setPokemonsNumber] = useState(15);
  // const [pokemonsData, setPokemonsData] = useState([]);
  const dispatch = useDispatch();
  const listPokemons = useSelector((state) => state.pokemons.value);

  const fetchPokemons = async () => {
    // const newPokemons = [];

    for (let i = startIndex; i <= pokemonsNumber; i++) {
      const response = await fetch(`https://tyradex.app/api/v1/pokemon/${i}`);
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
      // newPokemons.push(newPokemon);
    }

    // setPokemonsData([...pokemonsData, ...newPokemons]);
    setStartIndex(startIndex + pokemonsNumber);
    setPokemonsNumber(pokemonsNumber + pokemonsNumber);
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  const pokemons = listPokemons.map((data) => {
    return (
      <Pokemon
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
