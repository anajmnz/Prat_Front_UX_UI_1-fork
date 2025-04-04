document.addEventListener("DOMContentLoaded", function () {
    const guardarNotaBtn = document.getElementById("guardarNotaBtn");

    const containerNotas = document.getElementById("container-notas");

    
    //Picar botón guardar nota
    // 1. Guardar la nota ¿Dónde?¿Cómo?
    // 2. redirigir a página principal
    // No funcionaba porq el script se ejecutaba antes de que el botón existiera en el DOM
    guardarNotaBtn.addEventListener("click", function() {
        const titulo = document.getElementById("tituloNota").value.trim();
        const contenido = document.getElementById("contenidoNota").value.trim(); //el trim es para eliminar espacios

    
    // crear variable donde se recupera la lista de notas de localstorage, si no hay nada duevule null, 
    // Si es null asignar un array vacío []
    // JSON.parse(): Convierte el texto guardado en localStorage a un array de objetos JavaScript.
    let notasGuardadas = JSON.parse(localStorage.getItem("notas")) || [];

    //crear objeto nota
    const nuevaNota = {
        id: Date.now(), //para asignar un número único basado en la hora en la que se hace la nota
        titulo: titulo,
        contenido: contenido
    };

    // colocar la nota nueva al final del array de notasGuardads
    notasGuardadas.push(nuevaNota);

    //convertir a cadena json para poder acceder a las notas y guardarlas en localstorage
    localStorage.setItem("notas", JSON.stringify(notasGuardadas));

     // Redirigir a la página principal
     window.location.href = "index.html";

 
    

});
});
