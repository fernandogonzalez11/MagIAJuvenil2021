// true:  en_US //
// false: es_LA //
let lang = true;

// Los textos en inglés y español
const locales = {
    'en_US': {
        'topBar': [
            'The other funny',
            'Main Repo',
            'Module 3',
            'Show About Me',
            'More Info'
        ],
        'header': 'Welcome',
        'text': [
            'Hey there!',
            'This is one of the various webpages I\'ve over time',
            'Being honest, I was never focused on web development, but it is pretty fun when one starts :p',
            'This page includes <i>flexbox</i>, one of the things that struggle me the most (well, all web dev stuff struggles me lol)',
            'Mi humor is weird (blame Discord) and I tend to speak English a lot, so probs there\'s gonna be a lot of lol funny shit here xd<br>',
            'Yeah that was the about me',
            'ok gn',
            '- plont'
        ]
    },
    'es_LA': {
        'topBar': [
            'El otro funny',
            'Repo Principal',
            'Módulo 3',
            'Mostrar Sobre Mí',
            'Más Info'
        ],
        'header': 'Bienvenido',
        'text': [
            'Hola!',
            'Esta es una de las varias páginas web que he hecho a lo largo del tiempo',
            'La verdad, nunca me enfoqué en desarrollo de páginas web, pero sí es un tanto divertido hacerlo cuando uno empieza :p',
            'Esta página incluye <i>flexbox</i>, una de las cosas que más me cuesta en esto (bueno, todo web dev me cuesta lol)',
            'Mi humor es raro (culpo a Discord) y tiendo a hablar inglés mucho, entonces probs van a haber muchas cosas lol funny acá xd',
            'Sí eso era el about me',
            'ok gn',
            '- plont'
        ]
    }
};

// al clickear "Más Info"
function info() {
    lang ? Swal.fire('no xd') : Swal.fire('no lol');
} 

// muestra "Sobre Mí"
function aboutMe() {
    document.getElementById('parrafo1').innerHTML = lang ? locales['es_LA']['text'].join('<br>') : locales['en_US']['text'].join('<br>');
}

// Cambiar de lenguaje
function toggleLang() {
    lang = !lang; // Cambia lang al opuesto

    // TODO: trabajar con localStorage (luego)
    localStorage.setItem('lang', lang);
    console.log(localStorage.getItem('lang'));
    
    console.log('cambiado a', lang); // Debug log
    // Toma los locales
    const { topBar, header } = lang ? locales['es_LA'] : locales['en_US'];

    // Cambia el ícono
    let icon = document.getElementById('icon');
    icon.src = lang ? 'assets/taco.png' : 'assets/borgar.png';
    alt = lang ? 'english' : 'spanish';

    // Cambia los demás elementos
    const curElems = document.getElementsByClassName('topBarElem');
    for (i = 0; i < curElems.length; i++) {
        curElems[i].innerHTML = topBar[i];
    }

    document.getElementById('header1').innerHTML = header;
}