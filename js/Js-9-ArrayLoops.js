//Array oque é
/* 
É um grupo de valores geralmente
relacionados. Servem para guardarmos
diferentes valores em uma única variável.
*/

var carros = ['Fusca', 'Brasilia', 'Monza', 'Gol'];

carros[0];  // Acessa 'Fusca'
carros[2];  //Acessa 'Monza'
//------------------------------------------------------------
//Método e propriedades
var carros2 = ['Fusca', 'Brasilia', 'Monza', 'Gol'];

carros2.pop();  //Remove o ultimo item do array
carros2.push(); //Adiciona no final do Array
carros2.length; //Mostra o tamanho do Array
//------------------------------------------------------------
//For Loop
/* 
Fazem algo repetidamente até que uma
condição seja atingida.

Ele possui 3 partes
- Inicio
- Condição
- Incremento
*/
for(var numero = 0; numero < 10; numero++) {
    console.log(numero);
}
//Retorna de 0 a 9 no console
//------------------------------------------------------------
//For While

var i = 0
while (i < 10) {
    console.log(i);
    i++;
}
//Retorna de 0 a 9 no console
//------------------------------------------------------------
//Loops com Array
var carros3 = ['Fusca', 'Brasilia', 'Monza', 'Gol'];

for(var i = 0; i < carro.length; i++) {
    console.log(carros[i]);
}
//------------------------------------------------------------
//Break (Frear, Parar)

var carros4 = ['Fusca', 'Brasilia', 'Monza', 'Gol'];

for(var i = 0; i < carros.length; i++) {
    console.log(carrps[i]);
    if(carros[i] === 'Monza') {
        break;
    }
}
//------------------------------------------------------------
//forEach
/* 
E um método que executa uma funçãao
para cada item da Array

Podemos passar os seguintes parâmetros
- item      | Ele retorna o item na lista oquem tem, Pode ser qualquer no no lugar da lista
- index     | Ele retorna o numero a posição
- array     | Ele retorna o array inteiro
*/
var carros5 = ['Fusca', 'Brasilia', 'Monza', 'Gol'];
carros5.forEach(function(item) {
    console.log(item);
})