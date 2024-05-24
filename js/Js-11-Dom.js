//Oque é o DOM? (Document Object Model)
/* 
É uma interface que representa nosso 
documento HTML. Com ele é possivel a 
gente manipular a estrutura, estilo e
conteudo neste documento.
*/

console.log(window);
//Window é o objeto global do navegador que possui 
// diferentes métodos e propriedades.

console.log(window.innerWidth);
// retorna a largura do navegador

console.log(window.alert('Isto aqio é o alerta pelo window'));
// Vai alerta no navegador

//------------------------------------------------------------
//Window e Document
/* 
São objetos principais do DOM, boa
parte
da manipulação é feita através dos seus métodos e propriedades
*/
window.alert('Isto é um alerta');
alert('outro alerta');

document.querySelector('h2');   //Seleciona o 1° h2
document.body;                  //Retorna o Body
//------------------------------------------------------------