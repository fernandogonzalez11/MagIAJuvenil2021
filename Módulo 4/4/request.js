const axios = require('axios').default;
const { stringify } = require('querystring');

// Data
const img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/President_Barack_Obama.jpg/1200px-President_Barack_Obama.jpg',
    body = { url: img },
    endpoint = 'https://serviciovisionnorte.cognitiveservices.azure.com/vision/v3.0/analyze?' +
        stringify({
            visualFeatures: 'Categories,Description,Color',
            details: 'Celebrities',
            language: 'es'
        });

// Petition
axios.post( endpoint, body,
    {
        headers: {
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key': '9f8839e9bd4e446c8d1bfad49bd6db72'
        }
    })
    // Respuesta
    .then(res => console.log(res.data.categories[0].detail.celebrities[0].name))
    .catch(console.log);
