// true: es_LA //
// false:  en_US //

// Envía lenguaje predeterminado si no hay
if (!localStorage.getItem('lang')) localStorage.setItem('lang', true);
// Luego guarda el valor
let lang = JSON.parse(localStorage.getItem('lang'));

// Funciones que deben realizarse cuando la página (empiece) a cargar
window.onload = () => {
    loadStart();
    aboutMe();
};

// Los textos en inglés y español
const locales = {
    'en_US': {
        'icon': 'assets/borgar.png',
        'topBar': [
            'The other funny',
            'Main Repo',
            'Module 3',
            'Toggle About Me',
            'More Info'
        ],
        'header': 'Welcome',
        'text': [
            'Hey there!',
            'This is one of the various webpages I\'ve over time',
            'Being honest, I was never focused on web development, but it is pretty fun when one starts :p',
            'This page includes <i>flexbox</i>, one of the things that struggle me the most (well, all web dev stuff struggles me lol)',
            'Mi humor is weird (blame Discord) and I tend to speak English a lot (you can change language with the <img id="icon" type="image/png" src="assets/borgar.png" alt="español" onclick="toggleLang()">), so probs there\'s gonna be a lot of lol funny shit here xd<br>',
            'Yeah that was the about me',
            'ok gn',
            '- plont'
        ]
    },
    'es_LA': {
        'icon': 'assets/taco.png',
        'topBar': [
            'El otro funny',
            'Repo Principal',
            'Módulo 3',
            'Switch Sobre Mí',
            'Más Info'
        ],
        'header': 'Bienvenido',
        'text': [
            'Hola!',
            'Esta es una de las varias páginas web que he hecho a lo largo del tiempo',
            'La verdad, nunca me enfoqué en desarrollo de páginas web, pero sí es un tanto divertido hacerlo cuando uno empieza :p',
            'Esta página incluye <i>flexbox</i>, una de las cosas que más me cuesta en esto (bueno, todo web dev me cuesta lol)',
            'Mi humor es raro (culpo a Discord) y tiendo a hablar inglés mucho (puedes cambiar lenguaje con el <img id="icon" type="image/png" src="assets/taco.png" alt="español" onclick="toggleLang()">), entonces probs van a haber muchas cosas lol funny acá xd<br>',
            'Sí eso era el about me',
            'ok gn',
            '- plont'
        ]
    }
};

function loadStart() {
    // Los elementos que se ocupan según los locales
    const { topBar, header, icon } = lang ? locales['es_LA'] : locales['en_US'];

    // Cambia el ícono (taco/borgar)
    let curIcon = document.getElementById('icon');
    curIcon.src = icon;
    // ...y su alt
    alt = lang ? 'english' : 'spanish';

    // El header
    document.getElementById('header1').innerHTML = header;

    // Añade los elementos del topBar ordenadamente
    let topBarElems = document.getElementsByClassName('topBarElem');
    for (let i = 0; i < topBarElems.length; i++) {
        topBarElems[i].innerHTML = topBar[i];
    }
    // Imprime
    console.log('Loaded elements in', lang ? 'Spanish' : 'English');
}

// al clickear "Más Info"
function info() {
    console.log(lang);
    lang ? Swal.fire({
        text: 'no xd',
        animation: false
    }) : Swal.fire({
        text: 'no lol',
        animation: false
    });
} 

// muestra "Sobre Mí"
function aboutMe() {
    // El párrafo como DOM
    let curParrafo = document.getElementById('parrafo1');
    // Si tiene algo, esconderlo (quitarle el texto)
    if (curParrafo.innerHTML) curParrafo.innerHTML = '';
    // Si no, añadirlo según el locale
    else lang ?
        curParrafo.innerHTML = locales['es_LA']['text'].join('<br>') :
        curParrafo.innerHTML = locales['en_US']['text'].join('<br>');
}

// Cambiar de lenguaje
function toggleLang() {
    lang = !lang; // Cambia lang al opuesto

    // Luego lo guarda a localStorage
    localStorage.setItem('lang', lang);
    
    // Imprime cambio
    console.log('Changed elements to', lang ? 'Spanish' : 'English');

    // Toma los locales
    const { topBar, header, text } = lang ? locales['es_LA'] : locales['en_US'];

    // Cambia el ícono
    let icon = document.getElementById('icon');
    icon.src = lang ? 'assets/taco.png' : 'assets/borgar.png';
    alt = lang ? 'english' : 'spanish';

    // Cambia el topbar
    const curElems = document.getElementsByClassName('topBarElem');
    for (i = 0; i < curElems.length; i++) {
        curElems[i].innerHTML = topBar[i];
    }

    // Cambia el header
    document.getElementById('header1').innerHTML = header;
    
    // Cambia el párrafo (solo si ya se abrió)
    const parrafo = document.getElementById('parrafo1');
    if(parrafo.innerHTML) parrafo.innerHTML = text.join('<br>');
}