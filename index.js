let nombre = prompt("igresa tu nombre");
let apellido = prompt("ingresa tu apellido");
let edad = parseInt(prompt("ingresa tu edad"));

let datos = (`${nombre} ${apellido}, Tu edad es ${edad} `)

if(edad > 17){
    alert(datos);
}

while(edad < 17){
alert("Edad Insuficiente")
edad = prompt("Volve a ingresar tu edad");
}


