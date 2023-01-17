import Botones from './components/Botones'
import './App.css'
import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import { useState, useEffect } from 'react';
import Tarjeta from './components/Tarjeta';

function App() {
const [buscarId, setBuscarId ] = useState(1) 
const [evoluciones, setEvoluciones] = useState([])


useEffect(()=>{
  evolucionesPoke(buscarId)
}, [buscarId] )

async function evolucionesPoke (id){
 const respuesta =  await fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}/`)
 
  const elemento = await respuesta.json()

  let pokemonEvolArr = [];

   let nombrePokemonv1 = elemento.chain.species.name;
   let imagenPokemonv1 = await  buscarImagen(nombrePokemonv1)
   pokemonEvolArr.push([nombrePokemonv1, imagenPokemonv1])

   if(elemento.chain.evolves_to.length !== 0){
    let nombrePokemonv2 = elemento.chain.evolves_to[0].species.name;
    let imagenPokemonv2 = await buscarImagen(nombrePokemonv2)
    pokemonEvolArr.push([nombrePokemonv2, imagenPokemonv2])
    


    if(elemento.chain.evolves_to[0].evolves_to.length !== 0){
    let nombrePokemonv3 = elemento.chain.evolves_to[0].evolves_to[0].species.name;
    let imagenPokemonv3 = await buscarImagen(nombrePokemonv3)
    pokemonEvolArr.push([nombrePokemonv3, imagenPokemonv3])
    
      
   }
}
setEvoluciones(pokemonEvolArr)

}
 async function buscarImagen(name){

  const respuesta =  await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
 
  const elemento = await respuesta.json()
   return  elemento.sprites.other["official-artwork"].front_default;
 }





function disminuir(){
    buscarId ==1 ?setBuscarId(1):setBuscarId(buscarId -1);
}

function aumentar(){
   setBuscarId(buscarId +1) 
}

  return (
    <div className="App">
    <div className='cont__targetas'>
      {evoluciones.map(pokemones=>
        <Tarjeta
        key={pokemones[0]}
          nombre ={pokemones[0]}
          imagen ={pokemones[1]}
        />
      )}
    
    

    </div>
     <div className='boton'>

      < Botones 
    
      idPokemon={disminuir}
          icono={< FiArrowLeft/>}
           />

    
      
      <Botones 
       idPokemon={aumentar}
       
      icono={<FiArrowRight/> }
      />
     </div>
      
    </div>
  )
}

export default App
