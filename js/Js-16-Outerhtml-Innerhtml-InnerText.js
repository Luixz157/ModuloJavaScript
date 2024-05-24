//OuterHTML, innerHTML e innerText
/*
Propriedades que retornam uma string
 contendo o html ou texto.
*/
const titulo = document.querySelector('.titulo');

console.log(titulo.outerHTML); //todo html do elemento
console.log(titulo.innerHTML); //html interno
console.log(titulo.innerText); //texto, sem tags

titulo.innerText = '<h1>Novo Titulo</h1>'; //A tag vai como texto
titulo.innerHTML = '<h1>Novo Titulo</h1>'; //A tag é renderizada
//------------------------------------------------------------