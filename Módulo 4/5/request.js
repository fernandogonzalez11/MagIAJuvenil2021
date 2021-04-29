const { post } = require('axios').default;
const { stringify } = require('querystring');
const { red, green, magenta } = require('chalk');

/* Crear un programa utilizando Servicios Cognitivos de Azure,
que analize fotos en distintos horarios y nos diga el momento
en el que hay el menor número de gente */

let imgs = [
    'https://imagenes.milenio.com/10zznD-XQNjlZA_HzoB8aXyRRgs=/936x566/https://www.milenio.com/uploads/media/2021/03/26/metro-cdmx-cerrara-estaciones-linea.jpeg',
    'https://centrourbano.com/revista/wp-content/uploads/Metro_Medidas-anti-covid-735x400.jpg',
    'https://i.pinimg.com/originals/c4/88/23/c48823ec2c8f5594f72f8b2b157029fc.jpg', 
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Insurgentes_Sur_metro_station.jpg/1200px-Insurgentes_Sur_metro_station.jpg', 
    'https://fastly.4sqi.net/img/general/600x600/15982566_DFtpG9ChwzeLhPEbrW8tVUIwxJLmt7UEi3bITdTqMSA.jpg', 
    'https://i.pinimg.com/originals/0e/af/31/0eaf316649985512be0f28089098726b.jpg'
];
const query = stringify({
    visualFeatures: 'Description',
    details: 'Landmarks',
    language: 'es'
});
const url = `https://serviciovisionnorte.cognitiveservices.azure.com/vision/v3.0/analyze?${query}`;

function petition(i, callback) {
    const data = { url: imgs[i] };
    
    post(url, data, {
        headers: {
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key': '9f8839e9bd4e446c8d1bfad49bd6db72'
        }
    })
        .then(res => {
            callback(res.data.description.tags, i+1);
        })
        .catch(e => console.error(red('[Error]'), e.stack));
}

/**
 * @param {array} data The data, aka the description.tags
 * @param {number} num The number of the photo (i + 1)
 */
function printData(data, num) {
    if (data.includes('gente')) return console.log(green('Hay personas en la estación en la foto:'), num);
    else return console.log(magenta('No hay personas en la estación en la foto:'), num);
}

for (let i = 0; i < imgs.length; i++) {
    petition(i, printData);
}
