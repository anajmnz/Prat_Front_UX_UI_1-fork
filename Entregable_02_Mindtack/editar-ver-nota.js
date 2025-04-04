document.addEventListener("DOMContentLoaded", function () {
    const contenedorNota = document.getElementById("nota");
const notaId = localStorage.getItem("notaSeleccionada");

//si la nota no existe/ da null:
if (!notaId) {
    contenedorNota.innerHTML = "<p>Error: No se encontró la nota.</p>";
    return; // Detiene la ejecución si no hay ID
}

let notasGuardadas = JSON.parse(localStorage.getItem("notas")) || [];
    let nota = notasGuardadas.find(n => n.id == notaId);

    if (!nota) {
        contenedorNota.innerHTML = "<p>Error: Nota existe la nota.</p>";
        return;
    }

//mostrar nota en el HTML
// si la nota existe: actualizar el HTML del contenedorNota con el h2 y el p

contenedorNota.innerHTML = `
    <h2>${nota.titulo}</h2>
    <p>${nota.contenido}</p>
`; 

});