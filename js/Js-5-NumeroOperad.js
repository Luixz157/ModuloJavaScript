//Números

let idade = 29;

let anoNascimento = 1991;

let pi = 3.14;

//------------------------------------------------------------
//Operadores Aritméticos

let soma = 5 + 10;
//Return: 15

let subtracao = 10 - 5;
//Return: 5

let multiplicacao = 10 * 5;
//Return: 50

let divisao = 10 / 2;
//Return: 2

let resto = 10 % 2;
//Return: 0

let expoente = 2 ** 4;
//Return: 16

//------------------------------------------------------------
//NaN (Not a Number)

let numero = 10;
let medidada = 'litros';

let qtdCombustivel = numero + medida; //10litros

let resultado = qtdCombustivel / 5;
//Vai retornar NanN(Not a Number)
//------------------------------------------------------------
//Ordem Operação

let resul = 10 + 3 * 6;             //28

let result2 = (10 - 3) * 6;         //42

let result3 = 10 / 2 * 7;           //35

let result4 = 20 + 20 * 3 + 5 / 2;  //82.5
//------------------------------------------------------------
// Operadores Unários
let incremetar = 10;

console.log(incremetar++);  //10 
console.log(incremetar--);  //10
console.log(incremetar);    //11 ou 9

let incremetar02 = 10

console.log(++incremetar02)  //11
console.log(--incremetar02); //9
console.log(incremetar02)    //11
