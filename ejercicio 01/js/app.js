const btnMostrarOcultar = document.getElementById('btnMostrarOcultar');
const cuadrado = document.getElementById('cuadrado');

btnMostrarOcultar.addEventListener('click', function() {
    if (cuadrado.style.display === 'none') {
        cuadrado.style.display = 'block';
        btnMostrarOcultar.textContent = 'Ocultar Cuadrado';
        
    } else {
        cuadrado.style.display = 'none';
        btnMostrarOcultar.textContent = 'Mostrar Cuadrado';
    }
});