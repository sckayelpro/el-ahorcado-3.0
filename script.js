// variables que contienen elementos del html
const palabra = document.getElementById("palabra");
const letrasContainer = document.getElementById("letras-container");
const buttonPalabra = document.getElementById("button-palabra");
const buttonComparar = document.getElementById("button-comparar");
const letrasInputEscritas = document.getElementsByClassName("letras-input");
const letrasInputComparar = document.getElementsByClassName("comparar-input");
const attemptsRemaining = document.querySelector("#attempts-remaining");
const imagenAhorcado0 = document.getElementById("ahorcado-0");
const imagenAhorcado1 = document.getElementById("ahorcado-1");
const imagenAhorcado2 = document.getElementById("ahorcado-2");
const imagenAhorcado3 = document.getElementById("ahorcado-3");
const imagenAhorcado4 = document.getElementById("ahorcado-4");
const imagenAhorcado5 = document.getElementById("ahorcado-5");
const imagenAhorcado6 = document.getElementById("ahorcado-6");
const imagenAhorcado7 = document.getElementById("ahorcado-7");
const imagenAhorcado8 = document.getElementById("ahorcado-8");
const imagenAhorcado9 = document.getElementById("ahorcado-9");
const imagenAhorcado10 = document.getElementById("ahorcado-10");
const imagenAhorcado11 = document.getElementById("ahorcado-11");
const imagenAhorcado12 = document.getElementById("ahorcado-12");

// variables que contienen a los botones de modo de juego
const easy = document.getElementById("easy");
const medium = document.getElementById("medium");
const hard = document.getElementById("hard");
const extreme = document.getElementById("extreme");
const modoSeleccionadoVar = document.querySelector("#modo-seleccionado");
const aleatorio = document.getElementById("aleatorio");

// variables container
const modoDeJuegoContainer = document.getElementById("modo-de-juego-container");
const palabraContainer = document.getElementById("palabra-container");

// variables contadores
var contador = 0;
var contadorClicks = 0;
var attempts = 0;
var comprobaciones = 0;

const letrasUsadas = document.getElementById("letras-usadas");
let letras = "";

function mostrarLetra(event) {
  if (contadorClicks >= attempts) {
    document.removeEventListener("keydown", mostrarLetra);
    return;
  }
  const letra = event.key;
  letras += letra + " ";
  letrasUsadas.textContent = "Letras Usadas: " + letras.toUpperCase();
}

// Evento click de los botones
easy.addEventListener("click", function () {
  palabra.value = "";
  modoSeleccionadoVar.id = this.id;
  attempts = 10;
  modoSeleccionado();
  palabra.style.display = "inline";
  buttonPalabra.style.display = "inline-block";
  // Muestra los intentos iniciales
  attemptsRemaining.innerHTML = `Intentos restantes: ${attempts}`;
  imagenAhorcado12.style.display = "inline";
  alert(
    "Haz seleccionado el modo fácil, puedes elegir 10 letras, antes de adivinar la palabra o frase"
  );
});
medium.addEventListener("click", function () {
  palabra.value = "";
  modoSeleccionadoVar.id = this.id;
  attempts = 7;
  modoSeleccionado();
  palabra.style.display = "inline";
  buttonPalabra.style.display = "inline-block";
  // Muestra los intentos iniciales
  attemptsRemaining.innerHTML = `Intentos restantes: ${attempts}`;
  imagenAhorcado9.style.display = "inline";

  alert(
    "Haz seleccionado el modo medio, puedes elegir 7 letras, antes de adivinar la palabra o frase"
  );
});
hard.addEventListener("click", function () {
  palabra.value = "";
  modoSeleccionadoVar.id = this.id;
  attempts = 5;
  modoSeleccionado();
  palabra.style.display = "inline";
  buttonPalabra.style.display = "inline-block";
  // Muestra los intentos iniciales
  attemptsRemaining.innerHTML = `Intentos restantes: ${attempts}`;
  imagenAhorcado8.style.display = "inline";
  alert(
    "Haz seleccionado el modo difícil, puedes elegir 5 letras, antes de adivinar la palabra o frase"
  );
});
extreme.addEventListener("click", function () {
  palabra.value = "";
  modoSeleccionadoVar.id = this.id;
  attempts = 3;
  modoSeleccionado();
  palabra.style.display = "inline";
  buttonPalabra.style.display = "inline-block";
  // Muestra los intentos iniciales
  attemptsRemaining.innerHTML = `Intentos restantes: ${attempts}`;
  imagenAhorcado5.style.display = "inline";
  alert(
    "Haz seleccionado el modo extreme, puedes elegir 3 letras, antes de adivinar la palabra o frase"
  );
});
aleatorio.addEventListener("click", function () {
  modoSeleccionadoVar.id = this.id;
  // imprime una palabra aleatoria, como "pájaro"
  const palabraRandom = generateRandomWord();
  palabra.value = palabraRandom;
  attempts = 10;
  palabra.style.display = "inline";
  buttonPalabra.style.display = "inline-block";
  // Muestra los intentos iniciales
  easy.style.display = "none";
  medium.style.display = "none";
  hard.style.display = "none";
  extreme.style.display = "none";
  aleatorio.style.display = "none";
  palabra.style.display = "none";
  buttonPalabra.style.display = "none";
  attemptsRemaining.style.display = "block";
  buttonComparar.style.display = "inline-block";
  attemptsRemaining.innerHTML = `Intentos restantes: ${attempts}`;
  imagenAhorcado12.style.display = "inline";

  letrasContainer.innerHTML = "";
  var letras = palabra.value.split("");
  // Bucle para crear los input para comparar
  for (var i = 0; i < letras.length; i++) {
    const inputComparar = document.createElement("input");
    inputComparar.className = "comparar-input";
    inputComparar.maxLength = "1";
    inputComparar.value = letras[i].toUpperCase();
    letrasContainer.appendChild(inputComparar);
    inputComparar.addEventListener("keyup", function () {
      inputComparar.value = inputComparar.value.toUpperCase();
    });
    const letrasComparar = document.getElementsByClassName("comparar-letras");
    if (palabra.value.indexOf(" ") !== -1) {
      for (var k = 0; k < letrasComparar.length; k++) {
        if (letrasComparar[k].value === " ") {
          letrasComparar[k].style.visibility = "hidden";
        }
      }
    }
  }
  // Bucle para crear los input para escribir
  for (var j = 0; j < letras.length; j++) {
    const inputEscribir = document.createElement("input");
    inputEscribir.className = "letras-input";
    inputEscribir.maxLength = "1";
    inputEscribir.value = letras[j].toUpperCase();
    letrasContainer.appendChild(inputEscribir);
    inputEscribir.addEventListener("keyup", function () {
      inputEscribir.value = inputEscribir.value.toUpperCase();
    });
    const letrasInput = document.getElementsByClassName("letras-input");
    if (palabra.value.indexOf(" ") !== -1) {
      for (var k = 0; k < letrasInput.length; k++) {
        if (letrasInput[k].value === " ") {
          letrasInput[k].style.visibility = "hidden";
        }
      }
    }
    inputEscribir.value = "";
  }
  letrasUsadas.readOnly = true; // Establecer como solo lectura

  document.addEventListener("keydown", mostrarLetra);
  presionarLetra();
  clickLetrasBotones();
});
function generateRandomWord() {
  // Una lista de palabras que se pueden elegir
  const words = [
    "sueño",
    "mariposa",
    "destello",
    "sol",
    "tigre",
    "caracol",
    "poema",
    "mar",
    "enredado",
    "ciervo",
    "grano",
    "elefante",
    "tren",
    "verde",
    "tijera",
    "piedra",
    "cintura",
    "cabeza",
    "vientre",
    "dedos",
    "ave",
    "ojo",
    "odio",
    "nariz",
    "boca",
    "humano",
    "pie",
    "rodilla",
    "espalda",
    "pecho",
    "muslo",
    "pierna",
    "tobillo",
    "tallo",
    "dedo",
    "pulgar",
    "indicar",
    "medio",
    "anular",
    "meñique",
    "cadera",
    "cuello",
    "mente",
    "frente",
    "oreja",
    "ceja",
    "labio",
    "diente",
    "lengua",
    "barbilla",
    "hueso",
    "masa",
    "grasa",
    "piel",
    "cabello",
    "uña",
    "sangre",
    "nervio",
    "cerebro",
    "carrosa",
    "riña",
    "franco",
    "pluma",
    "estofado",
    "intestino",
    "luna",
    "aguja",
    "vela",
    "huevo",
    "planta",
    "flor",
    "plantilla",
    "gato",
    "perro",
    "mono",
    "conejo",
    "zorro",
    "sapo",
    "lluvia",
    "nube",
    "artillero",
    "brillar",
    "sumar",
    "guitarra",
    "travieso",
    "alboroto",
    "globo",
    "Abismo",
    "Alfombra",
    "Andamio",
    "Anillo",
    "Anzuelo",
    "Aparador",
    "Arco",
    "Navidad",
    "Asiento",
    "Atardecer",
    "Aurora",
    "cofre",
    "Bolsa",
    "Bolsillo",
    "Bala",
    "Broche",
    "Brujo",
    "Bufanda",
    "Bolsa",
    "Caja",
    "herramientas",
    "Caja",
    "carne",
    "Cama",
    "Cantar",
    "Cangrejo",
    "Capa",
    "Caramelo",
    "Caramelo",
    "Carpintero",
    "Casa",
    "Cepillo",
    "Chaleco",
    "cepillo",
    "Cinta",
    "Cinta",
    "Cisne",
    "Clavo",
    "Colgador",
    "Concha",
    "Cuchillo",
    "mesa",
    "luz",
    "levadura",
    "casa",
    "pelo",
    "pato",
    "pez",
    "perdido",
    "ojos",
    "relojero",
    "planeta",
    "libro",
    "piso",
    "lago",
    "aire",
    "caja",
    "trazo",
    "silla",
    "sabor",
    "agua",
    "mano",
    "arena",
    "meses",
    "plata",
    "panza",
    "calor",
    "horno",
    "papel",
    "techo",
    "nieve",
    "puerta",
    "manto",
    "viento",
    "vida",
    "plato",
    "cuerpo",
    "mar",
    "moto",
    "cielo",
    "jardinero",
    "demonio",
    "flores",
    "campo",
    "carta",
    "carta",
    "carnicero",
    "gusano",
    "celeste",
    "playa",
    "hombre",
    "piedras",
    "cerdo",
    "nido",
    "cama",
    "olor",
    "camino",
    "hojas",
    "juego",
    "taza",
    "piso",
    "zapato",
    "llave",
    "campana",
    "tiempo",
    "mundo",
    "bomba",
    "escoba",
    "frito",
    "cuchara",
    "risa",
    "verano",
    "llorar",
    "patas",
    "humo",
    "naranja",
    "sagrado",
    "espejo",
    "lapicero",
    "pelota",
    "luz",
    "queso",
    "vaca",
    "rojo",
    "banco",
    "rosa",
    "bebe",
    "zapatilla",
    "bandera",
    "brillo",
    "azul",
    "palma",
    "ciudad",
    "coco",
    "gusano",
    "comida",
    "trigo",
    "abeja",
    "mosca",
    "flaco",
    "lindo",
    "calle",
    "hermano",
    "hoja",
    "dulce",
    "seco",
    "bruja",
    "marte",
    "ola",
    "chico",
    "cartulina",
    "viejo",
    "cambio",
    "pelo",
    "cocina",
    "paseo",
    "anguila",
    "triturar",
    "rana",
    "gallina",
    "cerro",
    "bicho",
    "pequeño",
    "tierra",
    "caballo",
    "oso",
    "manzana",
    "chocolate",
    "chimenea",
    "pistola",
    "gris",
    "sabana",
    "nuez",
    "sonrisa",
    "soltero",
    "palo",
    "vuelo",
    "roedor",
    "mañana",
    "garra",
    "hojas",
    "mariposa",
    "hueso",
    "alas",
    "pulgar",
    "flores",
    "cactus",
    "muñeca",
    "peluche",
    "dormir",
    "pino",
    "serpiente",
    "maleta",
    "cansado",
    "nadador",
    "circular",
    "guitarra",
    "corona",
    "diente",
    "dinero",
    "tarde",
    "espejo",
    "cosecha",
    "reloj",
    "grado",
    "carnaval",
    "sombrero",
    "mueble",
    "flauta",
    "confianza",
    "piano",
    "ciclismo",
    "planta",
    "futuro",
    "violeta",
    "baile",
    "escalera",
    "cantidad",
    "cabeza",
    "fuego",
    "piso",
    "sonido",
    "viaje",
    "vuelta",
    "celular",
    "elefante",
    "llama",
    "amigo",
    "navaja",
    "cuaderno",
    "llamada",
    "abuela",
    "metro",
    "mentor",
    "chimenea",
    "perla",
    "lluvioso",
    "abuelo",
    "barba",
    "semilla",
    "brilloso",
    "antiguo",
    "alambre",
    "sorpresa",
    "caminar",
    "botella",
    "batalla",
    "abogado",
    "hueco",
    "caramelo",
    "desierto",
    "cactus",
    "gigante",
    "rinoceronte",
    "patio",
    "bastante",
    "pantalla",
    "salto",
    "patinar",
    "madera",
    "cantante",
    "futbol",
    "soledad",
    "velocidad",
    "gaviota",
    "hospital",
    "colegio",
    "mañanero",
    "avestruz",
    "fresco",
    "polvo",
    "clavo",
    "jirafa",
    "trebol",
    "mariposa",
    "musica",
    "violencia",
    "barco",
    "velero",
    "ambulancia",
    "alfombra",
    "oratoria",
    "lanzar",
    "buzon",
    "pulgar",
    "moneda",
    "cometa",
    "rodilla",
    "pezon",
    "zapatero",
    "llanura",
    "escalera",
    "sonrisa",
    "bolsa",
    "felicidad",
    "televisor",
    "enano",
    "sudadera",
    "cara",
    "amuleto",
    "fantasma",
    "dama",
    "ladrar",
    "rata",
    "lechuga",
    "silencio",
    "pescado",
    "altura",
    "laguna",
    "tambor",
    "comida",
    "mago",
    "banco",
    "nido",
    "frijol",
    "drama",
    "mermelada",
    "necesidad",
    "chorizo",
    "semana",
    "auriculares",
    "resaca",
    "pastel",
    "apio",
    "tablero",
    "frutilla",
    "celebrar",
    "lima",
    "tequila",
    "pimienta",
    "pulsera",
    "soldado",
    "campanilla",
    "joya",
    "banqueta",
    "chaqueta",
    "telarana",
    "cuero",
    "varios",
    "basta",
    "pasillo",
    "silla",
    "mentira",
    "cobija",
    "redondo",
    "postre",
    "llave",
    "mechero",
    "heroico",
    "destino",
    "anillo",
    "valla",
    "alimentar",
    "pintar",
    "semestre",
    "invitar",
    "destornillador",
    "disfraz",
    "bolsillo",
    "moto",
    "salsa",
    "volumen",
  ];

  // Obtén un número aleatorio entre 0 y la longitud de la lista de palabras
  const randomIndex = Math.floor(Math.random() * words.length);

  // Devuelve la palabra aleatoria
  return words[randomIndex];
}
// Funcion modo seleccionado
function modoSeleccionado() {
  // Cuanto se da click empieza el juego
  buttonPalabra.addEventListener("click", function () {
    dividirPalabra();
    easy.style.display = "none";
    medium.style.display = "none";
    hard.style.display = "none";
    extreme.style.display = "none";
    aleatorio.style.display = "none";
    palabra.style.display = "none";
    buttonPalabra.style.display = "none";
    attemptsRemaining.style.display = "block";
    buttonComparar.style.display = "inline-block";

    document.addEventListener("keydown", mostrarLetra);
  });
}

// Convierte la palabra en mayúsculas
palabra.addEventListener("keyup", function () {
  palabra.value = palabra.value.toUpperCase();
});

// Funcion para dividir las palabras
function dividirPalabra() {
  letrasContainer.innerHTML = "";
  const palabraValue = palabra.value;
  var letras = palabraValue.split("");
  // Bucle para crear los input para comparar
  for (var i = 0; i < letras.length; i++) {
    const inputComparar = document.createElement("input");
    inputComparar.className = "comparar-input";
    inputComparar.maxLength = "1";
    inputComparar.value = letras[i].toUpperCase();
    letrasContainer.appendChild(inputComparar);
    inputComparar.addEventListener("keyup", function () {
      inputComparar.value = inputComparar.value.toUpperCase();
    });
    const letrasComparar = document.getElementsByClassName("comparar-letras");
    if (palabraValue.indexOf(" ") !== -1) {
      for (var k = 0; k < letrasComparar.length; k++) {
        if (letrasComparar[k].value === " ") {
          letrasComparar[k].style.visibility = "hidden";
        }
      }
    }
  }
  // Bucle para crear los input para escribir
  for (var j = 0; j < letras.length; j++) {
    const inputEscribir = document.createElement("input");
    inputEscribir.className = "letras-input";
    inputEscribir.id = `letras-input-${j}`;
    inputEscribir.maxLength = "1";
    inputEscribir.value = letras[j].toUpperCase();
    inputEscribir.readOnly = true;
    letrasContainer.appendChild(inputEscribir);
    inputEscribir.addEventListener("keyup", function () {
      inputEscribir.value = inputEscribir.value.toUpperCase();
    });
    const letrasInput = document.getElementsByClassName("letras-input");
    if (palabraValue.indexOf(" ") !== -1) {
      for (var k = 0; k < letrasInput.length; k++) {
        if (letrasInput[k].value === " ") {
          letrasInput[k].style.visibility = "hidden";
        }
      }
    }
    inputEscribir.value = "";
  }

  presionarLetra();
  clickLetrasBotones();
}
// Funcion para que aparezcan las letras cuando se da click a una tecla
function presionarLetra() {
  document.addEventListener("keyup", function (event) {
    contadorClicks++;
    mostrarImagen();
    if (attempts - contadorClicks >= 0) {
      attemptsRemaining.innerHTML = `Intentos restantes: ${
        attempts - contadorClicks
      }`;
    } else {
      attemptsRemaining.innerHTML = `Intentos restantes: 0`;
    }
    // Obtenemos el valor de la tecla presionada
    let teclaPresionada = event.key.toUpperCase();
    // Recorremos los elementos input con clase "comparar-input"
    const letrasInputCompararArray = Array.from(letrasInputComparar);

    for (let i = 0; i < letrasInputCompararArray.length; i++) {
      // Eliminamos los espacios en blanco al principio y al final del valor del elemento
      let valorComparar = letrasInputCompararArray[i].value.trim();
      // Si el valor de la tecla presionada es igual al valor del elemento, asignamos el valor de la tecla al elemento input con clase "letras-input" correspondiente
      if (teclaPresionada === valorComparar) {
        letrasInputEscritas[i].value = teclaPresionada;
      }
      // Si el contador de clicks es mayor al permitido salimos del bucle
      if (contadorClicks > attempts) {
        break;
      }
    }
  });
}

function clickLetrasBotones() {
  let botonesLetras = document.querySelectorAll(".letras-abecedario");
  botonesLetras.forEach(function (boton) {
    boton.addEventListener("click", function () {
      var valorBoton = boton.textContent;
      contadorClicks++;
      mostrarImagen();
      if (attempts - contadorClicks >= 0) {
        attemptsRemaining.innerHTML = `Intentos restantes: ${
          attempts - contadorClicks
        }`;
      } else {
        attemptsRemaining.innerHTML = `Intentos restantes: 0`;
      }

      // Obtener el valor del botón (la letra) en mayúsculas
      let letraPresionada = valorBoton.toUpperCase();

      // Verificar si la letra presionada está en la lista de letras usadas
      if (!letras.includes(letraPresionada) && contadorClicks < attempts) {
        // Si no está en la lista, agregarla a las letras usadas
        letras += letraPresionada + " ";
        letrasUsadas.textContent =
          "Letras Usadas: " + letras.trim().toUpperCase();
      }

      // Comparar la letra presionada con las letras para completar
      for (var i = 0; i < letrasInputComparar.length; i++) {
        let valorComparar = letrasInputComparar[i].value.trim().toUpperCase();
        if (letraPresionada === valorComparar) {
          letrasInputEscritas[i].value = letraPresionada;
        }
        if (contadorClicks > attempts) {
          break;
        }
      }
    });
  });
  const inputs = document.querySelectorAll(".letras-input");
  const idInputSave = document.getElementById("idInput");
  const letrasInputs = Array.from({ length: 31 }, (_, i) =>
    document.getElementById(`letras-input-${i}`)
  );

  let currentInput = null;

  function almacenarID(event) {
    currentInput = event.target;
    idInputSave.textContent = currentInput.id;
  }

  inputs.forEach((input) => {
    input.addEventListener("click", almacenarID);
  });

  const botonesLetrass = document.querySelectorAll(".letras-abecedario");

  botonesLetrass.forEach((boton) => {
    boton.addEventListener("click", function () {
      if (currentInput) {
        const valorBoton = boton.textContent.toUpperCase();
        const index = parseInt(currentInput.id.split("-")[2]);

        if (index >= 0 && index < letrasInputs.length) {
          letrasInputs[index].value = valorBoton;
        }
      }
    });
  });

  // Asignar un evento 'mousedown' a cada input
  inputs.forEach((input) => {
    input.addEventListener("mousedown", almacenarID);
  });
  inputs.forEach((input) => {
    input.addEventListener("touchstart", almacenarID);
  });
}

function comprobarLetras() {
  // Recorremos ambos arrays de elementos input
  for (var i = 0; i < letrasInputEscritas.length; i++) {
    // Eliminamos los espacios en blanco del valor del elemento
    var valorEscrito = letrasInputEscritas[i].value.replace(/\s/g, "").trim();
    var valorComparar = letrasInputComparar[i].value.replace(/\s/g, "").trim();
    // Si el valor del elemento es vacío, ignoramos el elemento y seguimos comparando los demás
    if (valorEscrito === "" || valorComparar === "") {
      continue;
    }
    // Comparamos el valor de cada elemento
    if (valorEscrito === valorComparar) {
      contador++;
    }
  }
  // Obtenemos los valores de los elementos input con clase "letras-input" en una lista
  let valoresInput1 = [];
  for (let i = 0; i < letrasInputEscritas.length; i++) {
    valoresInput1.push(letrasInputEscritas[i].value);
  }
  let palabraUnida1 = valoresInput1.join("");
  let valoresInput2 = [];
  for (let i = 0; i < letrasInputComparar.length; i++) {
    valoresInput2.push(letrasInputComparar[i].value.replace(/\s/g, "").trim());
  }
  let palabraUnida2 = valoresInput2.join("");

  // Comparamos el contador con el número total de letras de la palabra original y la palabra inicial con la palabra escrita
  if (
    contador === letrasInputComparar.length ||
    palabraUnida1 === palabraUnida2
  ) {
    // Si el contador es igual al número total de letras o a la palabra correcta, mostramos el mensaje "Es correcto"
    imagenAhorcado1.style.display = "none";
    imagenAhorcado2.style.display = "none";
    imagenAhorcado3.style.display = "none";
    imagenAhorcado4.style.display = "none";
    imagenAhorcado5.style.display = "none";
    imagenAhorcado6.style.display = "none";
    imagenAhorcado7.style.display = "none";
    imagenAhorcado8.style.display = "none";
    imagenAhorcado9.style.display = "none";
    imagenAhorcado10.style.display = "none";
    imagenAhorcado11.style.display = "none";
    imagenAhorcado0.style.display = "inline";
    setTimeout(() => {
      alert(`GANASTE, la palabra o frase correcta era: ${palabra.value}`);
      window.location.reload();
    }, 1000);
  } else {
    // Si el contador es menor al número total de letras o la palabra no coincide, mostramos el mensaje "Es incorrecto"
    if (comprobaciones >= 1) {
      imagenAhorcado2.style.display = "none";
      imagenAhorcado3.style.display = "none";
      imagenAhorcado4.style.display = "none";
      imagenAhorcado5.style.display = "none";
      imagenAhorcado6.style.display = "none";
      imagenAhorcado7.style.display = "none";
      imagenAhorcado8.style.display = "none";
      imagenAhorcado9.style.display = "none";
      imagenAhorcado10.style.display = "none";
      imagenAhorcado11.style.display = "none";
      imagenAhorcado1.style.display = "inline";
      setTimeout(() => {
        alert(`PERDISTE, la palabra o frase correcta era: ${palabra.value}`);
        window.location.reload();
      }, 1000);
    }
  }
}
function mostrarImagen() {
  const ahorcadoImages = {
    easy: [
      imagenAhorcado11,
      imagenAhorcado10,
      imagenAhorcado9,
      imagenAhorcado8,
      imagenAhorcado7,
      imagenAhorcado6,
      imagenAhorcado5,
      imagenAhorcado4,
      imagenAhorcado3,
      imagenAhorcado2,
    ],
    medium: [
      imagenAhorcado8,
      imagenAhorcado7,
      imagenAhorcado6,
      imagenAhorcado5,
      imagenAhorcado4,
      imagenAhorcado3,
      imagenAhorcado2,
    ],
    hard: [
      imagenAhorcado7,
      imagenAhorcado5,
      imagenAhorcado4,
      imagenAhorcado3,
      imagenAhorcado2,
    ],
    extreme: [imagenAhorcado4, imagenAhorcado3, imagenAhorcado2],
    aleatorio: [
      imagenAhorcado11,
      imagenAhorcado10,
      imagenAhorcado9,
      imagenAhorcado8,
      imagenAhorcado7,
      imagenAhorcado6,
      imagenAhorcado5,
      imagenAhorcado4,
      imagenAhorcado3,
      imagenAhorcado2,
    ],
  };

  const selectedImages = ahorcadoImages[modoSeleccionadoVar.id];

  if (selectedImages) {
    for (let i = 0; i < selectedImages.length; i++) {
      if (i === contadorClicks - 1) {
        selectedImages[i].style.display = "inline";
      } else {
        selectedImages[i].style.display = "none";
      }
    }

    // Agregar condición para mostrar la imagen final
    if (contadorClicks >= selectedImages.length) {
      selectedImages[selectedImages.length - 1].style.display = "inline";
    }
    // En el modo "extreme", ocultar la imagen imagenAhorcado5
    if (modoSeleccionadoVar.id === "easy") {
      imagenAhorcado12.style.display = "none";
    } else if (modoSeleccionadoVar.id === "medium") {
      imagenAhorcado9.style.display = "none";
    } else if (modoSeleccionadoVar.id === "hard") {
      imagenAhorcado8.style.display = "none";
    } else if (modoSeleccionadoVar.id === "extreme") {
      imagenAhorcado5.style.display = "none";
    } else if (modoSeleccionadoVar.id === "aleatorio") {
      imagenAhorcado12.style.display = "none";
    }
  }
}

// boton para verificar si es correcto o no
buttonComparar.addEventListener("click", function () {
  comprobaciones++;
  comprobarLetras();
});
