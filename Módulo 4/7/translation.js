const { post } = require('axios').default;

const data = {
    url: 'https://api.cognitive.microsofttranslator.com/translate?' +
        'api-version=3.0&' +
        'to=es',
    body: [
        { Text: '火山を爆発させる' }
    ]
};

post(data.url, data.body, {
    headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': '58f9f4075c9c46bca61a78cfc71a45b6',
        'Ocp-Apim-Subscription-Region': 'southcentralus'
    }
}).then(({ data: [{ translations: [{ text }] }] }) => {
    console.log(text);
}).catch(({ stack }) => console.error(stack));
