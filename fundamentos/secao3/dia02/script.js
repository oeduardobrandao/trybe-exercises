// let times = ['Corinthians', 'Barcelona', 'Real Madrid'];

// times.push('Chelsea');
// times.unshift('Borussia Dortmund')

// for (i = 0; i < times.length; i += 1) {
//     console.log(times[i]);
// }

// let times = ['Corinthians', 'Barcelona', 'Real Madrid'];

// times.push('Chelsea');
// times.unshift('Borussia Dortmund')

// console.log(times);

// times.shift();
// times.pop();


// console.log(times);

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let menuServices = menu[menu.indexOf('Serviços')];

// console.log(menuServices);


// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let indexOfPortfolio = menu.indexOf('Portfólio');

// console.log(indexOfPortfolio);


// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

// menu.push('Contato');

// console.log(menu)


// let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

// for (let i = 0; i < groceryList.length; i += 1) {
//     console.log(groceryList[i])
// }


// let numeros = [1,2,3,4,5];
// for(let numero of numeros) {
//   console.log(numero);
// }


// let word = 'Hello';
// for (let letter of word) {
//   console.log(letter);
// }

// let arrOfNumbers = [10, 20, 30];
// for (let sum of arrOfNumbers) {
//   sum += 1;
//   console.log(sum);
// }


// let names = ['João', 'Maria', 'Antônio', 'Margarida'];
// for (let name of names) {
//     console.log(name)
// }



// Lidando com Arrays

// Iremos utilizar esse array para realizar os próximos exercícios.


// for (let numeros of numbers) {
    //     console.log(numeros)
    // }
    
// let soma = 0;

// for (i = 0; i < numbers.length; i += 1) {
    //     soma = soma + numbers[i];
    // }
    
    // let media = soma / numbers.length
    
    // if (media > 20) {
        //     console.log('Valor maior que 20')
        // } else {
            //     console.log('Valor menor ou igual a 20')
            // }
            
            // for (let i = 0; i < numbers.length; i+= 1) {
                //     if (numbers[i] >= )
                // }
                
                // numbers
                
//1. Jogada
// let primeiraJogada = [12, 34, 6, 24, 28, 50];

//2. Criando o sorteio

// Criação de números aleatórios
// let primeiroNumeroSorteado = Math.floor(Math.random() * 60) + 1;
// let segunddoNumeroSorteado = Math.floor(Math.random() * 60) + 1;
// let terceiroNumeroSorteado = Math.floor(Math.random() * 60) + 1;
// let quartoNumeroSorteado = Math.floor(Math.random() * 60) + 1;
// let quintoNumeroSorteado = Math.floor(Math.random() * 60) + 1;
// let sextoNumeroSorteado = Math.floor(Math.random() * 60) + 1;

// let megaSenaNumeros = [primeiroNumeroSorteado, segunddoNumeroSorteado, terceiroNumeroSorteado, quartoNumeroSorteado, quintoNumeroSorteado, sextoNumeroSorteado];

// //3. Percorrendo os números do array da pessoa e da megaSena;

// for (let i = 0; i < primeiraJogada.length; i += 1) {
    //     console.log('Número da minha jogada: ' + primeiraJogada[i])
    // }
    
    // for (let iMegaSena = 0; iMegaSena < megaSenaNumeros.length; iMegaSena += 1) {
        //     console.log('Número da jogada: ' + megaSenaNumeros[iMegaSena])
        // }
        
        //4. Comparando

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Utilizando for, descubra qual o maior valor contido no array e imprima-o;

// let maiorNumero = numbers[0];
// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > maiorNumero) {
//         maiorNumero = numbers[i]
//     }
// }

// console.log(maiorNumero)

// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > numbers[i]){
//         console.log(numbers[i])
//     }
// }

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”; 

// let impares = [];

// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 !== 0){
//         impares.push(numbers[i]);
//     } 
// }

// if (impares.length > 0) {
//     console.log(impares.length)
// } else {
//     console.log('Nenhum valor ímpar encontrado')
// }


// Utilizando for, descubra qual o menor valor contido no array e imprima-o; 

// let menorNumero = numbers[0];

// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] < menorNumero) {
//         menorNumero = numbers[i];
//     }
// }

// console.log(menorNumero)


// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado; 

// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.


// let vinteCinco = [];

// for (let i = 1; i <= 25; i += 1){
//     vinteCinco.push(i)
// }

// // console.log(vinteCinco)

// for (let i = 0; i < vinteCinco.length; i += 1) {
//     console.log(vinteCinco[i], '/', 2, '=', vinteCinco[i] / 2)
// }