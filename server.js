const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/api/jugadores', (req, res) => {
  const jugadores = [
    { id: 1, name: 'falcao garcia', position: 'volante' },
    { id: 2, name: 'juan fernando quintero', position: 'Delantero' },
    { id: 3, name: 'james Rodriguez', position: 'volante' },
    { id: 4, name: 'jackson martines ', position: 'Delantero' },
    { id: 5, name: 'teofilo gutierres', position: 'Delantero' },
  ];
  res.json(jugadores);
});

app.listen(PORT, () =>
  console.log(`Server runnign en the port http://localhost:${PORT}`)
);
