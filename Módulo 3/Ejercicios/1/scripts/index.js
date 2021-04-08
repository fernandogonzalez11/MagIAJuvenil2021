/**
 * Pequeña manipulación de DOM que muestra los elementos
 * Si el otro elemento ya está mostrándose, quitarlo y poner el que se pide
 * @param {string} id ID del Elemento DOM
 */
function toggleText(id) {
    let pasado = document.getElementById('pasado'),
        presente = document.getElementById('presente');
    switch (id) {
        case 'pasado': // Pasado
            // console.log(presente.style); // Debug log
            if (presente.style.display == 'flex') presente.style.display = 'none';
            pasado.style.display = 'flex';
            break;
        case 'presente':
            // console.log(pasado.style); // Debug log
            if (pasado.style.display == 'flex') pasado.style.display = 'none';
            presente.style.display = 'flex';
            break;
        default: // Solo debería ser 
            throw new Error('toggleText: ID Inválido');
    }
}