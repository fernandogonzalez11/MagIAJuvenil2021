const { post } = require('axios').default;

const url = 'https://api.cognitive.microsofttranslator.com/transliterate?'+
            'api-version=3.0&'+
            'language=ja&'+
            'fromScript=Jpan&'+
            'toScript=Latn';

const data = [
    { Text: '光る' } 
];

const opts = {
    headers: {
        'Content-Type':'application/json',
        'Ocp-Apim-Subscription-Key':'58f9f4075c9c46bca61a78cfc71a45b6',
        'Ocp-Apim-Subscription-Region':'southcentralus'
    }
};

post(url, data, opts).then(({data: { text }}) => console.log(text));