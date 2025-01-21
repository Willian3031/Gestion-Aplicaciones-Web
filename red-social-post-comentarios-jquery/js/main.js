$(document).ready(() => {
    console.log("Aplicación de Red Social Cargada"); // Mensaje en la consola para indicar que la página ha cargado completamente
    renderizarPosts(); // Llama a la función para mostrar los posts almacenados en la página

     // Evento que se activa cuando el usuario escribe en el campo de filtro
    $('#filtrar-posts').on('input', () => {
        let filtro = $('#filtrar-posts').val().toLowerCase(); // Obtiene el valor ingresado y lo convierte a minúsculas para evitar diferencias de mayúsculas/minúsculas
        $('.post').each(function () { // Recorre todas las publicaciones existentes
            let titulo = $(this).find('h3').text().toLowerCase(); // Obtiene el texto del título del post y lo convierte a minúsculas
            $(this).toggle(titulo.includes(filtro)); // Muestra u oculta el post dependiendo si el título contiene el texto ingresado en el filtro
        });
    });
});
