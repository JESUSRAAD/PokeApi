import React, { useContext } from "react";
import { PokeContext } from "../context/PokemonContext";

export const ButtonPokePlus = () => {
  const {limit, setLimit,setSet,set,copyDetailsPokemons,setCopyDetailsPokemons,pokeDetails,freshArrFuntin} = useContext(PokeContext);

  const morePokemos = () => {
if (set===0&&limit===20) {
  setSet(20)
  setLimit(10)
  // setCopyDetailsPokemons((prevCopyDetailsPokemons)=>[...prevCopyDetailsPokemons, ...pokeDetails])
} else {
  setSet((prevSet)=>prevSet+10) 
  // setCopyDetailsPokemons((prevCopyDetailsPokemons)=>[...prevCopyDetailsPokemons, ...pokeDetails])

}




      };
  return(
<div className="flex justify-center">
    <button className="bg-blue-500 hover:bg-blue-400  text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={morePokemos}>ButtonPokePlus</button>

</div>
  ) 
}
