import React, { useEffect, useState } from "react";
import PokeCardActv2 from './PokeCardActv2'

const PokeList = ({pokeList}) => {


  return (
    <div>
        <PokeCardActv2 list={pokeList} />
    </div>

  )
}

export default PokeList