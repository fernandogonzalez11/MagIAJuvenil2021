const axios = require('axios').default;

const url = 'https://servicioface.cognitiveservices.azure.com/face/v1.0/detect?'+
            'returnFaceAttributes=age,gender,emotion',
    data = { url: 'https://images-na.ssl-images-amazon.com/images/I/B1CoKfSOJLS.jpg'};

axios.post(url, data, {
    headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': '326d364a0fbe4a39998455172d1a3b46'
    }
})
    .then(({ data }) => console.log(data))
    .catch(console.error);