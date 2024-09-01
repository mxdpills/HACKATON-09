document.addEventListener('DOMContentLoaded', function() {
    const tareaInput = document.getElementById('tareaInput');
    const agregarBtn = document.getElementById('agregarBtn');
    const listaTareas = document.getElementById('listaTareas');

    agregarBtn.addEventListener('click', function (){
        const tareaTexto = tareaInput.value.trim(); // nota personal: es value no ariaValueMax

        if(tareaTexto !== '') {

            const nuevoElemento = document.createElement('li');
            nuevoElemento.className = 'list-group-item d-flex justify-content-between align-items-center';
            nuevoElemento.textContent = tareaTexto;

            const eliminarBtn = document.createElement('button');
            eliminarBtn.className = 'btn btn-danger btn-sm';
            eliminarBtn.textContent = 'X';
            eliminarBtn.addEventListener('click', function () {
                listaTareas.removeChild(nuevoElemento);
            });

            nuevoElemento.appendChild(eliminarBtn);

            listaTareas.appendChild(nuevoElemento);


            tareaInput.value = '';
        } else {
            alert('Por favor, ingresa una tarea.'); //le agregué un alert por si las dudas
        }
    });
});
