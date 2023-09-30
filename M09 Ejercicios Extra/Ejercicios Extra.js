/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:

   const array = [];
   
   for (const clave in objeto) {
         const array2 = [clave, objeto[clave]];
         array.push(array2);
   }
   return (array);
   /* otra manera de hacerlo mas rapido:
   const array = Object.entries(objeto);
   return (array); */
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   const objeto = {};
   const array = string.split("");

   array.forEach(element => {
      if (element in objeto) {
         objeto[element] = objeto[element] + 1
      }else{
         objeto[element] = 1;
      }
   });

   return (objeto);
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   const array = string.split(""), minuscula = [], mayuscula = [];
   

   array.forEach(element => {
      if (element === element.toUpperCase()) {
         mayuscula.push(element);
      } else {
         minuscula.push(element);
      }
   });

   const array2 = [mayuscula.join(""), minuscula.join("")];

   return (
      array2.join("")
   );
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   return (
      frase.split(" ").reduce((array, element)=>{
         array.push(element.split("").reverse().join(""))
         return (
            array
         );
      }, []).join(" ")
   );

   /* Esta fue la logica que se me ocurrio primero:
   
   let nuevaFrase = null;
   const array2 = [];

   const array = frase.split(" ").forEach(element =>{
       array2.push(element.split("").reverse().join(""));
      nuevaFrase = array2.join(" ");
    
    
   });

   return (nuevaFrase); */

}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:

   if (numero.toString().split("").join("") === numero.toString().split("").reverse().join("")) {
      return (
         "Es capicua"
      );
   } else {
      return (
         "No es capicua"
      ); 
   }

   
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
 
   return (
      string.split("").reduce((array, valor) =>{
         if (valor !== 'a' && valor !== 'b' && valor !== 'c') {
            array.push(valor)
         }
   
         return (
            array
         );
      }, []).join("")
   
   );
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   return (
      arrayOfStrings.sort((a, b) => {
         return (
            a.length - b.length
         );
      })
   );

}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   const array3 = [];

   array1.forEach(e =>{
      array2.forEach(element =>{
         if (e === element) {
            if (array3.includes(element) === false) {
               array3.push(element);
            }
         }
      });
   });

   return (
      array3
   )
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
