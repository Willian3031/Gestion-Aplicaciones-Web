let posts = []; // Array que almacena los posts junto con sus comentarios

// Función para agregar un nuevo post
const agregarPost = () => {
    let titulo = $('#titulo').val().trim(); // Obtiene y limpia el valor del título
    let descripcion = $('#descripcion').val().trim(); // Obtiene y limpia el valor de la descripción
    let fecha = new Date().toLocaleDateString(); // Obtiene la fecha actual

    if (titulo && descripcion) { // Verifica que ambos campos tengan contenido
        let nuevoPost = { titulo, descripcion, fecha, comentarios: [] }; // Crea un objeto con los datos del post
        posts.push(nuevoPost); // Agrega el post al array
        $('#titulo').val(''); // Limpia el campo del título
        $('#descripcion').val(''); // Limpia el campo de descripción
        renderizarPosts(); // Llama a la función para actualizar la interfaz
    } else {
        alert("Por favor, ingrese título y descripción"); // Mensaje de alerta si faltan datos
    }
};

// Función para renderizar los posts y comentarios
const renderizarPosts = () => {
    let $lista = $('#lista-posts'); // Obtiene el contenedor de los posts
    $lista.empty(); // Borra el contenido previo antes de volver a renderizar

    posts.forEach((post, index) => { // Recorre todos los posts existentes
        let $postDiv = $('<div></div>').addClass('post'); // Crea un div para el post
        let $titulo = $('<h3></h3>').text(post.titulo); // Crea el elemento de título
        let $descripcion = $('<p></p>').text(post.descripcion); // Crea el elemento de descripción
        let $fecha = $('<small></small>').text(`Publicado el: ${post.fecha}`); // Muestra la fecha de publicación
        let $comentariosDiv = $('<div></div>').addClass('comentarios'); // Contenedor para los comentarios

        // Renderizar comentarios
        post.comentarios.forEach((comentario, commentIndex) => {
            let $comentarioDiv = $('<div></div>').addClass('comentario-item'); // Contenedor de cada comentario
            let $comentarioTexto = $('<p></p>').text(comentario); // Muestra el comentario

            // Botón para editar comentarios
            let $editarBtn = $('<button></button>').text('Editar').on('click', function () {
                let nuevoComentario = prompt("Edite su comentario:", posts[index].comentarios[commentIndex]);
                if (nuevoComentario) { // Si el usuario ingresó un nuevo comentario
                    posts[index].comentarios[commentIndex] = nuevoComentario; // Se actualiza el comentario
                    renderizarPosts(); // Refresca la interfaz después de editar
                }
            });

            // Botón para eliminar comentarios
            let $eliminarBtn = $('<button></button>').text('Eliminar').on('click', function () {
                if (confirm("¿Seguro que quieres eliminar este comentario?")) { // Pide confirmación antes de eliminar
                    posts[index].comentarios.splice(commentIndex, 1); // Se elimina el comentario del array
                    renderizarPosts(); // Refresca la interfaz después de eliminar
                }
            });

            // Contenedor para los botones
            let $botonesDiv = $('<div></div>').addClass('botones-comentario');
            $botonesDiv.append($editarBtn, $eliminarBtn);

            $comentarioDiv.append($comentarioTexto, $botonesDiv); // Agrega el comentario y sus botones
            $comentariosDiv.append($comentarioDiv); // Agrega el comentario a la lista de comentarios
        });

        // Botón para agregar comentario
        let $botonComentario = $('<button></button>')
            .addClass('agregar-comentario')
            .text('Agregar Comentario')
            .on('click', function () {
                let nuevoComentario = prompt("Ingrese su comentario:");
                if (nuevoComentario) { // Si el usuario ingresó un comentario
                    posts[index].comentarios.push(nuevoComentario); // Se guarda en el array
                    renderizarPosts(); // Se actualiza la interfaz
                }
            });

          // Agregar todos los elementos al post
        $postDiv.append($titulo, $descripcion, $fecha, $comentariosDiv, $botonComentario);
        $lista.append($postDiv);  // Agrega el post al contenedor de publicaciones
    });

    console.log("Posts renderizados:", posts); // Mensaje en la consola para depuración
};

// Evento para agregar un nuevo post al hacer clic en el botón "Publicar"
$('#agregar-post').on('click', agregarPost);

// Renderizar los posts al cargar la página
renderizarPosts();
