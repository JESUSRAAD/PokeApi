import React, { createContext, useState } from "react";

export const PokeContext = createContext(null);

export default function PokeContextProvider({children}) {

	const [pokeId, setPokeId] = useState(151);

	return(
		<PokeContext.Provider value={{pokeId, setPokeId}}>
			{children}
		</PokeContext.Provider>
	)
}