import React, { useState, useEffect } from "react";
import Pokemon from "./Pokemon";
import PokeCard from "./PokeCard";

const PokeInfo = () => {
  //https://pokeapi.co/api/v2/{endpoint}/

  const pokeId = 125;
console.log(pokeId);

  const [pokemon, setPokemon] = useState([]);
const [loading, setLoading]=useState(true)

  const getPokeById = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokeId}`
      );
      const pokeData = await response.json();
      setPokemon(pokeData);
setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  };

  useEffect(() => {
    getPokeById();
  }, []);

  console.log(pokemon);

  return (

    <div>
    {loading?(<p>Cargando</p>):( 
        
        <Pokemon id={pokemon} />
      )
    }
    </div>
  );
};

export default PokeInfo;
