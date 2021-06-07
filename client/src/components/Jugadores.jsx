import React from 'react';
import axios from 'axios';
import { Wrapper } from './Jugadores.styles';

export const Jugadores = () => {
  const [jugadores, setJugadores] = React.useState([]);

  React.useEffect(async () => {
    const { data } = await axios.get('/api/jugadores');
    setJugadores(data);
  }, []);

  return (
    <Wrapper>
      <h3>Jugadores</h3>
      <div className="jugadores">
        {jugadores.map((jugador) => {
          return (
            <li key={jugador.id}>
              {jugador.name} | {jugador.position}
            </li>
          );
        })}
      </div>
    </Wrapper>
  );
};
