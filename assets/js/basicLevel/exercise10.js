const btnUser = document.getElementById("btnUser");

const userData =() =>{
    let userName = prompt("Ingresa tu nombre");
    let age = prompt("Ingresa tu edad");
    alert(`Bienvenido/a ${userName}  tu edad es:  ${age}`);
}

//evento
btnUser.onclick =function () {
    userData();
}