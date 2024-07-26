
import React, { createContext, useState } from "react";

export const PokeContext = createContext(null);

export default function PokeContextProvider({children}) {

	const [pokeId, setPokeId] = useState(null);

	return(
		<PokeContext.Provider value={{pokeId, setPokeId}}>
			{children}
		</PokeContext.Provider>
	)
}