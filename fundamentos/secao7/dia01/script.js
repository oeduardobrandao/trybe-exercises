// const emailListInData = [
//     'roberta@email.com',
//     'paulo@email.com',
//     'anaroberta@email.com',
//     'fabiano@email.com',
//   ];
  
//   // Adicione seu código aqui
//   emailListInData.forEach((email) => {
//     console.log(`O email ${email} está cadastrado em nosso banco de dados!`)
//   })

// const numbers = [19, 21, 30, 3, 45, 22, 15];

// Adicione seu código aqui
// const verifyNumbers = numbers.find((number) => (number % 3 === 0 && number % 5 === 0));
// console.log(verifyNumbers);

// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// const verifyNames = names.find((name) => name.length === 5);

// console.log(verifyNames);

// Adicione seu código aqui

// const musicas = [
    // { id: '31031685', title: 'Partita in C moll BWV 997' },
    // { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    // { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
//   ];
  
  // Adicione seu código aqui

// const verifySongs = musicas.find((song) => song.id === '31031685');

// console.log(verifySongs);

// const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

// const hasName = (arr, name) => {
//   //Adicione seu código aqui
//   const result = arr.some((listItem) => listItem === name);
//   return result;
// };

// console.log(hasName(names, 'Ana'));
// console.log(hasName(names, 'Pedro'));

// const people = [
//   { name: "Mateus", age: 18 },
//   { name: "José", age: 16 },
//   { name: "Ana", age: 23 },
//   { name: "Cláudia", age: 20 },
//   { name: "Bruna", age: 19 },
// ];

// //Adicione seu código aqui
// const verifyAges = (arr, minimumAge) => {
//   const result = arr.every((person) => person.age >= minimumAge);
//   return result;
// }

  
// console.log(verifyAges(people, 18));

// console.log(verifyAges(people, 14));

// const createEmail = (fullName) => 
//   `${(fullName.replaceAll(' ', '_')).toLowerCase()}@trybe.com`;

// const newEmployees = () => {
//   const employees = {
//     id1: createEmail('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//     id2: createEmail('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//     id3: createEmail('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//   };
//   return employees;

// };

// console.log(newEmployees());


// const numberGenerator = () => Math.floor((Math.random() * 5) + 1);

// const areYouLucky = (num) => {
//   if (num === numberGenerator()) {
//     return 'Parabéns, você ganhou!'
//   }
//   return 'Tente novamente'
// }

// console.log(areYouLucky(1));

// const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// const checkScore = (RIGHT_ANSWERS, STUDENT_ANSWERS, () => {
//   let score = 0;
//   RIGHT_ANSWERS.forEach(element, index, () => {
//     if (element === STUDENT_ANSWERS[index]) {
//         score += 1;
//     } else if (STUDENT_ANSWERS[index] === 'N.A') {
//         score += 0;
//     } else {
//         score -= 1;
//     }
//   })
//   return score;
// })

// console.log(checkScore(RIGHT_ANSWERS, STUDENT_ANSWERS));


