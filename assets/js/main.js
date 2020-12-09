/* ***************************************************************************************************** */
/* **************************************** BLOCCO DI SNACK 1 ****************************************** */
/* ***************************************************************************************************** */

// JSnack 1

// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore
const userNumberOne = prompt(`hey, dammi un numero?`);
const userNumberTwo = prompt(`me ne dai un altro?`);
const stampaNumeroMaggiore = (num1, num2) => {
    if (num1 > num2) {
        return num1;
    } else if (num1 < num2) {
        return num2;
    } else {
        return `I valori sono uguali.`;
    }
}
console.log(stampaNumeroMaggiore(userNumberOne, userNumberTwo));

/////////////////////////////////////////////

// JSnack 2

