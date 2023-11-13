"use strict";
// Tipagem correta
var x = 10;
x = 20;
x = 5;
console.log(x);
// Inferencia x annotation: são formas de definir valor com tipo
// Inferencia tem menos código
let inferencia = 12;
// Annotation tem o código escrito
let annotation = "annotation";
// Tipos básicos
let nickName = "Wash";
let myAge = 27;
const isHuman = true;
// Objetos são com letra maíuscula, tipos são com letras minusculas
// Quando usa typeof ele mostra como devemos utilizar o tipo
console.log(typeof nickName);
console.log(typeof myAge);
console.log(typeof isHuman);
// Tipando objetos
const arrayOfNumbers = [10, 20, 30];
console.log(arrayOfNumbers);
console.log(arrayOfNumbers.length.toPrecision());
// o typescript não permite: console.log(myNumbers.toLowerCase)
console.log(nickName.toLowerCase());
arrayOfNumbers.push(40);
console.log(arrayOfNumbers);
// Tuplas - são diferentes tipos que devem estar na mesma ordem na hora de utilizar
let myTuple = [
    myAge,
    arrayOfNumbers,
    nickName,
    isHuman,
];
// Objetis literais com propriedade e valor {prop: value}
const user = {
    name: nickName,
    age: myAge,
};
console.log(user);
console.log(user.name.toUpperCase());
// Não é possivel adicionar nova propriedade, como no js
// É possível tipar com any, mas isso vai contra a filosofia do tsc, é claro. porém existe essa possibilidade
// Existem saidas para quando o tipo de dado é mais de um, que não envolvem utilizar o any
// any costuma ser usado para que a compilação não dê erro
let exampleAny = 0;
exampleAny = true;
exampleAny = "test";
exampleAny = {};
exampleAny = [];
// union type é o melhor jeito de criar um tipo mais complexo, usamos pipes: | para separar um tipo do outro
let id;
id = 1;
id = "one";
const userID = 10;
const productID = "SKU4F93";
// enum enumera uma colection e podemos usar os dados de uma maneira mais simples.
//tamanho de roupas
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
