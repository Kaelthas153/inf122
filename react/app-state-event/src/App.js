import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import Boton1 from './components/Boton1';
import { useState } from 'react';

function App() {
  const [nroClicks, setNumClicks] = useState(0);
  const click = () => {
    setNumClicks(nroClicks + 1);
  }
  const reiniciar = () => {
    setNumClicks(0);
  }
  const mas3 = () => {
    setNumClicks(nroClicks + 3);
  }
  const menos3 = () => {
    setNumClicks(nroClicks - 3);
  }
  const mas1 = () => {
    setNumClicks(nroClicks + 1);
  }
  const menos1 = () => {
    setNumClicks(nroClicks - 1);
  }
  return (
    <div className="App">
      <div className="contenedor-principal">
        <Contador nroClicks={nroClicks} />
        <div className='contendedor-botones'>
          <Boton texto="-3" esBotonClick={true}
            funcionClick={menos3} />
            <Boton texto="+3" esBotonClick={true}
            funcionClick={mas3} />
            <Boton texto="-1" esBotonClick={true}
            funcionClick={menos1} />
            <Boton texto="+1" esBotonClick={true}
            funcionClick={mas1} />
          
        </div>
        <Boton texto="Reiniciar" esBotonClick={false}
            funcionClick={reiniciar} />

      </div>
    </div>
  );
}

export default App;