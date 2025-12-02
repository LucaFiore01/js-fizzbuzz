
// stampiamo in log i numeri da 1 a 100 

// usiamo il ciclo FOR e assegnamo ai multipli di tre il nome 'Fizz'
// all' interno del ciclo FOR, assegname alle condizioni il console.log con il nome Fizz (multipli di 3) ed il nome Buzz (multipli di 5)
// a loro volta assegnamo alle condizioni il console.log FizzBuzz (per i multipli di 3 e di 5) 


for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }



}








