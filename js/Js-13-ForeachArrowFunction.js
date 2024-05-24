//forEach
/*
Constantemente iremos selecionar uma
lista de itens do DOM. A melhor forma de
interagir com eles é usando o método
forEach
*/
const allDropdowns = document.querySelectorAll('.js-dropdown');

allDropdowns.forEach(function(item){
    console.log(item);
})
//------------------------------------------------------------
//Parametros do forEach
/*
O primeiro parametro e a funcao que sera
ativida a cada item. Esta função pode
receber 3 parâmetro.

-teimAtual
-Index
-Array
*/
const allDrops = document.querySelectorAll('.js-drop');

allDrops.forEach(function(itemAtual, index, array) {
    console.log(itemAtual); //Item atual do loop
    console.log(index);     //O numero do index
    console.log(array);     // Array completa
})
//------------------------------------------------------------
//Arrow function
/*
Sibtaxe curta em relação a funtion
expression. Basta remover a palavra
funtion e adicionar a fat arrow => após 
os argumentos, forma reduzida .
*/

const allDroping = document.forEach((item) => {
    console.log(item);
})
//Se não tiver nenhum argumento deixe somente ()
//Se houver somente um você pode tirar dos parentese
//Se houver varios é dentros dos parenteses e virgula para separar
//------------------------------------------------------------
