// Seleciona todos os links dentro dos itens da lista de navegação
const LinkSection = document.querySelectorAll('.js-nav li a');

// Função que rola suavemente para a seção correspondente
function scrollToSection(event) {
    event.preventDefault(); // Previne o comportamento padrão do link

    // Corrige a ortografia de 'getAttribute'
    const href = event.currentTarget.getAttribute('href');

    // Seleciona a seção correspondente ao href do link
    const section = document.querySelector(href);

    // Obtém a posição inicial da seção em relação ao topo do documento
    const initPosition = section.offsetTop;

    // Rola suavemente para a posição da seção, ajustando por 80 pixels
    window.scrollTo({
        top: initPosition - 80,
        behavior: 'smooth'
    });
}

// Adiciona um evento de clique para cada link de navegação
LinkSection.forEach(link => {
    link.addEventListener('click', scrollToSection);
});
