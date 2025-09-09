document.addEventListener('DOMContentLoaded', () => {
    // Lógica do Seletor de Tema (Dark Mode)
    // Este seletor não existe nesta página, mas a lógica aplica o tema salvo.
    const body = document.body;
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    };
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) applyTheme(savedTheme);

    // Lógica do Modal de Adicionar Classe
    const openModalButton = document.getElementById('add-classe-button');
    const closeModalButton = document.getElementById('close-modal-button');
    const modalOverlay = document.getElementById('add-classe-modal');

    if (openModalButton) openModalButton.addEventListener('click', () => modalOverlay.classList.add('active'));
    if (closeModalButton) closeModalButton.addEventListener('click', () => modalOverlay.classList.remove('active'));
    if (modalOverlay) modalOverlay.addEventListener('click', (event) => { if (event.target === modalOverlay) modalOverlay.classList.remove('active'); });
});