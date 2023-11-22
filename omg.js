// Función para generar la tabla de verdad
function tabla() {
    var input = document.getElementById('inputField').value;
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = ''; // Limpiar la salida anterior

    if (input.length === 0) {
        alert("El campo está vacío. Por favor, ingrese al menos una variable.");
    } else {
        // Lógica para generar la tabla de verdad y mostrar los resultados
        // ...

        // Ejemplo: Mostrar un resultado
        var resultText = document.createTextNode("Función: " + transformacion(input).toUpperCase());
        outputDiv.appendChild(resultText);
    }
}

// Función de ayuda
function ayuda() {
    // Lógica de tu función de ayuda
    // ...
}

// Función de transformación
function transformacion(funcion) {
    // Lógica de tu función de transformación
    // ...

    // Ejemplo: Transformación simple
    return funcion.toUpperCase();
}

// Puedes agregar más funciones y lógica según sea necesario

// Ejemplo: Crear un botón y asignar funciones a eventos
var btnEnviar = document.createElement("button");
btnEnviar.appendChild(document.createTextNode("Enviar"));
btnEnviar.onclick = tabla;

var btnAyuda = document.createElement("button");
btnAyuda.appendChild(document.createTextNode("Ayuda"));
btnAyuda.onclick = ayuda;

// Crear un campo de entrada
var inputField = document.createElement("input");
inputField.setAttribute("type", "text");
inputField.setAttribute("placeholder", "Ingrese una función booleana");
inputField.setAttribute("id", "inputField");

// Crear un contenedor para la salida
var outputDiv = document.createElement("div");
outputDiv.setAttribute("id", "output");

// Añadir elementos al body
document.body.appendChild(inputField);
document.body.appendChild(btnEnviar);
document.body.appendChild(btnAyuda);
document.body.appendChild(outputDiv);
