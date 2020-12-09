/* ***************************************************************************************************** */
/* **************************************** BLOCCO DI SNACK 1 ****************************************** */
/* ***************************************************************************************************** */

// JSnack 1

// L’utente inserisce due numeri in successione, con due prompt. 
// Il software stampa il maggiore

// const userNumberOne = Number(prompt(`hey, dammi un numero?`));
// const userNumberTwo = Number(prompt(`me ne dai un altro?`));
// const stampaNumeroMaggiore = (num1, num2) => {
//     if (num1 > num2) {
//         return num1;
//     } else if (num1 < num2) {
//         return num2;
//     } else {
//         return `I valori sono uguali.`;
//     }
// }
// console.log(stampaNumeroMaggiore(userNumberOne, userNumberTwo));

/////////////////////////////////////////////

// JSnack 2

// L’utente inserisce due parole in successione, con due prompt. Controllo il numero dei caratteri delle parole. Il software stampa prima la parola più corta, poi la parola più lunga.

// const wordOne = prompt(`scrivi una parola?`);
// const wordTwo = prompt(`me ne dai una altra?`);
// const wOl = wordOne.length;
// const wTl = wordTwo.length;
// const shortestFirst = (w1, w2) => {
//     if (w1 < w2) {
//         return `${w1} ${w2}`;
//     } else if (w1 > w2) {
//         return `${w2} ${w1}`;
//     } else {
//         return `entrambe le parole hanno la stessa lunghezza`;
//     };
// }
// console.log(shortestFirst(wordOne, wordTwo));

/////////////////////////////////////////////

// JSnack 3

// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.

// ciclo for
// let sum = 0;
// for (let i = 0; i < 5; i++) {
//     let numeroUtente = Number(prompt('inserisci un numero'));
//     sum += numeroUtente;
// }
// console.log(`somma ${sum}`);
// ciclo while
// let index = 0
// while (index < 5) {
//     let numeroUtente = Number(prompt('inserisci un numero'));
//     sum += numeroUtente;
//     index++;
// }
// console.log(`somma ${sum}`);

/////////////////////////////////////////////

// JSnack 4

// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

// const userName = prompt('quale è il tuo nome?');
// const invitatiFesta = [
//     `giorgio`, 
//     `laura`, 
//     `fausto`, 
//     `lorenzo`, 
//     `dragoberto`, 
//     `willy`, 
//     `tronoDelMuori`, 
//     `qdss`,
//     `V`
// ];

// let controllo = 0;

// let index =0;
// while (index  < invitatiFesta.length) {
//     if (userName == invitatiFesta[index]) {
//         controllo++;
//     }
//     index++;
// }

// const checkCognome = (ck) => {
//     if (ck > 0) {
//         return true
//     }
// }
// // console.log(checkCognome(controllo));
// if (checkCognome(controllo) === true) {
//     console.log(`puoi entrare`);
// } else {
//     console.log(`spiacente`);
// }