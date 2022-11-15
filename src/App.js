import './App.css';
import Encabezado from './components/Encabezado';
import Tarea from './components/Tarea';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <Encabezado>Aplicación de tareas</Encabezado>
      <div className='tareas-lista-principal'>
        <h2>Mis tareas</h2>
        <Tarea texto='Aprender React' />
      </div>
    </div>
  );
}

export default App;
