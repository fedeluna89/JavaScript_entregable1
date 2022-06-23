function PedirDatos(nombre, apellido) {
    console.log(`hola como estas ${nombre} ${apellido}`);
}

PedirDatos("micaela", "castro");

let edad = parseInt(prompt("ingresa tu edad"));

if(edad > 17){
    alert(`Bienvenida micaela castro`);
} 

while(edad < 17){
alert(`Edad Insuficiente`)
edad = prompt("Volve a ingresar tu edad");
}



