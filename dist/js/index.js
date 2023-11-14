"use strict";
var x = 10;
x = 20;
x = 5;
console.log(x);
let inferencia = 12;
let annotation = "annotation";
let nickName = "Wash";
let myAge = 27;
const isHuman = true;
console.log(typeof nickName);
console.log(typeof myAge);
console.log(typeof isHuman);
const arrayOfNumbers = [10, 20, 30];
console.log(arrayOfNumbers);
console.log(arrayOfNumbers.length.toPrecision());
console.log(nickName.toLowerCase());
arrayOfNumbers.push(40);
console.log(arrayOfNumbers);
let myTuple = [
    myAge,
    arrayOfNumbers,
    nickName,
    isHuman,
];
const user = {
    name: nickName,
    age: myAge,
};
console.log(user);
console.log(user.name.toUpperCase());
let exampleAny = 0;
exampleAny = true;
exampleAny = "test";
exampleAny = {};
exampleAny = [];
let id;
id = 1;
id = "one";
const userID = 10;
const productID = "SKU4F93";
var Size;
(function (Size) {
    Size["S"] = "Small";
    Size["M"] = "Middle";
    Size["B"] = "Big";
})(Size || (Size = {}));
const teeShirt = {
    name: "V-neck shirt",
    size: Size.B,
};
console.log(teeShirt);
let authentication;
authentication = null;
authentication = "authentication";
function sum(a, b) {
    return a + b;
}
console.log(sum(5, 5));
function sayHelloTo(name) {
    return `Hello ${name}`;
}
console.log(sayHelloTo(nickName));
function logger(msg) {
    console.log(msg);
}
logger("Test");
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
    }
    else {
        console.log(`Olá ${name}`);
    }
}
greeting(nickName);
greeting(nickName, "sir");
const sumNumbers = (nums) => {
    return nums.n1 + nums.n2;
};
console.log(sumNumbers({ n1: 1, n2: 2 }));
const multNumbers = (nums) => {
    return nums.n1 * nums.n2;
};
console.log(multNumbers({ n1: 1, n2: 2 }));
const otherNumbers = {
    n1: 5,
    n2: 10,
};
console.log(multNumbers(otherNumbers));
console.log(sumNumbers(otherNumbers));
const showNumber = (info) => {
    if (typeof info === "number") {
        return console.log(`o número é ${info}`);
    }
    console.log("Não foi passado um número");
};
showNumber(myAge);
showNumber(false);
showNumber(nickName);
const showArraysItems = (arrays) => {
    arrays.forEach((item) => {
        console.log(`item é ${item}`);
    });
};
const array1 = [1, 3, 4, 5];
const array2 = ["a", "b", "c", "d"];
const array3 = [];
const notArray = "not array";
showArraysItems(array1);
showArraysItems(array2);
showArraysItems(array3);
class User {
    name;
    role;
    isAproved;
    constructor(name, role, isAproved) {
        this.name = name;
        this.role = role;
        this.isAproved = isAproved;
    }
    showUserRole(restrict) {
        if (!restrict) {
            return `A posição do usuário é ${this.role}`;
        }
        return ("informação restrita");
    }
}
const wash = new User("Washington", "CTO", true);
console.log(wash);
console.log(wash.showUserRole(true));
