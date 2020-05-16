' use strict ';
// console.log(myName); undefined
var myName = 'Mykola';
console.log(myName);

// console.log(secondName);  Cannot access 'secondName' before initialization
let secondName = "Nike";
console.log(secondName);


const pi = 3.14;
console.log(pi);

let myCar = {
    color: 'red',
    motor: "disel",
    speed: 180
};
console.log(myCar.speed);
console.log(myCar.color);

console.log(typeof("www" + 5));
console.log("www" + 5);
console.log(typeof(+ "www"));
console.log(+ "129");

alert("Hello");
let answer = confirm("Ти тут ?");
console.log(answer);

let answerYour = prompt("Є 18?", "Yes");
console.log(answerYour);
console.log(typeof(myCar));
console.log(typeof(null));  // відома помилка продувлювало тип


let x = 5; alert( x++ );
let q = 5; alert( ++q ); 