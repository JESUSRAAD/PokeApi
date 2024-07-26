import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {





  return (
    <div className='flex items-center justify-center bg-black text-white h-[68px]'>
        <ul className='flex gap-5'>
            <il><Link to="/">Tienda</Link></il>
            <il><Link to="/suscription">Suscripcion</Link></il>
            <il><Link to="/forCompany">Para Empresas</Link></il>
            <il><Link to="/aboutWe">Sobre Nosotros</Link></il>
            <il><Link to="/contact">Contacto</Link></il>
          
        </ul>
    </div>
  )
}

export default NavBar