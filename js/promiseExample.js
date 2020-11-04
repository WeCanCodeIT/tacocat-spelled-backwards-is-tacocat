/*
const getEvenRandomNumberBetweenTwoAndTen = new Promise((resolve, reject) => {
  const randomNumber = Math.floor(Math.random * 10 + 1)
  const isEven = number => number % 2 === 0

  isEven(randomNumber)
    ? resolve(`Your random even number is ${randomNumber}`)
    : reject(`Number returned was odd.`)
})

getEvenRandomNumberBetweenTwoAndTen
  .then(res => console.log(res))
  .catch(err => console.error(err))

*/

const getEvenRandomNumberBetweenTwoAndTen = new Promise((resolve, reject) => {
    const isEven = number => number % 2 === 0;

    const randomNumber = Math.floor((Math.random() * 10) + 1);
    for (let i = 0; i < 1000000000; i++) {
        1 + 1;
    }
    if (isEven(randomNumber)) {
        resolve(`Your random even number is ${randomNumber}`);
    } else {
        reject(`Number returned was odd.`);
    }
});

getEvenRandomNumberBetweenTwoAndTen
    .then(response => console.log(response))
    .catch(error => console.error(error))