// ENCRIPTAR A BINARIO
function encriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muñeco = document.getElementById("muñeco");

  let textoCifrado = "";

  // Recorremos cada carácter del texto original
  for (let i = 0; i < texto.length; i++) {
    let codigoBinario = texto.charCodeAt(i).toString(2); // Convertimos a binario
    textoCifrado += codigoBinario + " "; // Añadimos el código binario y un espacio
  }

  if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado.trim(); // Eliminamos el espacio final extra
    tituloMensaje.textContent = "Texto encriptado con éxito";
    parrafo.textContent = "";
    muñeco.src = "./img/encriptado.jpg";
  } else {
    muñeco.src = "./img/muñeco.png";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent =
      "Ingresa el texto que deseas encriptar o desencriptar";
    swal("Ooops!", "Debes ingresar un texto", "warning");
  }
}

// DESENCRIPTAR DE BINARIO
function desencriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muñeco = document.getElementById("muñeco");

  // Validar si el texto no está vacío y no es el texto por defecto del placeholder
  if (texto.length !== 0 && texto !== "Ingresa el texto aquí") {
    let textoDesencriptado = "";

    // Separar el texto encriptado en binario por espacios
    let textoBinario = texto.split(" ");

    // Recorremos cada código binario y lo convertimos a texto
    for (let i = 0; i < textoBinario.length; i++) {
      let codigoDecimal = parseInt(textoBinario[i], 2); // Convertimos de binario a decimal
      textoDesencriptado += String.fromCharCode(codigoDecimal); // Convertimos de decimal a carácter
    }

    document.getElementById("texto").value = textoDesencriptado;
    tituloMensaje.textContent = "Texto desencriptado con éxito";
    parrafo.textContent = "";
    muñeco.src = "./img/desencriptado.jpg";
  } else {
    muñeco.src = "./img/muñeco.png";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent =
      "Ingresa el texto que deseas encriptar o desencriptar";
    swal("Ooops!", "Debes ingresar un texto", "warning");
  }
}

function limpiar() {
  let textarea = document.getElementById("texto");
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muñeco = document.getElementById("muñeco");

  if (textarea.value.trim() !== "") {
    textarea.value = ""; // Limpiar el contenido del textarea
    tituloMensaje.textContent = "Texto eliminado con éxito";
    parrafo.textContent = "";
    muñeco.src = "./img/muñeco.png"; // Puedes cambiar la imagen si es necesario
  } else {
    swal("Ooops!", "No hay texto para eliminar", "warning");
  }
}
