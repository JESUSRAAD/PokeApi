import React from "react";
import PokeInfo from "./components/PokeInfo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from "./pages/Contacto";
import ParaEmpresas from "./pages/ParaEmpresas";
import SobreNosotros from "./pages/SobreNosotros";
import Suscripcion from "./pages/Suscripcion";
import Tienda from "./pages/Tienda";
import NavBar from "./components/NavBar";



const App = () => {
  return (
    <div>
      
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Tienda />} />
            <Route path="/contact" element={<Contacto />} />
            <Route path="/forCompany" element={<ParaEmpresas />} />
            <Route path="/aboutWe" element={<SobreNosotros />} />
            <Route path="/suscription" element={<Suscripcion />} />
          </Routes>
          <footer>footer</footer>
        </BrowserRouter>
        <PokeInfo />
       
    </div>
  );
};

export default App;
