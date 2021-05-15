const { post } = require('axios').default;

/****** ESCRIBE AQUÍ TU PREGUNTA ******/
const input = 'where is track 5';

// Strings de las acciones que puede realizar
const actions = [
    'Sube la escalera a tu derecha',            // Baño
    'Puedes dejar el equipaje en el área 2',    // Equipaje
    'Los policías se encuentran en el área 3',  // Policía
    'La pista 5 se encuentra en el área 3',     // Pista 5
    'Disculpa, no sé cómo ayudarte...'          // Default
];
// Los datos principales, con el URL, el cuerpo y los headers
const data = {
    url: ['https://api.cognitive.microsofttranslator.com/translate?',
        'api-version=3.0&',
        'to=es'],
    body: [{ text: input }],
    headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': '58f9f4075c9c46bca61a78cfc71a45b6',
        'Ocp-Apim-Subscription-Region': 'southcentralus'
    }
};

/**
 * Envía una petición para traducir la respuesta, y la muestra en consola
 * @param {string} action 
 */
function actionsTranslate(action) {
    data.url[2] = `to=${data.outputLang}`;
    post(data.url.join(''), [{ text: action }], {
        headers: data.headers
    }).then(({ data: [{ translations: [{ text }] }] }) => {
        console.log(text);
    }).catch(({ stack }) => console.error(stack));
}

// Hacer la petición con el input
post(data.url.join(''), data.body, {
    headers: data.headers
}).then(({ data: [{
    translations: [{ text }],
    detectedLanguage: { language }
}]}) => {
    // El lenguaje
    data.outputLang = language;

    // Revisa si el input incluye palabras clave, y llama a actionsTranslate() con la acción correspondiente
    // De otra manera llama a la función con el default
    text = text.toLowerCase();
    if (text.includes('baño')) actionsTranslate(actions[0]);
    else if (text.includes('equipaje')) actionsTranslate(actions[1]);
    else if (text.includes('policía')) actionsTranslate(actions[2]);
    else if (text.includes('pista 5')) actionsTranslate(actions[3]);
    else actionsTranslate(actions[4]);
}).catch(({ stack }) => console.error(stack));