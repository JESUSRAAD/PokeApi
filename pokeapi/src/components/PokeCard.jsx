import { Swords } from "lucide-react";
import React, { useEffect } from "react";

const PokeCard = ({ id }) => {
  const imgsPokemon = () => {
    return Object.entries(id.sprites)
      .slice(0, 8)
      .map(([title, url]) => (url ? <img src={url} alt={title} /> : null));
  };

  const pokeCard = () => {
    const card = id.stats.map((stat) => {
      return (
        <div className="mb-2">
         <p className="flex font-light text-gray-700">
         <Swords /> {stat.stat.name}:{stat.base_stat}
          </p>
        </div>
      );
    });
    return card;
  };

  useEffect(() => {
    pokeCard();
    imgsPokemon();
  }, []);

  const capitalName = id.name;
  // console.log(capitalName.toUpperCase());
  return (
    <div className="max-w-max mx-auto bg-white border-2 border-gray-300 shadow-md rounded-lg overflow-hidden">
      <div className="bg-blue-500 text-white p-4">
        <h2 className="text-2xl font-bold text-center">
          {capitalName.toUpperCase()}
        </h2>
        <div className="flex justify-center bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtZk44zmb2phoudWrzYbI_cOdyZwVgbS29-g&s)] bg-cover text-white p-2 text-center">
          <div>{imgsPokemon().slice(4, 5)}</div>
        </div>
        <div className="flex gap-4 p-4 bg-yellow-100">
          <div>{pokeCard().slice(0, 3)}</div>
          <div>{pokeCard().slice(3, 6)}</div>
        </div>
      </div>
    </div>
  );
};

export default PokeCard;
