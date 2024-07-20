import React, { useState, useEffect} from 'react'
import Pokemon from './Pokemon'

const PokeInfo = () => {
//https://pokeapi.co/api/v2/{endpoint}/



const pokeId=125

const [pokemon, setPokemon] = useState([]);

const getPokeById = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}/`);
      const data = await response.json();
      
      setPokemon(data)

      return ;
    }
     catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    getPokeById();
 }, []);


console.log(pokemon);




  return (
    <div>
        <Pokemon id={pokemon}/>
    </div>
  )
}

export default PokeInfo