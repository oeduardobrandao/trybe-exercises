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

let statusAprovacao = 'aprovada';

switch (statusAprovacao) {
    case 'aprovada':
        console.log('Parabéns, você foi aprovado(a)!')
        break;

    case 'lista':
        console.log('Você está na nossa lista de espera')
        break;

    case 'reprovada':
        console.log('Você foi reprovado(a)')
        break;
        
    default:
        console.log('Informação incorreta')
}