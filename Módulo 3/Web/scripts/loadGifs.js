// Lo que se debe realizar cuando los elementos de la página hayan cargado POR COMPLETO
// Esto añade los gifs de último, por que si no el tiempo de carga es ~7s y bien idiótico
window.addEventListener('load', () => {
    // Las tags de src y alt de los gifs
    const gifs = {
        sources: [
            'https://media1.tenor.com/images/6adcd6e8a1010c735b55b7f884529a10/tenor.gif',
            'https://media1.tenor.com/images/588a60edea3c19271b8b897cdd6cc3a2/tenor.gif',
            'https://media1.tenor.com/images/1cf3ff059b8813a6894fe52cedb7eb3a/tenor.gif'
        ],
        alts: [
            'epic embed win',
            'cirno torture',
            'epic embed fail'
        ]
    };
    
    // Los cambia acorde a las arrays
    const htmlGifs = document.getElementsByClassName('gif');
    for (let i = 0; i < htmlGifs.length; i++) {
        htmlGifs[i].src = gifs.sources[i];
        htmlGifs[i].alt = gifs.alts[i];
    }
});

