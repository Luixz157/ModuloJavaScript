//getElementById
/* 
Seleciona o elemnto através do seu ID
*/

const cabecalho = document.getElementById('js-cabecalho');

console.log(cabecalho);
//------------------------------------------------------------
//Boa pratica sempre colcoar js-(Nome_Desejado)
//------------------------------------------------------------
//querySelector
/* 
Retorna o primeiro elemnto que combinar
com o seu seletor CSS.
*/

const rodape = document.querySelector('.rodape');
const menu = document.querySelector('#menu');
const ultimoItem = document.querySelector('ul li:last-child');
const primeiraLista = document.querySelector('ul');

const itemMenu = primeiraLista.querySelector('li');
//Procura um li somenta dentro do ul selecionado
//------------------------------------------------------------
//querySelectorAll
/*
Retorna todos os elementos compatives
com o seletor CSS em uma lista (NodeList)
*/

const listDropdown = document.querySelectorAll('.dropdown')

console.log(listDropdown[1]);
// retorna o segundo elemento com a classe dropdown
//------------------------------------------------------------