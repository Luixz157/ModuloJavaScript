/*
setInterval

O setInterval() executa uma função ou um trecho de código repetidamente, em um intervalo de tempo especificado, 
em milissegundos. A execução continua até que seja cancelada com clearInterval().
*/

// Suponha que há um elemento no HTML com id 'number'
const count = document.getElementById('number');

// Incrementa o valor do elemento 'number' a cada segundo (1000 milissegundos)
setInterval(() => {
    count.textContent = Number(count.textContent) + 1;
}, 1000); // 1000 milissegundos = 1 segundo

/*
setTimeout

O setTimeout() executa uma função ou um trecho de código uma única vez, após um intervalo de tempo especificado, 
em milissegundos.
*/

// Atrasar a execução da função em 3 segundos (3000 milissegundos)
setTimeout(() => {
    console.log('Executar'); // Esta mensagem será exibida no console após 3 segundos
}, 3000); // 3000 milissegundos = 3 segundos
