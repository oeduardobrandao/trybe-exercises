// // Faça uma lista com as suas frutas favoritas
// const specialFruit = ['maçã', 'manga', 'morango'];

// // Faça uma lista de complementos que você gostaria de adicionar
// const additionalItens = ['leite em pó', 'leite condensado', 'granola'];

// const fruitSalad = (fruit, additional) => [...specialFruit, ...additionalItens];

// console.log(fruitSalad(specialFruit, additionalItens));

// definindo o objeto
// const character = {
//     name: 'Luke SkyWalker',
//     age: '53',
//     description: {
//       specieName: 'Human',
//       jedi: true,
//     },
//     homeWorld: {
//       name: 'Tatooine',
//       population: '200000',
//     },
//   };
  
//   // desestruturando o objeto:
//   const { name, age, homeWorld: { name: planetName }, description: { jedi } } = character;
  
  // imprimindo os valores:
//   console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);


const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};
  
const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const allInfo = {
  ...user,
  ...jobInfos,
}

const { name, age, nationality, profession, squad, squadInitials} = allInfo;

console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);
  