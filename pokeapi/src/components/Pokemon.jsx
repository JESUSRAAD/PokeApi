import React, { useState, useEffect } from "react";
import PokeCard from "./PokeCard";
import {
  Bolt,
  BrainCog,
  Bug,
  Circle,
  Dot,
  Droplet,
  Droplets,
  Eclipse,
  Flame,
  Gamepad,
  Ghost,
  Gitlab,
  Grab,
  Leaf,
  MapPin,
  Mountain,
  Podcast,
  Snowflake,
  Sparkles,
  Twitter,
  Zap,
} from "lucide-react";

const Pokemon = ({ id }) => {
  const pokeAparitions = () => {
    const aparitions = id.game_indices.map((aparition) => {
      return (
        <li className="flex min-w-[100px]">
          <Gamepad color="#65A30D" /> {aparition.version.name}
        </li>
      );
    });
    return aparitions;
  };

  const pokeType = () => {
    const types = id.types.map((type) => {
      return (
        <li className="flex w-fit">
          {" "}
          {
          type.type.name === "steel" ? (
            <Bolt color="#8c8c8c" />
          ) :
          type.type.name === "poison" ? (
            <Droplets color="#9d5cff" />
          ) :
           type.type.name === "water" ? (
            <Droplet color="#0091ff" />
          ) : type.type.name === "bug" ? (
            <Bug color="#53ff24" />
          ) : type.type.name === "dragon" ? (
            <Gitlab color="#0e0075" />
          ) : type.type.name === "electric" ? (
            <Zap color="#eeff00" />
          ) : type.type.name === "ghost" ? (
            <Ghost color="#9900ff" />
          ) : type.type.name === "fire" ? (
            <Flame color="#ff9500" />
          ) : type.type.name === "fairy" ? (
            <Sparkles color="#fe43f8" />
          ) : type.type.name === "ice" ? (
            <Snowflake color="#43f2fe" />
          ) : type.type.name === "fighting" ? (
            <Grab color="#ff004c" />
          ) : type.type.name === "normal" ? (
            <Circle color="#6b6b6b" />
          ) : type.type.name === "grass" ? (
            <Leaf color="#015102" />
          ) : type.type.name === "psychic" ? (
            <Podcast color="#F37179" />
          ) : type.type.name === "ground" ? (
            <Mountain color="#4d0000" />
          ) : type.type.name === "rock" ? (
            <BrainCog color="#CCBE89" />
          ) : type.type.name === "sinister" ? (
            <Eclipse color="#7d2dbe" />
          ) : (
            <Twitter color="#5cc9ff" />
          )}
          {type.type.name}
        </li>
      );
    });
    return types;
  };

  const pokeMoves = () => {
    const moves = id.moves.map((move, i) => {
      return (
        <li className="flex min-w-[170px]">
        
          {i + 1}-{move.move.name}
        </li>
      );
    });
    return moves;
  };

  const pokeItem = () => {
    const items = id.held_items.map((item) => {
      return  <li className="flex w-fit m-2">
        
        <Dot color="#65A30D" />{item.item.name}
    </li>
    });
    return items;
  };

  const [location, setLocation] = useState([]);


  const getPokeLocation = async () => {
    try {
      const response = await fetch(id.location_area_encounters);
      const data = await response.json();
      setLocation(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPokeLocation();
  }, [id]);

 

  const pokeLocationList = location.map((ubication) => {
    return (
      <li className="flex min-w-[370px]">
        <MapPin color="#fc0303" /> {ubication.location_area.name}
      </li>
    );
  });

  const imgsPokemon = () => {
    return Object.entries(id.sprites)
      .slice(0, 8)
      .map(([title, url]) => (url ? <img src={url} alt={title} /> : null));
  };

  return (
    <div className="flex flex-col justify-center items-center bg-[url(https://assets.pokemon.com//assets/cms2-es-es/img/misc/virtual-backgrounds/masters/volcano.jpg)] max-h-max bg-cover">
      <div className=" flex flex-col gap-4  max-w-[90%]  bg-white p-6 mx-8 my-8 bg-opacity-45 border-lime-600 border-[4px] rounded-xl">
        <div className=" flex p-2  justify-center ">
          <p className="flex p-2  justify-center w-fit font-extrabold text-4xl text-yellow-400  ">
            {id.name.toUpperCase()}
          </p>
        </div>
        <div className="flex justify-center gap-3">
          <p>ID:{id.id}</p>
          <p>EXP BASE:{id.base_experience}</p>
          <p>ALTURA:{id.height}</p>
          <p>PESO:{id.weight}</p>
         
        </div>
<div className="flex justify-center items-center">

        <div className="flex w-fit h-fit  bg-white  border-lime-600 border-[4px] rounded-xl ">
            TIPO:
            {pokeType()}
          </div>

</div>

        <div className=" w-fit h-fit bg-white  border-lime-600 border-[4px] rounded-xl ">
          APARICIONES:
          <ul className="flex  flex-wrap mx-2 my-2  ">{pokeAparitions()}</ul>
        </div>

        <div className="  w-fit h-fit bg-white  border-lime-600 border-[4px] rounded-xl ">
          MOVIMIENTOS:
          <div >
          <ul className="flex  justify-center flex-wrap mx-2 my-2  ">{pokeMoves()}</ul>

          </div>
        </div>
        <div className="  w-fit h-fit bg-white  border-lime-600 border-[4px] rounded-xl ">
          ITEMS:
          <ul>
          {pokeItem()}

          </ul>
        </div>
        <div className=" w-fit h-fit bg-white  border-lime-600 border-[4px] rounded-xl ">
          UBICACION:
          <ul className="flex   flex-wrap mx-2 my-2  ">{pokeLocationList}</ul>
        </div>
        <p className="flex justify-center items-center">{imgsPokemon()}</p>
        <div>
          <PokeCard id={id} />
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
