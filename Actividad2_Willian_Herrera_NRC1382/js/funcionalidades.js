// Función para comparar dos números ingresados por el usuario
const compararNumeros = () => {
    // Obtener los valores de los campos de entrada y convertirlos a números
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    
    // Seleccionar el contenedor donde se mostrará el resultado
    const resultado = document.getElementById("resultado-comparacion");

    // Comparar los números y mostrar el resultado en el contenedor
    if (num1 > num2) {
        resultado.textContent = `El número mayor es ${num1}`;
    } else if (num2 > num1) {
        resultado.textContent = `El número mayor es ${num2}`;
    } else {
        resultado.textContent = "Ambos números son iguales.";
    }
};

// Función para mostrar el mes correspondiente al número ingresado
const mostrarMes = () => {
    // Obtener el valor del campo de entrada y convertirlo a un número entero
    const mes = parseInt(document.getElementById("mes").value);
    let mensaje; // Variable para almacenar el nombre del mes

    // Usar una estructura switch para determinar el nombre del mes
    switch (mes) {
        case 1: mensaje = "Enero"; break;
        case 2: mensaje = "Febrero"; break;
        case 3: mensaje = "Marzo"; break;
        case 4: mensaje = "Abril"; break;
        case 5: mensaje = "Mayo"; break;
        case 6: mensaje = "Junio"; break;
        case 7: mensaje = "Julio"; break;
        case 8: mensaje = "Agosto"; break;
        case 9: mensaje = "Septiembre"; break;
        case 10: mensaje = "Octubre"; break;
        case 11: mensaje = "Noviembre"; break;
        case 12: mensaje = "Diciembre"; break;
        default: mensaje = "Número no válido."; break; // Caso por defecto si el número no está entre 1 y 12
    }

    // Mostrar el resultado en una alerta
    alert(mensaje);
};

// Array para almacenar los nombres ingresados por el usuario
const nombres = [];

// Función para agregar nombres al array y mostrarlos dinámicamente
const agregarNombre = () => {
    // Obtener el valor del campo de entrada para el nombre
    const nombre = document.getElementById("nombre").value;

    // Validar que el campo no esté vacío
    if (nombre) {
        nombres.push(nombre); // Agregar el nombre al array
        // Crear una lista HTML con los nombres almacenados en el array
        const lista = nombres.map(n => `<li>${n}</li>`).join("");
        // Mostrar la lista en el contenedor correspondiente
        document.getElementById("lista-nombres").innerHTML = `<ul>${lista}</ul>`;
    }
};