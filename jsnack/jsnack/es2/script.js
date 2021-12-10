// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

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

const container = document.getElementById('zucchine');
const zucchiniLowWeight = [];
const zucchinihightWeight = [];

for (let i = 0; i < zucchini.length; i++) {
    const element = zucchini[i];
    element.weight;

    if (element.weight < 15) {
        zucchiniLowWeight.push(element.weight)
        
    }else{
        zucchinihightWeight.push(element.weight)
    }
}
// console.log(zucchiniLowWeight, zucchinihightWeight);
let sum1 = 0;
let sum2 = 0;

for (let i = 0; i < zucchiniLowWeight.length; i++) {
    const element = zucchiniLowWeight[i];
    sum1 += element;     
}
for (let i = 0; i < zucchinihightWeight.length; i++) {
    const element = zucchinihightWeight[i];
    sum2 += element;    
}
// console.log(sum1,sum2);
container.innerHTML = `<h1>la somma delle zucchine leggere é: ${sum1} la somma delle zucchine pensati é ${sum2}</h1>`