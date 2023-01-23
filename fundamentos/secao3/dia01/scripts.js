// Exercício 1 Variáveis

// const myName = "Eduardo";
// const birthCity = 'Feira de Santana';
// let birthYear = 1997;
// birthYear = 2030;

// console.log(myName)
// console.log(birthCity)
// console.log(birthYear)

// Exercício 2 Tipagem

// let patientId = '50';
// let isEnrolled = true;

// const patientInfo = {
//   firstName: 'Ana',
//   lastName: 'Santos',
// };
// const patientEmail = 'ana@email.com';

// console.log(typeof patientId)

// Exercício 3 Operações atitméticas

// const base = 5;
// const height = 8;
// const area = base * height;
// const perimeter = (base + height) * 2;

// console.log(area);
// console.log(perimeter);

// Exercício 4 If e Else

// const score = 59;

// if (score >= 80) {
//     console.log("Parabéns, você faz parte do grupo de pessoas aprovadas!")
// } else if (score < 80 && score >= 60) {
//     console.log("Você está na nossa lista de espera")
// } else {
//     console.log("Infelizmente, você reprovou.")
// }

// Exercício 5 Operadores lógicos

// const currentHour = 12;
// let message = "";

// if (currentHour >= 22) {
//     message = "Não deveríamos comer nada, é hora de dormir"
// } else if (currentHour >= 18 && currentHour < 22) {
//     message = "Rango da noite, vamos jantar :D"
// } else if (currentHour >= 14 && currentHour < 18) {
//     message = "Vamos fazer um bolo pro café da tarde?"
// } else if (currentHour >= 11 && currentHour < 14) {
//     message = "Hora do almoço!!!"
// } else if (currentHour > 4 && currentHour < 11) {
//     message = "Hmmm, cheiro de café recém-passado"
// }

// console.log(message)

// let weekDay = "quarta-feira";

// if (weekDay === 'segunda-feira' || weekDay === 'terça-feira' || weekDay === 'quarta-feira' || weekDay === 'quinta-feira' || weekDay === 'sexta-feira') {
//     console.log('Oba, mais um dia de aprendizado na Trybe >:D')
// } else {
//     console.log('FINALMENTE, descanso merecido UwU')
// }

// const squirtle = "melhor pokemon inicial";

// console.log(!squirtle); // false

// Exercício 6 Switch e Case


// mes = 'dezembro';
// let estacaoDoAno = '?';

// switch (mes) {
//     case 'janeiro':
//     case 'fevereiro':
//     case 'março':
//         estacaoDoAno = 'Verão';
//         break;
//     case 'abril':
//     case 'maio':
//     case 'junho':
//         estacaoDoAno = 'Outono';
//         break;
//     case 'julho':
//     case 'agosto':
//     case 'setembro':
//         estacaoDoAno = 'Inverno';
//         break;
//     case 'outubro':
//     case 'novembro':
//     case 'dezembro':
//         estacaoDoAno = 'Primavera';
// }

// console.log(estacaoDoAno); // 'Outono'

// let statusAprovacao = 'aprovada';

// switch (statusAprovacao) {
//     case 'aprovada':
//         console.log('Parabéns, você foi aprovado(a)!')
//         break;

//     case 'lista':
//         console.log('Você está na nossa lista de espera')
//         break;

//     case 'reprovada':
//         console.log('Você foi reprovado(a)')
//         break;

//     default:
//         console.log('Informação incorreta')

/* 
  1. Hora de fazermos em conjunto! 🏄‍♀️
   Agora vamos ter alguns minutos para construir um algoritmo com a seguinte descrição:
   Crie dois valores num1 e num2.
   Se os valores forem iguais some os dois
   Caso contrário multiplique num1 por num2.
   Por ultimo exiba o valor final no console.
*/

// 2.Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas constantes com os valores que serão comparados.

// const a = 4;
// const b = 6;

// let soma = a + b;
// let sub = a - b;
// let mult = a * b;
// let div = a / b;
// let mod = a % b;

// console.log(soma);
// console.log(sub);
// console.log(mult);
// console.log(div);
// console.log(mod);

// let a = 18;
// let b = 12;
// let maior;

// if (a > b) {
//     maior = a;
//     console.log('O maior número é', maior);
// } else if (b > a) {
//     maior = b;
//     console.log(maior);
// } else {
//     console.log('Os números são iguais')
// }

// let a = 18;
// let b = 12;
// let c = 24;
// let maior;

// if (a > b && a > c) {
//     maior = a;
//     console.log('O maior número é', maior);
// } else if (b > a && b > c) {
//     maior = b;
//     console.log('O maior número é', maior);
// } else if (c > a && c > b) {
//     maior = c;
//     console.log('O maior número é', maior);
// } else {
//     console.log('Os números são iguais')
// }

// let valor = 0

// if (valor > 0) {
//     console.log('positive');
// } else if (valor < 0) {
//     console.log('negative');
// } else {
//     console.log('zero')
// }



// const a = -30;
// const b = 120;
// const c = 90;

// if (a + b + c === 180 && a > 0 && b > 0 && c > 0) {
//     console.log(true);
// } else {
//     console.log(false, ': os angulos são inválidos');
// }



// let xadrex = 'Bispo'

// switch (xadrex.toLowerCase()) {
//     case 'bispo':
//         console.log('Se move nas diagonais');
//         break;

//     case 'peão':
//         console.log('Se move para frente e ataca em diagonal');
//         break;

//     case 'rainha':
//         console.log('Se move em todos os sentidos');
//         break;

//     case 'torre':
//         console.log('Se move na vertical e na horizontal');
//         break;

//     case 'cavalo':
//         console.log('Se move em L');
//         break; 
        
//     default:
//         console.log('Essa peça não existe ou não está catalogada')
// }

// Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O código deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.


// let nota = 92;
// let conceito;

// if (nota >= 90 && nota <= 100) {
//     conceito = 'A';
//     console.log(conceito)
// } else if (nota >= 80) {
//     conceito = 'B';
//     console.log(conceito)
// } else if (nota >= 70) {
//     conceito = 'C';
//     console.log(conceito)
// } else if (nota >= 60) {
//     conceito = 'D';
//     console.log(conceito)
// } else if (nota >= 50) {
//     conceito = 'E';
//     console.log(conceito)
// } else if (nota >= 0) {
//     conceito = 'F';
//     console.log(conceito)
// } else {
//     console.log('Valor inválido')
// }


// Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false.

//     Bonus: use somente um if.


// const a = 3;
// const b = 4;
// const c = 5;

// if (a % 2 === 0 || b % 2 === 0 ||c % 2 === 0) {
//     console.log(true)
// } else {
//     console.log(false)
// }

// Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false.

// Bonus: use somente um if.

// const a = 2;
// const b = 4;
// const c = 6;

// if (a % 2 !== 0 || b % 2 !== 0 ||c % 2 !== 0) {
//     console.log(true)
// } else {
//     console.log(false)
// }


// Utilize if/else para escrever um código que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda, descontado o custo do produto) a empresa terá ao vender mil desses produtos. 

// const custo = 20;
// const venda = 100;

// const lucro = venda - (custo * 1.2)
// let quantidade = 500;
// let lucroTotal;

// if (quantidade >= 0) {
//     lucroTotal = lucro * quantidade
//     console.log(lucroTotal)
// } else {
//     console.log('Valor inválido')
// }






const salarioBruto = 4500;
let aliquotaInss;
let aliquotaIr;
let salarioDescontadoInss;
let salarioLiquido;

if (salarioBruto <= 1556.96) {
    aliquotaInss = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
    aliquotaInss = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
    aliquotaInss = salarioBruto * 0.11;
} else {
    aliquotaInss = 570.88
}

salarioDescontadoInss = salarioBruto - aliquotaInss

if (salarioDescontadoInss <= 1903.98) {
    aliquotaIr = 0;
} else if (salarioDescontadoInss <= 2826.65) {
    aliquotaIr = salarioDescontadoInss * 0.075 - 142.80
} else if (salarioDescontadoInss <= 3751.06) {
    aliquotaIr = salarioDescontadoInss * 0.15 - 354.80
} else if (salarioDescontadoInss <= 4664.68) {
    aliquotaIr = salarioDescontadoInss * 0.225 - 636.13
} else {
    aliquotaIr = salarioDescontadoInss * 0.275 - 869.36
}

salarioLiquido = salarioDescontadoInss - aliquotaIr

console.log('Salário líquido é: R$', salarioLiquido)
