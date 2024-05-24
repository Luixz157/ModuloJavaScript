// Seleciona o botão que abre o modal
const btnModal = document.querySelector('.js-open-modal');
// Seleciona o botão que fecha o modal
const btnCloseModal = document.querySelector('.js-close-modal');
// Seleciona o elemento modal
const modal = document.getElementById('js-modal');

// Função para abrir o modal
function openModal() {
    modal.classList.add('active'); // Adiciona a classe 'active' ao modal, tornando-o visível
}

// Função para fechar o modal
function closeModal() {
    modal.classList.remove('active'); // Remove a classe 'active' do modal, ocultando-o
}

// Adiciona um evento de clique ao botão de abrir modal
btnModal.addEventListener('click', openModal);

// Adiciona um evento de clique ao botão de fechar modal
btnCloseModal.addEventListener('click', closeModal);
