// Agregar un evento al formulario para manejar el envío
document.getElementById("registro-form").addEventListener("submit", (event) => {
    event.preventDefault(); // Evita que el formulario recargue la página al enviarse
  
    // Capturar los datos ingresados en el formulario
    const id = document.getElementById("id").value; // ID del usuario
    const cedula = document.getElementById("cedula").value; // Cédula del usuario
    const nombre = document.getElementById("nombre").value; // Nombres y apellidos del usuario
    const fecha = document.getElementById("fecha").value; // Fecha de nacimiento del usuario
    const ciudad = document.getElementById("ciudad").value; // Ciudad seleccionada
  
    // Crear un objeto que contenga los datos ingresados
    const registroActual = [{ id, cedula, nombre, fecha, ciudad }];
  
    // Guardar el registro actual en el almacenamiento local (localStorage)
    localStorage.setItem("registros", JSON.stringify(registroActual));
  
    // Abrir una nueva ventana para mostrar los datos registrados
    const nuevaVentana = window.open("", "_blank"); // Crear una nueva ventana o pestaña
    nuevaVentana.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8"> <!-- Codificación del documento -->
            <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Diseño responsivo -->
            <title>Datos Registrados</title> <!-- Título de la nueva ventana -->
            <link rel="stylesheet" href="css/general.css"> <!-- Vincular los estilos generales -->
        </head>
        <body>
            <h1>Datos Registrados</h1>
            <table> <!-- Tabla para mostrar los datos registrados -->
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Cédula</th>
                        <th>Nombre</th>
                        <th>Fecha de Nacimiento</th>
                        <th>Ciudad</th>
                    </tr>
                </thead>
                <tbody>
                    ${registroActual.map((registro) => ` <!-- Generar filas dinámicamente -->
                        <tr>
                            <td>${registro.id}</td>
                            <td>${registro.cedula}</td>
                            <td>${registro.nombre}</td>
                            <td>${registro.fecha}</td>
                            <td>${registro.ciudad}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </body>
        </html>
    `);
  
    // Limpiar los campos del formulario para preparar un nuevo registro
    document.getElementById("registro-form").reset();
  });  