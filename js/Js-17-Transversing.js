//Transversing
/*
Usado para navegar pelo nosso DOM
através de propriedades e métodos,
Basicamente serve para selecionar, pegar
uma div anterior, depois
*/

const title = document.querySelector('.titulo');

title.parentElement;               //pai desde elemento
title.parentElement.parentElement; //Pai do Pai
title.previousElementSibling;      //Elemento anterior
title.nextElementSibling;          //Proximo elemento
//------------------------------------------------------------
//Manipulando os elemntos
/*
É possivel mover ou remover elemntos no
DOM com estes métodos
*/

const item01 = document.querySelector('.item-01');
const item02 = document.querySelector('.item-02');

const titulo = document.querySelector('.titulo');

//move o elemento para o final do imte 01
item01.appendChild(item02);

//remove o titulo do item01
item01.removeChild(titulo);
//------------------------------------------------------------
//Criando novos elementos
/*
Podemos criar novos elementos com o metodo createElement();
*/

const areTitulos = document.querySelector('.area-titulos');

const novoTitulo = document.createElement('h1');

novoTitulo.innerText = 'Novo Titulo';
novoTitulo.classList.add('tinulo-novo')

areTitulos.appendChild(novoTitulo);
