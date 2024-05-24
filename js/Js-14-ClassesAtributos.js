//classList
/*
Retorna uma lista com as classe que
existem no elemento. é possível
adicionar, remover e verificar se existe
uma classe no elemento
*/

const button = document.getElementById("js.btn");

button.classList;                               //Lista de classes do elemento
button.classList.add("active");                 //Adiciona a classe
button.classList.remove("active");              //Remove a Classe
button.classList.toggle("active");              //Add/Remove a classe
button.classList.contains("active");            //Verifica se existe a classe
button.classList.replace("active", "ativo");    //Substitui a classe
//------------------------------------------------------------
//getAtribute & setAtrtribute
/*
Métodos que retornam ou definem de
acordo com o atributo selecionado
*/
const image = document.getElementById("js-img");

image.getAttribute("src");                      //Pega valor de algum atributo
image.setAttribute("alt", "Texto alternativo"); //Qual valor eu quero alterar, atribuir