/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
   const arreglo = nombre.split("");
   const arreglo2 = [];
   
   arreglo2[0] = arreglo[0].toUpperCase();

   for (let i = 1; i < arreglo.length; i++){
      arreglo2[i] = arreglo[i];
   }
   let nombreArreglado = arreglo2.join("");

   return (nombreArreglado);
}

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   cb();
}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
   let resultado = cb(num1,num2);

   return (resultado);
}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   // Otra manera de hacerlo es con el metodo reduce();
   /* let suma = 0;

   arrayOfNumbers.reduce((acc, valorAtual)=>{
      return suma = acc + valorAtual
   });

   return (cb(suma)); */

   let suma = 0;

   arrayOfNumbers.forEach(element => {
      return (suma = suma + element);
   });
   cb(suma);

}

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:
   array.forEach(element => {
      cb(element);
   });
}

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
   const nuevoArray = [];

   array.forEach(element => {
      nuevoArray.push(cb(element));
   });
   return(nuevoArray);
}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   const nuevoArray = [];
   arrayOfStrings.forEach(element =>{
      const array = element.split("");
      
      if (array[0] === "a") {
         nuevoArray.push(element);
      }
   });

   return (nuevoArray);

}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
