import React from "react";
import PokeCardActv2 from './PokeCardActv2'
import { ButtonPokePlus } from "./ButtonPokePlus";

const PokeList = ({pokeList}) => {


  return (
    <div className="flex flex-col justify-center">
        <PokeCardActv2 list={pokeList} />
        <ButtonPokePlus/>
    </div>

  )
}

export default PokeList