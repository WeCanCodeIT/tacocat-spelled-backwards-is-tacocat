const blockingGetEvenRandomNumberBetweenTwoAndTen = (resolve, reject) => {
    const isEven = number => number % 2 === 0;

    const randomNumber = Math.floor((Math.random() * 10) + 1);
    for (let i = 0; i < 4000000000; i++) {
        1 + 1;
    }
    if (isEven(randomNumber)) {
        resolve(`Your random even number is ${randomNumber}`);
    } else {
        reject(`Number returned was odd.`);
    }
}

const asyncPromiseGetEvenRandomNumberBetweenTwoAndTen = new Promise((resolve, reject) => {
    const isEven = number => number % 2 === 0;

    const randomNumber = Math.floor((Math.random() * 10) + 1);
    for (let i = 0; i < 4000000000; i++) {
        1 + 1;
    }
    if (isEven(randomNumber)) {
        resolve(`Your random even number is ${randomNumber}`);
    } else {
        reject(`Number returned was odd.`);
    }
});

console.log("Beginning of a 'blocking' function.")
blockingGetEvenRandomNumberBetweenTwoAndTen(response => console.log(response), error => console.error(error));
console.log("End of 'blocking' function.")
console.log("==========================================================\n");
console.log("Beginning of 'async' promise.")
asyncPromiseGetEvenRandomNumberBetweenTwoAndTen
    .then(response => console.log(response))
    .catch(error => console.error(error))
console.log("Stuff that is going on while the promise is waiting to be fulfilled.")