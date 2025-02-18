# Bienvenidos a mi proyecto Red Social

Este repositorio contiene una aplicación sencilla para gestionar publicaciones (posts) y comentarios utilizando jQuery. La idea es mostrar una lista de publicaciones, poder agregar nuevas, filtrarlas por título, así como añadir, editar y eliminar comentarios en cada publicación.

---

## Estructura del Proyecto

RED-SOCIAL-POST-COMENTARIOS-JQUERY 
── css 
│ └── style.css 
├── js │ 
├── comments.js 
│ ├── main.js 
│ └── posts.js 
├── index.html 
└── README.md


1. **css/style.css**  
   Contiene los estilos para la interfaz de la aplicación (botones, cajas de texto, fondos, etc.).

2. **js/comments.js**  
   Maneja las operaciones relacionadas con comentarios (agregar, editar y eliminar).  
   *En este ejemplo, se mostraron algunas funciones sueltas que podrían haberse integrado en este archivo.*  

3. **js/main.js**  
   Archivo de inicialización y configuración general. Maneja eventos del documento y coordinación entre los módulos de *posts* y *comments*.

4. **js/posts.js**  
   Gestiona la lógica principal de las publicaciones: agregar nuevos posts, renderizarlos en la página, vincular los comentarios, etc.

5. **index.html**  
   Archivo principal HTML que define la estructura de la aplicación. Contiene referencias a las hojas de estilo y a los scripts.

6. **README.md**  
   Este archivo, donde se describen los componentes, su instalación y uso.

---

## Tecnologías Utilizadas

- **HTML5** para la estructura de la página.
- **CSS3** para los estilos de la interfaz.
- **JavaScript (jQuery)** para la manipulación del DOM y la funcionalidad dinámica.

---

## Requisitos Previos

1. **Navegador Web**  
   Cualquier navegador moderno (Chrome, Firefox, Safari, Edge, etc.) soporta la ejecución de JavaScript y la visualización adecuada de HTML/CSS.

2. **Editor de Código** (Recomendado)  
   Para modificar o revisar los archivos fuente (`.js`, `.css`, etc.).

3. **Conexión a Internet** (Opcional)  
   Solo en caso de utilizar la versión CDN de jQuery tal como está en el proyecto (`https://code.jquery.com/jquery-3.6.0.min.js`).

---

## Pasos para Ejecutar la Aplicación

1. **Clonar o Descargar el Proyecto**  
   - Clona este repositorio o descarga el ZIP y descomprímelo en tu computadora.

2. **Abrir `index.html`**  
   - En tu navegador preferido, abre el archivo `index.html` para visualizar y probar la aplicación.

3. **Uso de la Aplicación**  
   - **Crear Post**: Ingresa el título y la descripción en el formulario y haz clic en **"Publicar"**.  
   - **Listar Publicaciones**: Las publicaciones se mostrarán en la sección de “Publicaciones”.  
   - **Filtrar Posts**: Usa el campo “Filtrar por título...” para buscar cualquier coincidencia en los títulos de las publicaciones.  
   - **Agregar Comentarios**: Cada publicación tendrá un botón **"Agregar Comentario"** que, al hacer clic, te pedirá el texto del comentario.  
   - **Editar Comentarios**: Junto a cada comentario encontrarás un botón **"Editar"** que te permitirá modificarlo.  
   - **Eliminar Comentarios**: El botón **"Eliminar"** borra un comentario tras confirmar la acción.

---

## Personalización

- **Cambiar estilos**: Edita `css/style.css` para adaptar colores, fuentes o distribuciones.
- **Modificar lógica**: Ajusta la manera en que se agregan, editan o eliminan publicaciones y comentarios en los archivos `posts.js` y `comments.js`.
- **Ampliar funcionalidades**:  
  - Integrar una base de datos para almacenar la información.  
  - Añadir sesiones de usuario o sistema de autenticación.  
  - Implementar likes o reacciones a cada publicación.

---

## Contribución

1. **Reportar Errores**  
   Abre un _issue_ en el repositorio para señalar bugs o problemas encontrados.

2. **Proponer Mejora**  
   Si deseas añadir nuevas funcionalidades, haz un *fork* del proyecto, crea una rama y envía un *pull request* con tus cambios.

---

## Autor

- **Desarrolladores**: 
*(Willian Herrera)*
**Contacto**: *(waherrera3@espe.edu.ec)*

*(Diana Chalco)*
**Contacto**: *(dcchalco@espe.edu.ec)*

*(Elsa Pilataxi)*
**Contacto**: *(ejpilataxi@espe.edu.ec)*
---

¡Gracias por visitar este proyecto de Red Social! Esperamos te sea útil para aprender y practicar conceptos básicos de JavaScript y jQuery.
