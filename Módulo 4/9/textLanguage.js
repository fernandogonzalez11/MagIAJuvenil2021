const { post } = require('axios').default;
const { green } = require('chalk');

const data = {
    url: 'https://servicioanalisistexto.cognitiveservices.azure.com/text/analytics/v3.0/languages',
    body: {
        documents: [
            { id: '1', text: 'El día empieza con un vaso de jugo.' },
            { id: '2', text: 'The day starts with a glass of juice.' },
            { id: '3', text: '一日はグラスジュースと始まる。' }
        ]
    },
    opts: {
        headers: {
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key': '8b4c7829af844bc699425c01e131246a'
        }
    }
};

post(data.url, data.body, data.opts)
    .then(({ data: { documents } }) => {
        console.log(documents
            .map((elem, i) => green(`Language #${i + 1}: `) + elem.detectedLanguage.name)
            .join('\n'));
    })
    .catch(console.error);