import './App.css';
import Encabezado from './components/Encabezado';
import TareaFormulario from './components/TareaFormulario';


function App() {
  return (
    <div className='aplicacion-tareas'>
      <Encabezado>Aplicación de tareas</Encabezado>
      <div className='tareas-lista-principal'>
        <h2>Mis tareas</h2>
        <TareaFormulario />
      </div>
    </div>
  );
}

export default App;
