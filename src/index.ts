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

// Objets literais com propriedade e valor {prop: value}
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

// Union type é o melhor jeito de criar um tipo mais complexo, usamos pipes: | para separar um tipo do outro

let id: number | string;
id = 1;
id = "one";
//id = {} - não é um tipo válido

// Type alias é quando você define uma tipagem que pode ser utilizada por outras variáveis, assim:
type identifier = number | string;
const userID: identifier = 10;
const productID: identifier = "SKU4F93";

// Enum enumera uma colection e podemos usar os dados de uma maneira mais simples.
// Tamanho de roupas
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

// Tipos literais
let authentication: "authentication" | null;
authentication = null;
authentication = "authentication";
// Authentication = "positive" - o valor é definido no tipo literal

// Funções
function sum(a: number, b: number): number {
  // Sem a tipagem fica any no parametro
  return a + b;
}
console.log(sum(5, 5));
function sayHelloTo(name: string): string {
  // Tipando com string
  return `Hello ${name}`;
}
console.log(sayHelloTo(nickName));

function logger(msg: string): void {
  // Funcao sem retorno
  console.log(msg);
}
logger("Test");

function greeting(name: string, greet?: string) {
  // Argumentos opcionais - safe access
  if (greet) {
    console.log(`Olá ${greet} ${name}`);
  } else {
    console.log(`Olá ${name}`);
  }
}
greeting(nickName);
greeting(nickName, "sir");

// Interfaces
interface MathFunctionParams {
  n1: number;
  n2: number;
}

const sumNumbers = (nums: MathFunctionParams) => {
  return nums.n1 + nums.n2;
};
console.log(sumNumbers({ n1: 1, n2: 2 }));

const multNumbers = (nums: MathFunctionParams) => {
  return nums.n1 * nums.n2;
};
console.log(multNumbers({ n1: 1, n2: 2 }));

const otherNumbers: MathFunctionParams = {
  n1: 5,
  n2: 10,
};
console.log(multNumbers(otherNumbers));
console.log(sumNumbers(otherNumbers));

// Narrowing ou
// Checagem de tipos
// Fiz no greeting com o safe access
const showNumber = (info: number | boolean) => {
  if (typeof info === "number") {
    return console.log(`o número é ${info}`);
  }
  console.log("Não foi passado um número");
};
showNumber(myAge);
showNumber(false);
showNumber(nickName); //tipo errado

// Generics é tipagem generica
const showArraysItems = <TArraysItems>(arrays: TArraysItems[]) => {
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
//showArraysItems(notArray); //não executa pq não é uma array, mas sim uma string

//classes
class User {
  name;
  role;
  isAproved;

  constructor(name: string, role: string, isAproved: boolean) {
    this.name = name;
    this.role = role;
    this.isAproved = isAproved;
  }
  showUserRole(restrict: boolean):string {
    if (!restrict) {
     return `A posição do usuário é ${this.role}`;
    }return ("informação restrita");
  }
}

const wash = new User("Washington", "CTO", true);
console.log(wash);
console.log(wash.showUserRole(true));
