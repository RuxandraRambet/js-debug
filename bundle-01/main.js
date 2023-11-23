/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i > 5; i++) {
    console.log(i);
}
/* ciclo for che in questo caso dovrebbe stampare in console i numeri
da 0 a 4 ,a causa però di un'errore nella condizione (l'operatore relazionale dovrebbe essere <)
questo non avviene.*/ 

// SOLUZIONE CORRETTA:
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }


// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 = 0) {
        return num + 5;
    }
    return num;
}

/* funzione che in questo caso dovrebbe aggiungere il numero 5 al (num) passato come argomento
solo se (num) è pari. L'errore qui è l'utilizzo di un solo = che non svolge un ruolo comparativo
che è quello che dovrebbe avere in questo caso. Il modo corretto sarebbe usare l'operatore di identità(===)
*/ 

//SOLUZIONE CORRETTA:

// function addIfEven(num) {
//     if (num % 2 === 0) {
//         return num + 5;
//     }
//     return num;
// }

// ESERCIZIO 3
function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}
/* funzione che in questo caso, considerando il nome della funzione(loopToFive), dovrebbe, 
attraverso un ciclo for, stampare in console i numeri da 0 a 5. Questo non avviene perché
l'operatore utilizzato è < invece dovrebbe essere <=;
Inoltre, c'è anche un errore di sintassi: l'uso della "," invece di ";"
*/ 

//SOLUZIONE CORRETTA
// function loopToFive() {
//     for (let i = 0; i <= 5; i++) {
//         console.log(i);
//     }
// }

// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]

/* 
Funzione che in questo caso dovrebbe, dato un array di numeri, restituire un nuovo array contenente
soltanto i numeri pari presenti nell'array di partenza

Errore 1: in quanto l'intenzione è quella di ciclare l'intero array bisogna togliere "-1"
altrimenti l'ultimo elemento dell'array non verrà considerato(riga 72);
Errore 2: all'interno del ciclo for, dopo i++ non bisogna mettere ";"
Errore 3: anche in questo caso bisogna utilizzare l'operatore d'identità (all'interno della condizione);
Errore 4: un'altro errore è quello di mettere ";" dopo la condizione (riga 73)
Errore 5: il push dovrebbe riferirsi all'indice dell'array quindi dovremmo avere push(numbers[i])
Errore 6: la stessa cosa vale all'interno della condizione, dovremmo avere numbers[i] così da poter controllare
se ogni singolo elemento dell'array è divisibile per 2
Errore 7: il return andrebbe messo fuori dal ciclo for
*/ 
// SOLUZIONE CORRETTA
// function displayEvenNumbers() {
//     let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//     let evenNumbers = [];
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 === 0) {
//             evenNumbers.push(numbers[i]);
//         }
//     }
//     return evenNumbers;
// }
// console.log(displayEvenNumbers());



