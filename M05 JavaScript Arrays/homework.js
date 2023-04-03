/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   let primero = array[0]  
   return (primero);
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   let ultimo = array[array.length - 1]
   return (ultimo);
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return (array.length);
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   const masUno = array.map( (num) => { return (num + 1);})
   return (masUno);
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return (array);
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento)
   return (array);
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   let nuevaPalabra = palabras.join(" ");
   return (nuevaPalabra);

}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar True si está, o False si no está.
   // Tu código:
   let existe = array.includes(elemento)
   if (existe == true) {
      return (true);
   } 
   return (false);
   
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   let suma = 0
   arrayOfNums.forEach(function(element){
      suma = suma + element
   });
   return (suma);
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   
   let suma = 0
   resultadosTest.forEach(function(element){
      suma = suma + element
   });
   let promedio = suma / resultadosTest.length
   return (promedio);
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
  let mayor = 0
   arrayOfNums.forEach(function(element){
      if (element >= mayor) {
         mayor = element
      }
   })
   return (mayor);
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   
   let producto = 1;
   if (arguments.length === 0) {
      return (0);
   } else {
      if (arguments.length === 1) {
         return (arguments[0]);
      } else {
         for (let i = 0; i< arguments.length; i++) {
             producto = producto * arguments[i];
         }
         return (producto);
      }
   }


}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   let cantidad = 0;
   array.forEach(function (element) {
      if (element > 18) {
         cantidad = cantidad + 1
      }
   });
   return (cantidad);
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
      if (numeroDeDia == 1 || numeroDeDia == 7) {
         return ("Es fin de semana");
      } 
      return ("Es dia laboral");
   
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar True si el entero inicia con 9 y False en otro caso.
   // Tu código:
   let newNum = num.toString();
   const array = newNum.split("");
   
   if (array[0] == 9) {
      return (true);
   } else {
      return (false);
   }

}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar True.
   // Caso contrario retornar False.
   // Tu código:
   let igual = array[0]
   let veses = 0

   array.forEach(function (element) {
      if (element == igual) {
         igual = element
         veses = veses + 1
      }
   });

   if (veses == array.length) {
      return (true);         
   } else {
      return (false);
   }
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   const array2 = [];
   array.forEach(function (element) {
      if (element === "Enero") {
         array2.push(element);
      } else {
         if (element === "Marzo") {
            array2.push(element);
         } else {
            if (element === "Noviembre") {
               array2.push(element);
            }
         }
      }
   });

   if (array2.length === 3) {
      return (array2);
   } else {
      return ("No se encontraron los meses pedidos");
   }
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   let Seis = 6;
   const array = []; 
   
   for (let x = 0; x <= 10; x++) {
      let resultado = Seis * x
      array.push(resultado);
   }
   return (array);
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   const array2 = [];
   array.forEach(function (element) {
      if (element > 100) {
         array2.push(element);
      }
   });

   return (array2);
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   const array = [];

   for (let x = 0; x < 10; x++) {
      num = num + 2
      
      if (num == x) {
         return ("Se interrumpió la ejecución");
         break;
      }

      array.push(num);
   }
   return (array);
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   const array = [];

   for (let x = 0; x < 10; x++) {
      
      if (x == 5) {
         continue;
      }

      num = num + 2
      array.push(num);
   }
   return (array);
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
