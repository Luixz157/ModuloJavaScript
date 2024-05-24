//Eventos
//addEventListerner
/*
Adiciona uma função a um
elemtno. Esta chama será
ativada quando o certo evento
 ocorrer neste elemento
*/
const button = document.querySelector("button");

button.addEventListener("click", () => {
    console.log("clicou");
});
//------------------------------------------------------------
//Callback
/*
É uma boa prática separar a 
função de callback do
addEventListener()
*/
const button2 = document.querySelector('Button');

function eventClick() {
    console.log('clicou');
}

button.addEventListener("click", eventClick);
//------------------------------------------------------------
//Event e suas propriedades
/*
O event é um parâmetro qye você
pode passar na função de callback
para ter acesso a todas as
propriedades daquele evento que
executou no elemento.
*/
const button3 = document.querySelector('button');
function eventoClick(event) {
    console.log(event.currentTarget);   //O elemento, Item
    console.log(event.target);          //Aonde foi clicado
    console.log(event.type);            //Tipo do evento executado
    console.log(event.textContent);     //Pega somente o texto dentro do btn 
}

button3.addEventListener('click', eventoClick);
//------------------------------------------------------------
//preventDefault
/*
Previne o comportamento padrão
do evento de um elemento no
browser.
*/
//Ex: se eu quisse que ao inves de mandar para aonde já vai mandar para outro lugar
//Utilizado bastante com formulario

const link = document.querySelector("a");

function eventsClcik(event) {
    event.prventDefault();
    console.log(event.currentTarget.href);
}

link.addEventListener("click", eventsClcik);
//------------------------------------------------------------
//Diferentes eventos
/*
- Click
- Sroll
- MouseEnter
- Keydown
- MouseLeave
- etc...
*/
const buton = document.querySelector("button");

function callBack(event) {
    console.log(event.type);
}

button.addEventListener("click",callBack);

button.addEventListener("mouseenter",callBack);

button.addEventListener("mouseleave",callBack);

button.addEventListener("keydown",callBack);