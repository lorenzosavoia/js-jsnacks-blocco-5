// Scrivi una funzione che fonda due array(aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
// es. [a, b, c], [1, 2, 3] →[a, 1, b, 2, c, 3].


const array1 = ["a", "b", "c", "d"];
const array2 = [1, 2];
const result = [];

let length = Math.min(array1.length, array2.length);

console.log(length);

for (let i = 0; i < length; i++) {
    result.push(array1[i], array2[i]);
}

result.push(...array1.slice(length), ...array2.slice(length));

console.log(result);