const querystring = require('querystring');

function validarToken(token) {
  const data = querystring.stringify({ authorization: token });

  return fetch('http://104.131.8.122:8000/checktoken', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: data
  })
    .then(response => response.json())
    .then(authorization => {
      // La solicitud fue exitosa, puedes acceder a los datos de la respuesta en `data`
      return authorization;
    })
    .catch(error => {
      // Ocurrió un error al hacer la solicitud POST
      throw error;
    });
}

module.exports = validarToken;