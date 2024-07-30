import React, { useState, useEffect, useContext } from "react";
import Pokemon from "./Pokemon";
import PokeList from "./PokeList";
import { PokeContext } from "../context/PokemonContext";
import { ButtonPokePlus } from "./ButtonPokePlus";

const PokeInfo = () => {
  const { pokeId } = useContext(PokeContext);



  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPokeById = async () => {
      try {
        
        const [responsePokemons] = await Promise.all([
          fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`),
        ]);

        const pokeData = await responsePokemons.json();
        setPokemon(pokeData);


        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    getPokeById();
  }, [pokeId]);


  
  return (
    <div>
      {loading ? (
        <p>Cargando</p>
      ) : (
        <div className="flex flex-col gap-3">
          <div>
            <Pokemon id={pokemon} />
          </div>
          <div>
            <PokeList />
            <ButtonPokePlus/>
          </div>
        </div>
      )}
    </div>
  );
};

export default PokeInfo;
