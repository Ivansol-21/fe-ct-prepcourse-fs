/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:
   return(string);
}
devolverString("hola");

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:
   let r
   return(r = x + y);
}
suma(2, 2);

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   let r 
   return(r = x - y);
}
resta(5, 2);

function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   let r 
   return(r = x / y);
}
divide(10, 2);

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   let r 
   return(r = x * y);
}
multiplica(2, 2);

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   let r 
   return(r = x % y);
}
obtenerResto(24, 3);

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
