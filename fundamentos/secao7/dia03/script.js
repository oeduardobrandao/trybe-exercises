// const dados = ['Luca', 91234567, 'Ana', 92345678, 'Marlete', 93456789];

// dados.filter((item) => {
//   // retorne apenas os elementos que são do tipo string
//   return typeof item === 'string';
// });

// const listaNumeros = [10, 20, 30, 40];

// // Armazena o resultado em uma nova variável maiorVinte
// let maiorVinte = listaNumeros.filter((item) => {
//   // retorne apenas os elementos que são maiores do que vinte
//   return item > 20;
// });

// const numbers = [50, 85, -30, 3, 15];

// const biggestNumber = numbers.reduce((bigger, number) => {
//   console.log(bigger, number);
//   return bigger > number ? bigger : number
// });

// console.log(biggestNumber);

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const evenNumbers = numbers.filter((number) => number % 2 === 0);

const sumNumbers = evenNumbers.reduce((acc, curr) => acc + curr);

const sumEvenNumbers = numbers.reduce((acc, curr) => (curr % 2 === 0) ? acc + curr : acc);

console.log(sumEvenNumbers);
