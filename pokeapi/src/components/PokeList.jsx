import React, { useState, useEffect, useContext } from "react";
import PokeCardActv2 from './PokeCardActv2'
import { PokeContext } from "../context/PokemonContext";

const PokeList = () => {

  const {limit } = useContext(PokeContext);
console.log(limit);
  const [poke20, setpoke20] = useState([]);
  const [loading, setLoading] = useState(true);


  
  useEffect(() => {
    const getPokeById = async () => {
      try {
        // setLoading(true);
        const [ responsePoke20] = await Promise.all([
          fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`),
        ]);


        const poke20Data = await responsePoke20.json();
        setpoke20(poke20Data.results);
console.log(responsePoke20);
setLoading(false);

      } catch (error) {
        console.log(error);
        setLoading(false);

      }
    };

    getPokeById();
  }, [limit]);

console.log(poke20);



  return (
    <div className="flex  flex-col justify-center">
       {loading ? (
        <p>Cargando</p>
      ) : (
        <PokeCardActv2 list={poke20} />
      )}
      
    </div>

  )
}

export default PokeList