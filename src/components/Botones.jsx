import React from 'react'
import "./Botones.css"
const Botones = ( {icono, idPokemon} ) => {
  return (
   
      <div className='cont__botones'>

        <button onClick={idPokemon}
         className='botones' > {icono}
         
          </button>
        <div className='fondBtn'></div>
        
    </div>
  )
}

export default Botones
