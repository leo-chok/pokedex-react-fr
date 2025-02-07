import styles from "../styles/Pokemon.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import Card3d from "react-animated-3d-card";
import ReactCardFlip from "react-card-flip";

function Pokemon(props) {
  const [isFlipped, setIsFlipped] = useState(false);
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

  function handleClick() {
    setIsFlipped(!isFlipped);
  }

  return (
    <div
      style={{
        margin: "1em",
      }}
    >
      {" "}
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <Card3d
          style={{
            background:
              "linear-gradient(to right,rgb(238, 238, 238),rgb(255, 255, 255),rgb(240, 240, 240))",
            display: "flex",
            "flex-direction": "column",
            "align-items": "center",
            width: "260px",
            height: "360px",
            border: "1px solid rgba(255, 255, 255, 0.6)",
            cursor: "pointer",
            "border-radius": "1em",
            overflow: "hidden",
          }}
          onClick={() => handleClick()}
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

        <Card3d
          style={{
            backgroundImage:
              "url('https://s3.pokeos.com/pokeos-uploads/tcg/eng/back.webp')",
            backgroundSize: 'cover',
            
            width: "260px",
            height: "360px",
            border: "1px solid rgba(255, 255, 255, 0.6)",
            cursor: "pointer",
            "border-radius": "1em",
            overflow: "hidden",
          }}
          onClick={() => handleClick()}
        >
        </Card3d>
      </ReactCardFlip>
    </div>
  );
}

export default Pokemon;
