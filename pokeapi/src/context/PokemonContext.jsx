import React, { createContext, useState } from "react";

export const PokeContext = createContext(null);

export default function PokeContextProvider({children}) {

	const [pokeId, setPokeId] = useState(151);
    const [limit, setLimit]=useState(20)
const [set,setSet]=useState(0)
const [copyDetailsPokemons,setCopyDetailsPokemons]=useState([])
const [freshArrFuntin,setFreshArrFuntin]=useState()
const [pokeDetails, setPokeDetails] = useState([]);
	return(
		<PokeContext.Provider value={{pokeId, setPokeId, limit, setLimit,set,setSet,copyDetailsPokemons,setCopyDetailsPokemons,pokeDetails, setPokeDetails,freshArrFuntin,setFreshArrFuntin}}>
			{children}
		</PokeContext.Provider>
	)
}