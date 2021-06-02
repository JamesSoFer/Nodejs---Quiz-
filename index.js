// Escribir una aplicación en node.js (Usar módulos) que recibirá
// 20 números enteros positivos, y la aplicación deberá mostrar: 
// 1. El número mayor de la lista de números recibidos. 
// 2. El número menor de la lista recibida. 
// 3. La sumatoria de todos los números recibidos. 
// 4. Devolver la lista ordenada de menor a mayor los números. 
// Nota: Usar módulos y cada item debe ser una función. El código debe venir con documentación. 


const colors = require('colors/safe');

let nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

// Funcion de sumar
function sumaArreglo (arregloNums){
    let suma = 0

    arregloNums.forEach (function(num){
        suma += num
    });

    return suma;
}

let suma = sumaArreglo(nums);

console.log(suma);

//funcion de ordenar lista 
function ordenar (){
    
    return nums.sort();
}

console.log(ordenar);
