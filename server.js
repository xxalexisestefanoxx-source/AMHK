const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/status', (req, res) => {
  res.json({
    online: true,
    name: 'AMHK',
    message: 'Servidor funcionando correctamente'
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`AMHK disponible en http://127.0.0.1:${PORT}`);
});
