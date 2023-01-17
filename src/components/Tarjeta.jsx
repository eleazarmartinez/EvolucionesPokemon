import React from 'react'
import "./Tarjeta.css"


const Tarjeta = ( { nombre,  imagen} ) => {
  return (
    <div className='tarjeta' >
        <p className='tarjeta__nombre'>{nombre}</p>
        <div className='cont__img'>
            <img className='imagen' src={imagen} alt="imagen_pokemon" />
        </div>
        
    </div>
  )
}

export default Tarjeta