// LocalStorage
// Variables globales
const btnUser = document.getElementById("btnUser");
const wellcome = document.getElementById("wellcome");

// funciones
const userData = () => {
    let userName = prompt("Ingresa tu nombre");
    wellcome.innerHTML = "Bienvenido/a : " + userName;
    localStorage.setItem("name", userName )
}

if (localStorage.getItem("name")) {
    wellcome.innerHTML = `Bienvenido/a :  ${localStorage.getItem("name")}`
} 

// evento
btnUser.onclick = () => {
    userData();
}