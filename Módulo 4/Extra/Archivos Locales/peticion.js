const { post } = require('axios').default;
const { createReadStream } = require('fs');

// Datos de la petición (URL, cuerpo, headers)
const data = {
    url: 'https://serviciovisionnorte.cognitiveservices.azure.com/vision/v3.0/describe',
    body: createReadStream('./assets/Cirno.png'),
    opts: {
        headers: {
            'Content-Type': 'application/octet-stream',
            'Ocp-Apim-Subscription-Key': '9f8839e9bd4e446c8d1bfad49bd6db72'
        }
    }
};

// Hacemos la request con los datos
post(data.url, data.body, data.opts)
    // Puedes deconstruir en una función, yo siempre deconstruyo data
    .then(({ data }) => console.log(data))
    // Equivalente a .catch(e => console.error(e))
    .catch(console.error);