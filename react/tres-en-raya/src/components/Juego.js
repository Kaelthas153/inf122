import React from 'react';
import Tablero from './Tablero';
import { useState } from 'react';
import Historial from './Historial';
import '../styles/Juego.css'
import { useSpring, animated } from 'react-spring';

function Juego() {
    const [historial, setHistorial] = useState([
        {
            cuadros: Array(9).fill(null)
        },
    ]);

    const [nroMovimiento, setNroMovimiento] = useState(0);
    const [cuadros, setCuadros] = useState(Array(9).fill(null));
    const [jugador, setJugador] = useState("X");
    const [ganador, setGanador] = useState(null);
    
    const click = (i) => {
        if (ganador || cuadros[i] !== null) {
          // Si hay un ganador o el cuadro ya está marcado, no permitir más jugadas
          return;
        }
    
        const nuevoMovimiento = historial.slice(0, nroMovimiento + 1);
        const movimientoActual = nuevoMovimiento[nuevoMovimiento.length - 1];
        const cuadrosTemp = movimientoActual.cuadros.slice();
    
        if (cuadrosTemp[i] === null) {
          cuadrosTemp[i] = jugador;
          setCuadros(cuadrosTemp);
          setJugador(jugador === 'X' ? 'O' : 'X');
          setHistorial(nuevoMovimiento.concat([{ cuadros: cuadrosTemp }]));
          setNroMovimiento(nuevoMovimiento.length);
    
          const ganadorActual = calcularGanador(cuadrosTemp);
          if (ganadorActual) {
            setGanador(ganadorActual);
          }
        }
      };
    
const saltarA = (movimiento) => {
    setNroMovimiento(movimiento);

    // Modificación para eliminar movimientos posteriores
    setHistorial((prevHistorial) => {
        const nuevoHistorial = prevHistorial.slice(0, movimiento + 1);
        const ultimoMovimiento = nuevoHistorial[nuevoHistorial.length - 1];

        // Actualiza los cuadros y el ganador al estado correspondiente
        setCuadros(ultimoMovimiento.cuadros);
        setGanador(calcularGanador(ultimoMovimiento.cuadros));

        // Actualiza el jugador de acuerdo al estado de esa jugada
        setJugador(ultimoMovimiento.cuadros.flat().filter(Boolean).length % 2 === 0 ? 'X' : 'O');

        return nuevoHistorial;
    });
};
    const movimientoActual = historial[nroMovimiento];
    return (
        <div className="juego">
            <div className="juego-tablero">
                <h2>{ganador ? `Ganador: ${ganador}` : `Próximo jugador: ${jugador}`}</h2>
                <Tablero cuadros={cuadros} onClick={(i) => click(i)} />
            </div>
            
            <Historial historial={historial} saltarA={saltarA} />
        </div>
    );
}
export default Juego;

function calcularGanador(cuadros) {
    const lineas = [
        [0, 1, 2], // primera fila
        [3, 4, 5], // segunda fila
        [6, 7, 8], // tercera fila
        [0, 3, 6], // primera columna
        [1, 4, 7], // segunda columna
        [2, 5, 8], // tercera columna
        [0, 4, 8], // diagonal
        [2, 4, 6] // diagonal
    ];
    for (let i = 0; i < lineas.length; i++) {
        const [a, b, c] = lineas[i];
        if (cuadros[a] && cuadros[a] === cuadros[b] && cuadros[a] === cuadros[c]) {
            return cuadros[a];
        }
    }
    return null;
}