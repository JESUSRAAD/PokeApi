import React, { useState, useEffect, useContext } from "react";
import PokeCardActv2 from './PokeCardActv2'
import { PokeContext } from "../context/PokemonContext";

const PokeList = () => {

  const {limit,set } = useContext(PokeContext);

console.log(limit);
console.log(set);
  
  const [loading, setLoading] = useState(true);
const [poke20, setPoke20]=useState([])

  
  useEffect(() => {
    const getPokeById = async () => {
      try {
      
        const  responsePoke20 = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${set}`)
        


        const poke20Data = await responsePoke20.json();
        setPoke20(poke20Data.results);
console.log(responsePoke20);
setLoading(false);

      } catch (error) {
        console.log(error);
        setLoading(false);

      }
    };

    getPokeById();
  }, [limit,set]);

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