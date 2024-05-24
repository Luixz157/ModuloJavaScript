//Objetos Oque é
/* 
Conjunto de variaves e funções, que são
chamadas de propriedade e método.
*/

var carro = {
    nome: 'Lamborghini',
    ano: 2021,
    cor: 'Branco',
    automatico:true
}

//Acessando meu Objeto dentro do carro
carro.nome; //'Lamborghini'
carro.cor;  // 'Branca'
//------------------------------------------------------------
//Criar um Objeto
//Objeto é criado utilizando as chaves {}

var carro = {};
var pessoa = {};

console.log(typeof carro); //object
//------------------------------------------------------------
//Acessando propriedades de um objeto
var section = {
    bg: '#f5f5f5',
    width: '100%',
    height: 80
}

var bg = section.bg; //f5f5f5
