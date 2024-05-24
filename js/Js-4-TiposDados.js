//Tipos de dados

var carro = 'Gol';       // String

var anoCarro = 2021;     //Number

var carroVendido = true; //Boolean

var qtdRodas;            //Undefined

var carroAutomatico;     //Null

var Simbolo = Symbol()   //Symbol

var ObjetoCarro = {};    //Object

//------------------------------------------------------------
/*
Exemplo:

//Object
let infoormacoesCarro = {
    nome: 'Gol',
    anoFabricacao: 2021,
    tipoCambio: 'Manual'
}
console.log(infoormacoesCarro);
*/
//------------------------------------------------------------
//Verificar Tipo de dado
//Pode declarar ela e não atribui nenhum valor inicial.
var carro = 'Gol';
console.log(typeof carro)

//retorna string
//------------------------------------------------------------
//Concater uma String com numero
let carro = 'Fiat';
let ano = 2021;
console.log("O carro com nome tal e tal" + carro + " Espaço aqui " + ano);

//Template String
//Versão mais recente Update

let carro = 'Gol';
let anoCarro = 2021;
let frase = `O ${carro} foi fabricado em ${anoCarro}`;
console.log(frase);
//------------------------------------------------------------