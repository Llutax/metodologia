// 1. **Ejercicio 01**



let numero = [6, 4, 7, 1, 0, 4, 2, 3];
let conts = 0;

do {
    console.log(conts + 1, "(", numero[conts], ")", conts);
    conts++;
}
while (conts < numero.length);

console.log("EL TAMAÑO DEL ARREGLO ES " + conts + "unidades");
