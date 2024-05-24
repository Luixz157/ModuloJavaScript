// Seleciona todos os elementos que possuem a classe 'js-accordion'
const accordion = document.querySelectorAll('.js-accordion');

// Itera sobre cada elemento do acordeão
accordion.forEach(acc => {
    // Adiciona um evento de clique a cada elemento
    acc.addEventListener('click', () => {
        // Seleciona o elemento pai do item do acordeão clicado
        let pai = acc.parentElement;

        // Alterna a classe 'active' no elemento pai
        pai.classList.toggle('active');
    });
});