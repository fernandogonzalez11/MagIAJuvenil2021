const https = require('https');
const chalk = require('chalk');

https.get('https://api.openweathermap.org/data/2.5/weather?q=Ecuador&appid=11c448f86b74b188858e94f4d92e0b52', res => {
    let info = '';
    res.on('data', chunk => {
        info += chunk;
    });

    res.on('end', () => {
        console.log(JSON.parse(info).weather);
    });
}).on('error', e => {
    console.error(chalk.red('[Error]'), e);
});