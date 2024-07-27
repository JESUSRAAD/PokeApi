import React, { useContext, useEffect, useState } from "react";
import { PokeContext } from "../context/PokemonContext";
import { Swords } from "lucide-react";

const PokeCardActv2 = ({ list }) => {
    console.log(list);
  
  const {  setPokeId } = useContext(PokeContext);
  const [pokeDetails, setPokeDetails] = useState([]);

  const getPokeDetails = async () => {
    try {
      const responses = await Promise.all(
        list.map((pokemon) => {
          return fetch(pokemon.url);
        })
      );
      const data = await Promise.all(
        responses.map((response) => {
          return response.json();
        })
      );
      setPokeDetails(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPokeDetails();
  }, []);
  console.log(pokeDetails);

  return (
    <div className="flex flex-wrap">
      {pokeDetails.map((pokemon) => {
        const imgsPokemon = () => {
          return Object.entries(pokemon.sprites)
            .slice(4, 5)
            .map(([title, url]) =>
              url ? <img src={url} alt={title} /> : null
            );
        };
        const pokeCard = () => {
          const stat = pokemon.stats.map((stat) => {
            return (
              <div className=" mb-2">
                <p className="flex font-light text-gray-700">
                <Swords /> {stat.stat.name}:{stat.base_stat}
                </p>
              </div>
            );
          });
          return stat;
        };

        const handlePokeInfo = () => {
        return  setPokeId(pokemon.id);
        };

        let cssClass=""
if (pokemon.id%2===0) {
  cssClass="bg-blue-500 text-white p-4"
} else {
  cssClass= "bg-blue-500 text-white p-4 bg-opacity-45"
}



        return (
          <div className="max-w-max mx-auto bg-white border-2 border-gray-300 shadow-md rounded-lg overflow-hidden">
            <div className={cssClass}>
              <h2 className="text-2xl font-bold text-center">
                {pokemon.name.toUpperCase()}
              </h2>
              <div className="flex justify-center bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtZk44zmb2phoudWrzYbI_cOdyZwVgbS29-g&s)] bg-cover text-white p-2 text-center rounded-t-xl">
                {imgsPokemon()}
              </div>
              <div className="flex flex-col justify-center gap-4 p-4 bg-yellow-100 rounded-b-xl">
                <div className="flex ">
                  <div>{pokeCard().slice(0, 3)}</div>
                  <div>{pokeCard().slice(3, 6)}</div>
                </div>
                <button onClick={handlePokeInfo} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                  Info
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PokeCardActv2;
