//Variables
const btnUser = document.getElementById("btnUser");

//funcion que invoca el evento
const netflix = () => {
  //Variables
  let userName = prompt("Ingresa tu nombre");
  let age = prompt("Ingresa tu edad");
  let epilepcia = prompt(
    "Sufres de ataques de epilipcia \n Responde : \n Si \n No"
  );

  //Validamos nulos
  console.log(userName, age, epilepcia);
  if (
    userName == null ||
    userName == "" ||
    age == null ||
    age == "" ||
    epilepcia == null ||
    epilepcia == ""
  ) {
    return alert("Error al momento de ingesar algunos de los datos");
  }
  epilepcia = epilepcia.toLowerCase(); //toUpperCase();
  userName = userName.toLowerCase();
  // Valida edad y epilepcia
  if (age >= 18 && epilepcia == "no") {
    alert("Tienes permiso al catalogo de peliculas violentas");
  } else {
    if (epilepcia == "si" || epilepcia == "no") {
      alert("No tienes permiso para ver este catalogo");
    } else {
      alert("Favor ingresar en epilepcia solo Si o No");
    }
  }

  // Si es menor de 10 aÃ±os
  if (age <= 10) {
    alert("Desbloqueaste la seccion junior");
  }

  // o que se llame juan o que tenga 100 aÃ±os
  if (userName == "juan" || age == 100) {
    alert("Recuerda que no tienes que pagar suscripcion");
  }
};

// evento
btnUser.onclick = () => {
  netflix();
};

// epilepcia = epilepcia.toLowerCase(); //toUpperCase();
// userName = userName.toLowerCase();

// 1 - validaciones (mayusculas y minusculas) (si el dato no coincide)
// 2 - tipos de datos

// Valida nulos

