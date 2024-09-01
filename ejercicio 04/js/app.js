document.addEventListener('DOMContentLoaded', function () {
    const agregarBtn = document.getElementById('agregarBtn');
    const nombreInput = document.getElementById('nombreInput');
    const listaNombres = document.getElementById('listaNombres');
    const seleccionarBtn = document.getElementById('seleccionarBtn');

    agregarBtn.addEventListener('click', function () {
        const nombreTexto = nombreInput.value.trim();
        if (nombreTexto !== '') {
            const nuevoElemento = document.createElement('li');
            nuevoElemento.textContent = nombreTexto;
            nuevoElemento.className = 'nombre-item';
            listaNombres.appendChild(nuevoElemento);
            nombreInput.value = '';
        } else {
            alert('Por favor, ingresa un nombre de una persona o cosa'); //agregando un alert también
        }
    });

    // la función de selección aleatoria

    seleccionarBtn.addEventListener('click', function () {
        const items = listaNombres.querySelectorAll ('li');
        if (items.length > 0) {
            items.forEach(item => item.classList.remove('seleccionado'));

            const indiceAleatorio = Math.floor(Math.random() * items.length);
            const itemSeleccionado = items[indiceAleatorio];
            itemSeleccionado.classList.add('seleccionado');
        }else {
            alert ('No hay nombres para seleccionar') //agregando otro alert 
        }
    });
});

