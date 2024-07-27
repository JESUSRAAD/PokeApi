import React, { useState, useEffect, useContext } from "react";
import Pokemon from "./Pokemon";
import PokeList from "./PokeList";
import { PokeContext } from "../context/PokemonContext";

const PokeInfo = () => {
  const { pokeId,limit } = useContext(PokeContext);

console.log(limit);

  const [pokemon, setPokemon] = useState([]);
  const [poke20, setpoke20] = useState("");
  const [loading, setLoading] = useState(true);

  const getPokeById = async () => {
    try {
      const [responsePokemons, responsePoke20] = await Promise.all([
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`),
        fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=0`),
      ]);
      const pokeData = await responsePokemons.json();
      setPokemon(pokeData);

      const poke20Data = await responsePoke20.json();
      setpoke20(poke20Data.results);

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getPokeById();
  }, [pokeId,limit]);

// const fetchPokemons=async(limit)=>{
  
//  try {
//   const result=await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`);
// const pokeData = await result.json();
// setPokemon(pokeData);
// } catch (error) {
//   console.log(error);
//       setLoading(false);
// }


  
// }

  
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
