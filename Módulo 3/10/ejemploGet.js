const axios = require('axios').default;
const chalk = require('chalk');

axios.get('http://localhost:8080')
    .then(res => {
        console.log(res.data);
    })
    .catch(e => {
        console.error(chalk.red('[Error]', e));
    });

axios.post('http://localhost:8080', {
    num1: 5,
    num2: 10
}).then(res => console.log(res.data)); // Sample, no va a servir si no se habilita en endpoint como POST