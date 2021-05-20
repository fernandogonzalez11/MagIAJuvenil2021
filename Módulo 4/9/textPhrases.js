const { post } = require('axios').default;
const { green } = require('chalk');

const data = {
    url: 'https://servicioanalisistexto.cognitiveservices.azure.com/text/analytics/v3.0/keyPhrases',
    body: {
        documents: [
            {
                id: '1', language: 'es',
                text: 'El día empieza con esa sensación de tristeza que siempre acompaña a las despedidas. ' +
                    'Hoy es nuestra última jornada en Morelia y, desde la terraza en la que disfrutamos ' +
                    'un café que nos ayude a despertar y respirar el aroma con el que la ciudad nos despiden.'
            },
            {
                id: '2', language: 'en',
                text: 'Now I cant really say too much on this topic without spoilers (which is an important thing ' +
                    'considering Persona 5 is a very lore heavy game), but holy shit, I dislike Morgana in the highest regard. ' +
                    'There is so much he does that nullifies any good he\'s done. For one, he acts condescending for literally ' +
                    'no reason, especially towards Ryuji, and he barely gets a smack on the wrists for it, he barely gets punished. ' +
                    'When Ryuji finally hits back with Futaba being a better navigator (which is just cold, hard fact) he runs away ' +
                    'like a baby. This leads into the Okumura arc, where he speaks for Haru alot, and acts like a dick towards the ' +
                    'Phantom Thieves as well, if he could just suck it up and apologized to Ryuji, there definitely would have been a ' +
                    'chance to save Okumura, but no, Morgana killed him over pettiness. (3) on TOP of this, his personality isn\'t the ' +
                    'greatest either outside of messing with Ryuji, when it isn;t that or Metaverse talk, it\'s always about how beautiful ' +
                    'Ann is. Another small thing he does is force you to sleep, in P3/P4 the MC thought they were tired and should sleep, ' +
                    'which was MUCH less annoying.'
            },
            {
                id: '3', language: 'ja',
                text: 'この情勢ならイベント延期は仕方ないですね。イベントは延期になったからというわけではないですが、東方虹龍洞は予定通り、' +
                    'ダウンロード版はsteamから5/4に発売予定ですので、よろしくお願いしますー！' 
            }
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
            .map((elem, i) => green(`Text #${i + 1}: `) + elem.keyPhrases.join(', '))
            .join('\n'));
    })
    .catch(console.error);