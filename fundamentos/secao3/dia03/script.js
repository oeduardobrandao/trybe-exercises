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

let inicio = 20;
let fim = 277;
let numerosDaSequencia = [];

for (let sequencia = inicio; sequencia <= fim; sequencia += 1){
    if (sequencia % 3 === 0) {
        numerosDaSequencia.push(sequencia);
    } 
}

if (numerosDaSequencia.length > 50) {
    console.log('Tem mais de 50 números que dividem por 3')
} else {
    console.log('Sequência muito pequena')
}