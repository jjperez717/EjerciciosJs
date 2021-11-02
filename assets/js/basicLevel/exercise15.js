// Guardar los siguientes datos del usuario
/**
 * Nombre:
 * Apellido:
 * Edad:
 * Telefono:
 * Celular:
 * Dirección:
 */

//Variables
/*const btnUser = document.getElementById("btnUser");
const wellcome = document.getElementById("wellcome");
const edad = document.getElementById("age");
const telephone = document.getElementById("telephone");
const cellphone = document.getElementById("cellphone");
const direction = document.getElementById("direction");


// funciones
const userData = () => {
  let userName = prompt("Ingresa tu nombre");
  let apellido = prompt("Ingresa tu apellido");
  let age = prompt("Ingresa tu edad");
  let telefono = prompt("Ingresa tu telefono");
  let celular = prompt("Ingresa tu celular");
  let direccion = prompt("Ingresa tu direccion");
  wellcome.innerHTML = "Bienvenido/a : " + userName + apellido;
  edad.innerHTML = "Edad : "+ age;
  telephone.innerHTML = "Telefono : "+ telefono;
  cellphone.innerHTML = "Celular : "+ celular;
  direction.innerHTML = "Dirección : "+ direccion;
  if (
    userName == null ||
    userName == "" ||
    apellido == null ||
    apellido == "" ||
    age == null ||
    age == "" ||
    telefono == null||
    telefono == ""||
    celular == null||
    celular == ""||
    direccion == null ||
    direccion == ""
  ) {
    return alert("Error al momento de ingesar algunos de los datos");
  }

  localStorage.setItem("name", userName);
  localStorage.setItem("apellido", apellido);
  localStorage.setItem("edad", age);
  localStorage.setItem("telephone", telefono);
  localStorage.setItem("cellphone", celular);
  localStorage.setItem("direction", direccion);
};
 

if (localStorage.getItem("name")) {
  wellcome.innerHTML = `Bienvenido/a :  ${localStorage.getItem("name")}  ${localStorage.getItem("apellido")}`;
  edad.innerHTML = `Edad : ${localStorage.getItem("edad")}`;
  telephone.innerHTML = `Telefono : ${localStorage.getItem("telephone")}`;
  cellphone.innerHTML = `Celular : ${localStorage.getItem("cellphone")}`;
  direction.innerHTML = `Dirección : ${localStorage.getItem("direction")}`;
}

// evento
btnUser.onclick = () => {
  userData();
}; */

//Confeccionar un programa en JavaScript que defina e inicializa una variable de tipo cadena de caracteres donde almacenemos el nombre de un empleado y otra variable de tipo entera donde almacenar el sueldo. Imprimir cada variable en una línea distinta en pantalla.

//variables
/*const btnUser = document.getElementById("btnUser");
const nombre = document.getElementById("nombre");
const sueldo = document.getElementById("sueldo") ;

//funciones
const userData = () =>{
    let userName = prompt("Ingresa tu nombre");
    let valor = prompt("Ingresa tu sueldo");
    nombre.innerHTML = "Nombre: " + userName;
    sueldo.innerHTML = "sueldo : " + valor;
    if (
        userName == null ||
        userName == "" ||
        valor == null ||
        valor == "" 
      ) {
        return alert("Error al momento de ingesar algunos de los datos");
      }

    localStorage.setItem("name", userName);
    localStorage.setItem("sueldo", valor);
};

if (localStorage.getItem("name")) {
    nombre.innerHTML = `Nombre :  ${localStorage.getItem("name")}`;
    sueldo.innerHTML = `Sueldo : ${localStorage.getItem("sueldo")}`;
  
  }

// evento
btnUser.onclick = () => {
    userData();
  };
  */

//Digitar alguna de estas palabras (casa, mesa, perro, gato) luego mostrar la palabra traducida en inglés. Es decir, si se ingresa 'casa' debemos mostrar el texto 'house' en la página. (Con Switch)

//variable
/*let palabra = prompt(
  "Digita alguna de estas palabras \n casa \n mesa \n perro \n gato "
);
//convertir a minisculas
palabra = palabra.toLowerCase();

// switch
switch (palabra) {
  case "casa":
    alert("house");
    break;
  case "mesa":
    alert("desk");
    break;
  case "perro":
    alert("dog");
    break;
  case "gato":
    alert("gat");
    break;
  default:
    alert("Esta palabra no esta en las opciones dadas");
    break;
}
*/

//ingresar uno de los 32 departamentos de colombia  en un prompt

let departamento = prompt(
  "Escribe uno de los 32 departamentos de colombia "
);
//convertir a minisculas
departamento = departamento.toLowerCase();

// switch
switch (departamento) {
  case "amazonas":
    alert("Leticia");
    break;
  case "antioquia":
    alert("Medellín");
    break;
  case "arauca":
    alert("Arauca");
    break;
  case "atlantico":
    alert("Barranquilla");
    break;
  case "bolivar":
    alert("Cartagena de Indias");
    break;
  case "boyaca":
    alert("Tunja");
    break;
  case "caldas":
    alert("Manizales");
    break;
  case "caqueta":
    alert("Florencia");
    break;
  case "casanare":
    alert("Yopal");
    break;
  case "cauca":
    alert("Popayán");
    break;
  case "cesar":
    alert("Valledupar");
    break;
  case "choco":
    alert("Quibdó");
    break;
  case "cordoba":
    alert("Montería");
    break;
  case "cundinamarca":
    alert("Bogotá");
    break;
  case "guainia":
    alert("Inírida");
    break;
  case "guaviare":
    alert("San José del Guaviare");
    break;
  case "huila":
    alert("Neiva");
    break;
  case "guajira":
    alert("Riohacha");
    break;
  case "magdalena":
    alert("Santa Marta");
    break;
  case "meta":
    alert("Villavicencio");
    break;
  case "nariño":
    alert("San Juan de Pasto");
    break;
  case "norte de santander":
    alert("San José de Cucuta");
    break;
  case "putumayo":
    alert("Mocoa");
    break;
  case "quindio":
    alert("Armenia");
    break;
  case "risaralda":
    alert("Pereira");
    break;
  case "san anders y providencia":
    alert("San Andrés");
    break;
  case "santander":
    alert("Bucaramanga");
    break;
  case "sucre":
    alert("Sincelejo");
    break;
  case "tolima":
    alert("Ibaghé");
    break;
  case "valle del cauca":
    alert("Cali");
    break;
  case "vaupes":
    alert("Mitú");
    break;
  case "vichada":
    alert("Puerto carreño");
    break;
  default:
    alert("Verifique que el departamento este bien escrito");
    break;
}
