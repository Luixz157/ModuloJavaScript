/*
localStorage

localStorage é usado para armazenar dados que persistem mesmo após o fechamento do navegador. 
Os dados armazenados no localStorage não têm data de expiração.
*/

// Armazenando um item no localStorage
localStorage.setItem('Categoria', 'Caminhoes');

// Recuperando e exibindo o item armazenado no localStorage
console.log(localStorage.getItem('Categoria')); // Imprime 'Caminhoes' no console

// Removendo um item do localStorage
// localStorage.removeItem('Categoria'); // Descomente esta linha para remover o item 'Categoria' do localStorage

/*
sessionStorage

sessionStorage é usado para armazenar dados apenas durante a sessão da página. 
Os dados são perdidos quando a aba do navegador é fechada.
*/

// Armazenando um item no sessionStorage
sessionStorage.setItem('Categoria', 'Motos');

// Recuperando e exibindo o item armazenado no sessionStorage
console.log(sessionStorage.getItem('Categoria')); // Imprime 'Motos' no console

// Removendo um item do sessionStorage
// sessionStorage.removeItem('Categoria'); // Descomente esta linha para remover o item 'Categoria' do sessionStorage
