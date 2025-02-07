import styles from '../styles/Menu.module.css';

import Image from 'next/image';
import Link from  'next/link';

function Menu() {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Pokedex</h1>
      <div className={styles.linkContainer}>
        <Link href="/"><span className={styles.link}>Pokemons</span></Link>
        <Link href="/favorites"><span className={styles.link}>Favorites</span></Link>
      </div>
    </div>
  );
}

export default Menu;
