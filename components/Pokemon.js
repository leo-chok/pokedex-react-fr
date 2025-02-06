import styles from "../styles/Pokemon.module.css";
import Image from "next/image";
import Card3d from "react-animated-3d-card";

function Pokemon(props) {
  let pokemonTypeStyle = {};
  switch (props.type) {
    case "Normal":
      pokemonTypeStyle.backgroundColor = "#aab09f ";
      break;
    case "Feu":
      pokemonTypeStyle.backgroundColor = "#ea7a3c";
      break;
    case "Plante":
      pokemonTypeStyle.backgroundColor = "#71c558 ";
      break;
    case "Électrik":
      pokemonTypeStyle.backgroundColor = "#e5c531";
      break;
    case "Eau":
      pokemonTypeStyle.backgroundColor = "#539ae2 ";
      break;
    case "Sol":
      pokemonTypeStyle.backgroundColor = "#Ground";
      break;
    case "Roche":
      pokemonTypeStyle.backgroundColor = "#b2a061 ";
      break;
    case "Fée":
      pokemonTypeStyle.backgroundColor = "#e397d1 ";
      break;
    case "Poison":
      pokemonTypeStyle.backgroundColor = "#b468b7 ";
      break;
    case "Insecte":
      pokemonTypeStyle.backgroundColor = "#94bc4a";
      break;
    case "Dragon":
      pokemonTypeStyle.backgroundColor = "#6a7baf ";
      break;
    case "Psy":
      pokemonTypeStyle.backgroundColor = "#e5709b ";
      break;
    case "Vol":
      pokemonTypeStyle.backgroundColor = "#7da6de  ";
      break;
    case "Combat":
      pokemonTypeStyle.backgroundColor = "#cb5f48  ";
      break;
  }

  return (
    <div
      style={{
        margin: "1em",
      }}
    >
      <Card3d
        style={{
          background:
            "linear-gradient(to right,rgb(238, 238, 238),rgb(255, 255, 255),rgb(240, 240, 240))",
          display: "flex",
          "flex-direction": "column",
          "align-items": "center",
          width: "250px",
          height: "320px",
          padding: "0 0 3em 0",
          margin: "0",
          border: "1px solid rgba(255, 255, 255, 0.6)",
          cursor: "pointer",
          "border-radius": "1em",
          overflow: "hidden",
        }}
        onClick={() => console.log("Hola")}
      >
        <div className={styles.pokemon} style={pokemonTypeStyle}>
          <div className={styles.imgContainer}>
            <Image
              src={`https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/${props.id}/regular.png`}
              width={100}
              height={100}
              alt={"pokemon"}
            />
          </div>
        </div>
        <div className={styles.info}>
          <h3 className={styles.name}>{props.name}</h3>
          <span className={styles.description}>
            <div className={styles.left}>
              <span>Type: </span>
              <span>Taille: </span>
              <span>Poids: </span>
              <span>Atk: </span>
              <span>Def: </span>
            </div>
			<div className={styles.right}>
            <span>{props.type}</span>
            <span>{props.height}</span>
            <span>{props.weight}</span>
            <span>{props.stats.atk}</span>
            <span>{props.stats.def}</span>
			</div>
          </span>
        </div>
      </Card3d>
    </div>
  );
}

export default Pokemon;
