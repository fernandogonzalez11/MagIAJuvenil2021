const axios = require('axios').default;
const chalk = require('chalk');

axios.get('https://api.openweathermap.org/data/2.5/weather?q=Ecuador&appid=11c448f86b74b188858e94f4d92e0b52')
    .then(res => {
        console.log(res.data);
    })
    .catch(e => console.error(chalk.red('[Error]'), e));