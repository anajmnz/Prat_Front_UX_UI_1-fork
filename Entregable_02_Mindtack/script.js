document.addEventListener("DOMContentLoaded", function () {
    const crearNotaBtn = document.getElementById("crear_nota"); 
    const crearNotaTexto = document.getElementById("crear-nota-texto"); 
    const containerNotas = document.getElementById("container-notas");

 
    // Crear una nueva nota de tipo texto
    crearNotaTexto.addEventListener("click", function () {
        window.location.href = "crear_nota.html";  
    });

    // Cargar y mostrar notas guardadas
    function cargarNotas() {
        // Obtener las notas del localStorage (si no hay, se usa un array vacío [])
        let notasGuardadas = JSON.parse(localStorage.getItem("notas")) || [];
        
        // Limpiar el contenedor de notas antes de mostrar las nuevas
        containerNotas.innerHTML = ""; 

        // Recorrer cada nota y crear su HTML
        notasGuardadas.forEach(nota => {
            const divNota = document.createElement("div");
            divNota.classList.add("nota"); // Añadir clase para editar en css 
            
            // Poner clases a los elementos
            divNota.innerHTML = `
                <h3 class="titulo-nota">${nota.titulo}</h3>
                <p class="contenido-nota">${nota.contenido.substring(0, 50)}...</p> 
                <button class="ver-nota-btn" onclick="verNota(${nota.id})">Ver Nota</button>
            `;

            // Agregar la nota al contenedor principal
            containerNotas.appendChild(divNota);
        });
    }

    // Función para ver la nota en editar-ver-nota.html
    window.verNota = function (id) {
        localStorage.setItem("notaSeleccionada", id);
        window.location.href = "editar-ver-nota.html";
    };
    
    cargarNotas(); // Llamamos a la función al cargar la página
});
