const agregarComentario = (postIndex) => {
    let comentarioTexto = prompt("Ingrese su comentario:"); // Solicita al usuario que escriba un comentario
    if (comentarioTexto) { // Verifica que el usuario haya ingresado algo
        posts[postIndex].comentarios.push(comentarioTexto); // Agrega el comentario al array de comentarios del post correspondiente
        renderizarPosts(); // Actualiza la interfaz para mostrar el comentario agregado
    }
};

const editarComentario = (postIndex, commentIndex) => {
    // Muestra el comentario actual y permite editarlo en un cuadro de diálogo
    let nuevoComentario = prompt("Edite su comentario:", posts[postIndex].comentarios[commentIndex]);
    if (nuevoComentario) { // Si el usuario ingresó un nuevo comentario
        posts[postIndex].comentarios[commentIndex] = nuevoComentario; // Reemplaza el comentario antiguo con el nuevo
        renderizarPosts(); // Actualiza la interfaz con el comentario editado
    }
};

const eliminarComentario = (postIndex, commentIndex) => {
    // Pide confirmación antes de eliminar el comentario
    if (confirm("¿Seguro que quieres eliminar este comentario?")) { 
        posts[postIndex].comentarios.splice(commentIndex, 1); // Elimina el comentario del array
        renderizarPosts(); // Actualiza la interfaz para reflejar el cambio
    }
};
