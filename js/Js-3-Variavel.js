/*
Variáveis

Responsáveis por guardar dados na memória. 
Sempre se inicia com palavra var, let ou const
*/ 

var marcaCarro = 'Ferrari';

let anoCarro = 2021;

const carroVendido = false;

console.log(marcaCarro);

//------------------------------------------------------------
//Definir Variavel sem Valor
var carro;

console.log(carro);

//------------------------------------------------------------
//Regras para criar o Nome das variáveis
/*
- Os nomes podem iniciar com $, _, ou letras
- Case sensitive - 'carro' é diferente de 'Carro'
- Não utilizar palavras reservadas: https://www.w3schools.com/js/js_reserved.asp
- Camel Case - por padrão criamos variáveis assim : precoCarro
*/

//------------------------------------------------------------
//Nomes válidos                 //Nomes Inválidos
let $carro;                     let &carro;
let _marca;                     let function;
let carrosVendido;              let 2carroVendido;

//------------------------------------------------------------
//Ordem da Declaração

console.log(carro);             let marcas = 'Chevrolet';
let carro = 'Fusca';            console.log(marca);
//Retorna undefined             //Retorna 'Chevrolet'

//------------------------------------------------------------
//Alterar valor da variável

var carro = 'Fusca';
carro = 'Kombi';
// Váriavel carro esta valendo 'Kombi agora.

let marca = 'Chevrolet';
marca = 'Ferrari';
//Váriavel marca esta valendo 'Ferrari' agora.

const carrVendido = true;
carro Vendido = false;
//Irá retornar erro

//OBS variavel tipo Const não se altera valor
//Ex:
const pi = 3.14;

let resultado = pi * 100;
console.log(resultado);
//------------------------------------------------------------