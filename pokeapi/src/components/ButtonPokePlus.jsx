import React, { useContext } from "react";
import { PokeContext } from "../context/PokemonContext";

export const ButtonPokePlus = () => {
  const { setLimit } = useContext(PokeContext);

  const morePokemos = () => {
     setLimit((prevLimit) => prevLimit + 10);
  };
  return(
<div className="flex justify-center">
    <button className="bg-blue-500 hover:bg-blue-400  text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={morePokemos}>ButtonPokePlus</button>;

</div>
  ) 
};
