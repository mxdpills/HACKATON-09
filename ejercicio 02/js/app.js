const fraseElement = document.getElementById('frase');
const btnMostrar = document.getElementById('btnMostrar');

function obtenerFraseAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    return frases[indiceAleatorio];
}

window.onload = function () {
    fraseElement.textContent = obtenerFraseAleatoria();
};

btnMostrar.addEventListener('click', function() {
    fraseElement.textContent = obtenerFraseAleatoria();
    btnMostrar.textContent = 'Mostrar otra frase aleatoria'
});