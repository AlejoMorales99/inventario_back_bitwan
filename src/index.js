// Importo el archivo .env para poder usar las variables globales
require('dotenv').config({ path: '.env' });

const app = require('./app'); // Importo mi aplicación Express desde el archivo app.js

const IP = process.env.IP_HOST;

const PORT = process.env.PORT_APP || 4003; // Establezco el puerto en el que se ejecutará el servidor, tomando el valor de la variable de entorno PORT_APP si está definida, de lo contrario, uso el puerto 4003

app.listen(PORT,  () => {
  console.log(`Servidor iniciado en el puerto http://${IP}:${PORT}`); // Imprimo un mensaje en la consola para indicar que el servidor se ha iniciado correctamente y en qué puerto está escuchando
});