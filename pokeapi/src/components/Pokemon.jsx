import React, { useState, useEffect } from "react";
import PokeCard from "./PokeCard";


const Pokemon = ({ id }) => {

   
    
    const pokeAparitions = () => {
        const aparitions = id.game_indices.map((aparition) => {
      return aparition.version.name + ", ";
    });
    return aparitions;
  };
    // console.log(id.game_indices);
  
  const pokeType = () => {
      const types = id.types.map((type) => {
      return type.type.name + ", ";
    });
    return types;
};
//   console.log(id.types);

const pokeMoves = () => {
    const moves = id.moves.map((move) => {
      return move.move.name + ", ";
    });
    return moves;
};
//   console.log(id.moves);

const pokeItem = () => {
    const items = id.held_items.map((item) => {
        return item.item.name + ", ";
    });
    return items;
};
  //   console.log(id.held_items);
  
  const [location, setLocation] = useState([]);
  
//   console.log(id.location_area_encounters);

  const getPokeLocation = async () => {
    try {
        const response = await fetch(id.location_area_encounters);
        const data = await response.json();
        // console.log(data);
        setLocation(data)
        
        
    } catch (error) {
        console.log(error);
        
    }
};

useEffect(() => {
    getPokeLocation();
}, [id]);

// console.log(location);

const pokeLocationList=location.map((ubication)=>{
    return (
        ubication.location_area.name+",  "

    )
})


  const imgsPokemon = () => {
        return Object.entries(id.sprites)
          .slice(0,8)
          .map(([title, url]) => (url ? <img src={url} alt={title} /> : null));
      };
    
        console.log(Object.entries(id.sprites));
        console.log(id.sprites);
    
    
    
    return (
        <div>
    
      <p>NOMBRE:{id.name}</p>
      <p>ID:{id.id}</p>
      <p>EXP BASE:{id.base_experience}</p>
      <p>ALTURA:{id.height}</p>
      <p>PESO:{id.weight}</p>
      <p>
        APARICIONES:
        {pokeAparitions()}
      </p>
      <p>
        TIPO:
        {pokeType()}
      </p>
      <p>
        MOVIMIENTOS:
        {pokeMoves()}
      </p>
      <p>
        ITEMS:
        {pokeItem()}
      </p>
      <p>
        UBICACION:
        {pokeLocationList}
      </p>
      <p className="flex">
        IMAGENES:
        {imgsPokemon()}
      </p>
      <div>
        <PokeCard id={id}/>
      </div>
    </div>
  );
};

export default Pokemon;
