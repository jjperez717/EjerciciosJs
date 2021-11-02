//fechas
let registerDate = new Date();
//sacamos el año
let year = registerDate.getFullYear();
// en codigo inicia desde cero
let month = registerDate.getMonth() + 1;
// dia
let day = registerDate.getDate();
// hora
let hour = registerDate.getHours();
//minuto
let minuto = registerDate.getMinutes();

console.log(registerDate);
console.log(`${day}/${month}/${year}`);

console.log(`${hour}:${minuto}`);
