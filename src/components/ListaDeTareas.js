import React from 'react'
import TareaFormulario from './TareaFormulario'
import '../styles/ListaDeTareas.css'

export default function ListaDeTareas() {
  return (
    <>
      <TareaFormulario />
      <div className='tarea-lista-contenedor'>
        Lista de tareas
      </div>
    </>
  )
}
