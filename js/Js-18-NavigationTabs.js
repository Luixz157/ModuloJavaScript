// Seleciona todos os links dentro dos itens da lista de navegação
const navTabs = document.querySelectorAll('.js-nav-tabs li a');
// Seleciona todos os elementos das abas
const tabPane = document.querySelectorAll('.js-tab-pane');

// Exibe a lista de elementos das abas no console
console.log(tabPane);

// Adiciona um evento de clique a cada link de navegação
navTabs.forEach((nav, index) => {
    nav.addEventListener('click', (event) => {
        event.preventDefault(); // Previne o comportamento padrão do link

        // Remove a classe 'active' de todos os links de navegação
        navTabs.forEach(itemNav => {
            itemNav.classList.remove('active');
        });

        // Remove a classe 'active' de todos os elementos das abas
        tabPane.forEach(tab => {
            tab.classList.remove('active');
        });

        // Adiciona a classe 'active' ao link de navegação clicado
        nav.classList.add('active');
 
        // Adiciona a classe 'active' ao elemento da aba correspondente
        tabPane[index].classList.add('active');
    });
});

// Obs: para adicionar animações suaves, utilize @keyframes no CSS
// Display none e display block não se aplicam a transition
