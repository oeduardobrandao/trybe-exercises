// let diasDaSemana = {
//   1: 'domingo',
//   2: 'segunda',
//   3: 'terça',
//   4: 'quarta',
//   5: 'quinta',
//   6: 'sexta',
//   7: 'sábado',
// };

// // diasDaSemana.1; // SyntaxError: Unexpected number
// console.log(diasDaSemana['1']); // domingo


// let conta = {
//     agencia: '0000',
//     banco: {
//       cod: '012',
//       id: 4,
//       nome: 'TrybeBank',
//     },
// };
  
// let infoDoBanco = 'banco';
// console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
// console.log(conta[infoDoBanco]['nome']); // TrybeBank

// console.log(conta.agencia); // 0000
// console.log(conta['agencia']); // 0000

// console.log(conta.banco.cod); // 012
// console.log(conta['banco']['id']); // 4

// let player = {
//     givenName: 'Marta',
//     lastName: 'Silva',
//     age: 34,
//     medals: {
//         golden: 2, silver: 3 
//     }
// };

// console.log('A jogadora ' + player.givenName + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.');

// player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018]

// console.log('A jogadora ' + player.givenName + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes.');

// console.log(`A jogadora possui ${player.medals.golden} medalhas de ouro e ${player.medals.silver} medalhas de prata.`);


// Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão. 

// let names = {
//   person1: 'João',
//   person2: 'Maria',
//   person3: 'Jorge',
// };

// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge',
//   };

// for (let person in names) {
//     console.log(`Olá ${names[person]}`);
// }


// let car = {
//     model: 'A3 Sedan',
//     manufacturer: 'Audi',
//     year: 2020
//   };

// for (let specs in car) {
//     console.log(`${specs}: ${car[specs]}`);
// }


// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para: 

// function soma(a, b) {
//     return a + b;
// }

// function sub(a, b) {
//     return a - b;
// }

// function mult(a, b) {
//     return a * b;
// }

// function div(a, b) {
//     return a / b;
// }

// function mod(a, b) {
//     return a % b;
// }

// console.log(mult(300, 12));


// Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados. 

// function maiorNumero(a, b) {
//     if (a > b) {
//         return `${a} é maior que ${b}`;
//     } else if (b > a) {
//         return `${b} é maior que ${a}`;
//     } else {
//         return `Os números são iguais.`
//     }
// }

// console.log(maiorNumero(12, 11));


// Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados. 

// function maiorNumero(a, b, c) {
//     if (a > b && a > c) {
//         return `${a} é o maior`;
//     } else if (b > a && b > c) {
//         return `${b} é o maior`;
//     } else if (c > a && c > b){
//         return `${c} é o maior`;
//     } else {
//         return `Você inseriu dois ou mais números iguais`
//     }
// }

// console.log(maiorNumero(1, 23, 2));


// Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”. 

// function isPositive(num) {
//     if (num > 0) {
//         return 'Positive';
//     } else if (num < 0) {
//         return 'Negative';
//     } else {
//         return 'Zero';
//     }
// }

// console.log(isPositive(0));




// Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.

//     Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.

//     Um ângulo será considerado inválido se não tiver um valor positivo.

function isTriangle(a, b, c) {
    if (a + b + c === 180 && a > 0 && b > 0 && c > 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isTriangle(30, 60, 180));