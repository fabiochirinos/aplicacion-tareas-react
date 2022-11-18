import './App.css';
import Encabezado from './components/Encabezado';
import ListaDeTareas from './components/ListaDeTareas';


function App() {
  return (
    <div className='aplicacion-tareas'>
      <Encabezado>Aplicación de tareas</Encabezado>
      <div className='tareas-lista-principal'>
        <h2>Mis tareas</h2>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
