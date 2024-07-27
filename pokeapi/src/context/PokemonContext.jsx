import React, { createContext, useState } from "react";

export const PokeContext = createContext(null);

export default function PokeContextProvider({children}) {

	const [pokeId, setPokeId] = useState(151);
    const [limit, setLimit]=useState(20)


	return(
		<PokeContext.Provider value={{pokeId, setPokeId, limit, setLimit}}>
			{children}
		</PokeContext.Provider>
	)
}