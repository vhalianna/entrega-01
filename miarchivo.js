// Variable global para almacenar los certificados cargados
let certificadosCargados = [];

function validarCarga() {
  let nombre = document.getElementById("nombre").value;
  let tipoCertificado = document.getElementById("tipoCertificado").value;

  if (nombre === "") {
    alert("Por favor, ingresa un nombre antes de cargar el certificado.");
    return; // Detener la ejecución de la función si no se ingresó un nombre
  }

  if (tipoCertificado === "") {
    alert("Por favor, selecciona un tipo de certificado.");
    return; // Detener la ejecución de la función si no se seleccionó un tipo de certificado
  }

  if (tipoCertificado === "aprobacion") {
    cargarCertificado("Certificado de aprobación", nombre);
  } else if (tipoCertificado === "exposicion") {
    cargarCertificado("Certificado de exposición", nombre);
  } else if (tipoCertificado === "asistencia") {
    cargarCertificado("Certificado de asistencia", nombre);
  }

  mostrarCertificados();
}

function cargarCertificado(tipo, nombre) {
  let certificado = {
    tipo: tipo,
    nombre: nombre
  };

  // Agregar el certificado a la lista de certificados cargados
  certificadosCargados.push(certificado);

  // Mostrar mensaje de carga exitosa
  let mensaje = "¡Bien hecho, " + nombre + "! Has cargado un " + tipo + ".";
  document.getElementById("resultado").innerHTML = mensaje;
}

function mostrarCertificados() {
  // Obtener el elemento donde se mostrarán los certificados
  let certificadosContainer = document.getElementById("certificadosContainer");

  // Limpiar el contenido anterior del contenedor
  certificadosContainer.innerHTML = "";

  // Crear elementos HTML para mostrar los certificados
  for (let i = 0; i < certificadosCargados.length; i++) {
    let certificado = certificadosCargados[i];

    // Crear un elemento de lista <li> para cada certificado
    let certificadoItem = document.createElement("li");
    certificadoItem.textContent = certificado.tipo + " - " + certificado.nombre;

    // Agregar el elemento de lista al contenedor
    certificadosContainer.appendChild(certificadoItem);
  }
}
