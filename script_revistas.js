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

    // Lógica do Modal de Adicionar Revista
    const openModalButton = document.getElementById('add-revista-button');
    const closeModalButton = document.getElementById('close-modal-button');
    const modalOverlay = document.getElementById('add-revista-modal');
    if (openModalButton) openModalButton.addEventListener('click', () => modalOverlay.classList.add('active'));
    if (closeModalButton) closeModalButton.addEventListener('click', () => modalOverlay.classList.remove('active'));
    if (modalOverlay) modalOverlay.addEventListener('click', (event) => { if (event.target === modalOverlay) modalOverlay.classList.remove('active'); });

    // Define o ano atual no campo 'Ano' do formulário
    const anoInput = document.getElementById('revista-ano');
    if (anoInput) {
        anoInput.value = new Date().getFullYear();
    }
});