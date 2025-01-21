const agregarComentario = (postIndex) => {
    let comentarioTexto = prompt("Ingrese su comentario:");
    if (comentarioTexto) {
        posts[postIndex].comentarios.push(comentarioTexto);
        renderizarPosts();
    }
};

const editarComentario = (postIndex, commentIndex) => {
    let nuevoComentario = prompt("Edite su comentario:", posts[postIndex].comentarios[commentIndex]);
    if (nuevoComentario) {
        posts[postIndex].comentarios[commentIndex] = nuevoComentario;
        renderizarPosts();
    }
};

const eliminarComentario = (postIndex, commentIndex) => {
    if (confirm("¿Seguro que quieres eliminar este comentario?")) {
        posts[postIndex].comentarios.splice(commentIndex, 1);
        renderizarPosts();
    }
};
