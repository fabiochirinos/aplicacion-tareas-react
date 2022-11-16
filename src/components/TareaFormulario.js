import React from 'react'
import '../styles/TareaFormulario.css'

export default function TareaFormulario(props) {
  return (
    <form className='tarea-formulario'>
      <input
        className='tarea-input'
        type='text'
        placeholder='Escribe una Tarea'
        name='texto'
      />
      <button className='tarea-boton'>
        Agregar Tarea
      </button>
    </form>
  )
}
