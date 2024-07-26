import React, { useState, useEffect } from "react";
import Pokemon from "./Pokemon";
import PokeList from "./PokeList";

const PokeInfo = () => {
  //https://pokeapi.co/api/v2/{endpoint}/

  const [pokeId,setPokeId] = useState(151);

  const [pokemon, setPokemon] = useState([]);
  const [poke20, setpoke20] = useState("");
  const [loading, setLoading] = useState(true);

  const getPokeById = async () => {
    try {
      const [responsePokemons, responsePoke20] = await Promise.all([
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`),
          fetch("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0")
      ]);
      const pokeData = await responsePokemons.json();
      setPokemon(pokeData);

      const poke20Data = await responsePoke20.json();
     setpoke20( poke20Data.results)

     



      setLoading(false);
    } catch (error) {
        console.log(error);
        setLoading(false);
    }
};

useEffect(() => {
    getPokeById();
}, []);


  

  return (
    <div>
      {loading ? (
        <p>Cargando</p>
      ) : (
        <div>
          <div>
            <Pokemon id={pokemon} />
          </div>
          <div>
            <PokeList pokeList={poke20} />
          </div>
        </div>
      )}
    </div>
  );
};

export default PokeInfo;
