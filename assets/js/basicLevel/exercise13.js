// Variables globales
const btnUser = document.getElementById("btnUser");
const wellcome = document.getElementById("wellcome");

// funciones
const userData = () => {
    let userName = prompt("Ingresa tu nombre");
    wellcome.innerHTML = "Bienvenido/a : " + userName;
}

// evento
btnUser.onclick = () => {
    userData();
}