//ciclo for
const btnUser = document.getElementById("btnUser");

//funcion
const spam = () =>{
    for (let i = 0; i < 5; i++) { //i = i + 1
       // console.log("Repeticion #", i);
        window.open("https://pcworldenespanol.com/wp-content/uploads/sites/3/2020/07/Virus-2.jpg");
    }
}

//evento
btnUser.onclick = () =>{
    spam();
}