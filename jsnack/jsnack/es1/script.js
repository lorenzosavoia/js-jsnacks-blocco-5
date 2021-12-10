// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

const zucchini = [
    {
        variety: 'classica',
        weight: 10,
        width: 20,
    },
    {
        variety: 'classica',
        weight: 4,
        width: 7,
    },
    {
        variety: 'classica',
        weight: 15,
        width: 6,
    },
    {
        variety: 'classica',
        weight: 1,
        width: 2,
    },
    {
        variety: 'classica',
        weight: 11,
        width: 9,
    },
    {
        variety: 'classica',
        weight: 15,
        width: 16,
    },
    {
        variety: 'classica',
        weight: 9,
        width: 3,
    },
    {
        variety: 'classica',
        weight: 7,
        width: 2,
    },
    {
        variety: 'classica',
        weight: 8,
        width: 14,
    },
    {
        variety: 'classica',
        weight: 6,
        width: 7,
    },
];

let sum = 0;

for (let i = 0; i < zucchini.length; i++) {
    const element = zucchini[i];
    sum = sum + element.weight;


    console.log(element.weight);
    
}
console.log(sum);