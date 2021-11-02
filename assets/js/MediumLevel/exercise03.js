//array

let people =[];
//lista con  datos
let animal =["Perro", "Gato","Serpiente", "Lobo","Escorpion", "Conejo"];

//posiciones  es dieferente a item
//posiciones 0  1  2  3
//item       1  2  3  4

console.log(people);
console.log(animal);

// for (let i = 0; i < animal.length; i++) {
// console.log(animal[i]);
// }

//forin
// for (const an in animal) {
//    console.log(animal[an]);
// }

//foreach
// animal.forEach(an => {
//     console.log(an);
// });
// animal[6] = "Dragon";//agrega un item nuevo al array si conocemos el valor
// animal[6] = "Cocodrilo";//agrega un item nuevo al array si conocemos el valor
animal.push("Ardilla"); //se puede agregar un item mas en la ultima posicion
animal.unshift("tigre"); //se puede agregar un item mas en la primera posicion
// delete animal[5]; // No usar delete
animal.splice(5,1);
for (let i = 0; i < animal.length; i++) {
    console.log(animal[i]);
    }

// animal.forEach(an => {
//     console.log(an);
// });