import './App.css';
import Encabezado from './components/Encabezado';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <Encabezado>Aplicación de tareas</Encabezado>
      <div className='tareas-lista-principal'>
        <h2>Mis tareas</h2>
      </div>
    </div>
  );
}

export default App;
