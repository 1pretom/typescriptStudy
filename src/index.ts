// Tipagem correta
var x: number = 10;

x = 20;

x = 5;

console.log(x);

// Inferencia x annotation: são formas de definir valor com tipo

// Inferencia tem menos código
let inferencia = 12;

// Annotation tem o código escrito
let annotation: string = "annotation";

// Tipos básicos
let nickName: string = "Wash";
let myAge: number = 27;
const isHuman = true;

// Objetos são com letra maíuscula, tipos são com letras minusculas

// Quando usa typeof ele mostra como devemos utilizar o tipo
console.log(typeof nickName);
console.log(typeof myAge);
console.log(typeof isHuman);

// Tipando objetos

const arrayOfNumbers: number[] = [10, 20, 30];
console.log(arrayOfNumbers);
console.log(arrayOfNumbers.length.toPrecision());
// o typescript não permite: console.log(myNumbers.toLowerCase)
console.log(nickName.toLowerCase());
arrayOfNumbers.push(40);
console.log(arrayOfNumbers);

// Tuplas - são diferentes tipos que devem estar na mesma ordem na hora de utilizar

let myTuple: [number, number[], string, boolean] = [
  myAge,
  arrayOfNumbers,
  nickName,
  isHuman,
];

// Objetis literais com propriedade e valor {prop: value}
const user: { name: string; age: number } = {
  name: nickName,
  age: myAge,
};
console.log(user);
console.log(user.name.toUpperCase());
// Não é possivel adicionar nova propriedade, como no js

// É possível tipar com any, mas isso vai contra a filosofia do tsc, é claro. porém existe essa possibilidade
// Existem saidas para quando o tipo de dado é mais de um, que não envolvem utilizar o any
// any costuma ser usado para que a compilação não dê erro

let exampleAny: any = 0;
exampleAny = true;
exampleAny = "test";
exampleAny = {};
exampleAny = [];

// union type é o melhor jeito de criar um tipo mais complexo, usamos pipes: | para separar um tipo do outro

let id: number | string;
id = 1;
id = "one";
//id = {} - não é um tipo válido

// type alias é quando você define uma tipagem que pode ser utilizada por outras variáveis, assim:
type identifier = number | string;
const userID: identifier = 10;
const productID: identifier = "SKU4F93";

// enum enumera uma colection e podemos usar os dados de uma maneira mais simples.
//tamanho de roupas
enum Size {
  S = "Small",
  M = "Middle",
  B = "Big",
}
const teeShirt = {
  name: "V-neck shirt",
  size: Size.B,
};
console.log(teeShirt);
