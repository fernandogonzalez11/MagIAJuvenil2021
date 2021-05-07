const axios = require('axios').default;

const url = 'https://servicioface.cognitiveservices.azure.com/face/v1.0/verify',
    data = {
        faceId1: 'cb0fd77e-bcc5-44e7-8e4d-f9a91a7f6445',
        faceId2: 'f66c6bdb-d35e-416d-bf56-3f1ea776f323'
    };

axios.post(url, data, {
    headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': '326d364a0fbe4a39998455172d1a3b46'
    }
})
    .then(({ data }) => console.log(data))
    .catch(console.error);