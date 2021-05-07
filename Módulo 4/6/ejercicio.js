const axios = require('axios').default;
/* Caso práctico
Utilizar las APIs para crear un programa que nos permita acceder a un edificio al mostrar
los datos de nuestra identificación, si los datos son correctos nos mostrará un mensaje
de que podemos pasar, de otra manera no nos dejará acceder */

const emplData = [
    {
        nombre: 'Luis',
        id: 'q8c7tqy8fy57b',
        foto: '2fdc2ff5-416f-42ee-9b40-d921ad57e343'
    }
];

const imgs = [
    { url: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Ben_Shapiro_2018.jpg' }
];

const urls = [
    // Detect
    'https://servicioface.cognitiveservices.azure.com/face/v1.0/detect',    
    // Verify
    'https://servicioface.cognitiveservices.azure.com/face/v1.0/verify'
];

function detect(call) {
    axios.post(urls[0], imgs[0], {
        headers: {
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key': '326d364a0fbe4a39998455172d1a3b46'
        } 
    })
        .then(({ data }) => {
            call(data[0].faceId);
        })
        .catch(console.error);
}

function verify(credData) {
    let data = {
        faceId1: emplData[0].foto,
        faceId2: credData
    };
    axios.post(urls[1], data, {
        headers: {
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key': '326d364a0fbe4a39998455172d1a3b46'
        }
    })
        .then(({ data }) => {
            if (data.isIdentical) console.log('Misma persona, puedes pasar.');
            else console.log('Las caras no son la misma, no puedes pasar.');
        })
        .catch(({ stack }) => console.error(stack));
}

detect(verify);