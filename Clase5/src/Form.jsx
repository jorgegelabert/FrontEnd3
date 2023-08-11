import React, { useState } from 'react'

export const Form = () => {

    const [nombre, setNombre] = useState('')
    const [edad, setEdad] = useState()
    const [pokemon, setPokemon] = useState('')

    function handlerNombre(e) {
        setNombre(e.target.value)
    }

    function handlerEdad(e) {
        setEdad(e.target.value)
    }

    function handlerPokemon(e) {
        setPokemon(e.target.value)
    }

    function handlerSubmit(e) {
        e.preventDefault()
        alert("Datos enviados!!")
        console.log(nombre);
        console.log(edad);
        console.log(pokemon);
    }
  return (
    <>
    <div>Form</div>
    <form action="submit">
    <div>
      <label htmlFor="nombre">Ingresa tu nombre</label>
        <input type="text" name="nombre" onChange={handlerNombre}/>
    </div>
    <div>
    <label htmlFor="edad">Ingresa tu edad</label>
        <input type="number" name="edad" onChange={handlerEdad}/>
    </div>
    <div>
    <label htmlFor="pokemon">Ingresa tu pokemon favorito</label>
        <input type="text" name="pokemon" onChange={handlerPokemon}/>
    </div>
    <button type='submit' onClick={handlerSubmit}>Enviar</button>
    </form>
    </>
  )
}
