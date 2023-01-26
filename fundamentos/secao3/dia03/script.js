// let horas = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// let minutos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59];

// for (let indexHoras = 0; indexHoras < horas.length; indexHoras += 1) {
//     for (let indexMinutos = 0; indexMinutos < minutos.length; indexMinutos += 1){
//         console.log(horas[indexHoras] + ' hora(s) e ' + minutos[indexMinutos] + ' minuto(s)')
//     }
// }

// for (let hora = 0; hora < 12; hora++) {
//     for (let minuto = 0; minuto < 60; minuto++) {
//       console.log("São "+hora+'hora(s) e '+minuto+'minuto(s)');
//     }
//   }

// let inicio = 20;
// let fim = 277;
// let numerosDaSequencia = [];

// for (let sequencia = inicio; sequencia <= fim; sequencia += 1){
//     if (sequencia % 3 === 0) {
//         numerosDaSequencia.push(sequencia);
//     } 
// }

// if (numerosDaSequencia.length > 50) {
//     console.log('Tem mais de 50 números que dividem por 3')
// } else {
//     console.log('Sequência muito pequena')
// }



// 1. Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.

let fatorial = 5;

for (let mult = fatorial - 1; mult > 0; mult -= 1) {
    fatorial *= mult;
}

console.log(fatorial)

// 2. Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente. 

// Reconhecer string
// Percorrer todos os seus indexes
// Criar variável para armazenar os indexes de trás para frente
// Imprimir nova variável

// let word = 'eduardo';
// let invertedWord = '';


// for (let index = 0; index < word.length; index += 1) {
//     invertedWord += word[word.length - 1 -index]
// }

// console.log(invertedWord);


// 3.  Considere o array de strings abaixo: 

// let array = ['java', 'javascript', 'python', 'html', 'css'];

// Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra. 

// Criar for para percorrer o array
// Criar for aninhado para percorrer os indexes do array principal
// Criar variável para armazenar maior palavra
// Comparar variávei com demais palavras".lenght"
// Imprimir variável

// let biggestWord = array[0];
// let smallestWord = array[0];

// for (let index = 0; index < array.length; index += 1) {
//         if (array[index].length > biggestWord.length) {
//             biggestWord = array[index];
//         }
// }

// for (let index = 0; index < array.length; index += 1) {
//     if (array[index].length < smallestWord.length) {
//         smallestWord = array[index];
//     }
// }

// console.log(biggestWord);
// console.log(smallestWord);


// 4. Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que imprima no console o maior número primo entre 2 e 50. 


// let num1 = 2;
// let num2 = 50;
// let majorPrimo = num1;

// for (let primos = num1; primos <= num2; primos += 1) {
//     let numeroPrimo = true;
//     for (let divisores = 2; divisores < primos; divisores += 1) {
//         if (primos % divisores === 0) {
//             numeroPrimo = false;
//         }
//     }
//     if (numeroPrimo) {
//         majorPrimo = primos;
//     }
// }

// console.log(majorPrimo);


// 5. Escreva um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo: 

// let n = 5;

// if (n > 1) {
//     for (let loops = 1; loops <= n; loops += 1){
//         console.log('*'.repeat(n))
//     }
// }


// 6. Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo: 

// if (n > 1) {
//     for (let loops = 1; loops <= n; loops += 1){
//         console.log('*'.repeat(loops))
//     }
// }


// 7. Agora inverta o lado do triângulo. Por exemplo: 

// if (n > 1) {
//     for (let loops = 1; loops <= n; loops += 1){
//         console.log(' '.repeat(n - loops) + '*'.repeat(loops))
//     }
// }


// 8. Depois, faça uma pirâmide com n asteriscos de base [RESOLUÇÃO MAIS CURTA]: 

// if (n > 1) {
//     for (let loops = 1; loops <= n; loops += 2){
//         console.log('.'.repeat(n - loops) + '*'.repeat(loops) + '.'.repeat(n - loops))
//     }
// }


// pedra = 1, papel = 2, tesoura = 3

// 

// let possibilidades = ["pedra", "papel", "tesoura"];
// player1 = Math.floor(Math.random()*3);
// player2 = Math.floor(Math.random()*3);
// if ((player1 === 2 || player2 === 2) && (player1 === 0 || player2 === 0)){
//     if (player1 === 0){
//         console.log('Player 1 won');
//     } else {
//         console.log('Player 2 won');
//     }
// } else {
//     if (player1 > player2){
//         console.log('Player 1 won');
//     } else if (player2 > player1){
//         console.log('Player 2 won');
//     } else {
//         console.log('A tie');
//     }
// }
// console.log(player1);
// console.log(player2);
// console.log('Player1: '+possibilidades[player1]);
// console.log('Player2: '+possibilidades[player2]);
