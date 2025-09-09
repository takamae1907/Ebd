document.addEventListener('DOMContentLoaded', () => {
    // Lógica do Seletor de Tema (Dark Mode)
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            if (themeToggle) themeToggle.checked = true;
        } else {
            body.classList.remove('dark-mode');
            if (themeToggle) themeToggle.checked = false;
        }
    };
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) applyTheme(savedTheme);
    if (themeToggle) {
        themeToggle.addEventListener('change', () => {
            if (themeToggle.checked) {
                body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark');
            } else {
                body.classList.remove('dark-mode');
                localStorage.setItem('theme', 'light');
            }
        });
    }

    // Lógica do Modal de Adicionar Aluno
    const openModalButton = document.getElementById('add-student-button');
    const closeModalButton = document.getElementById('close-modal-button');
    const modalOverlay = document.getElementById('add-student-modal');
    if (openModalButton) openModalButton.addEventListener('click', () => modalOverlay.classList.add('active'));
    if (closeModalButton) closeModalButton.addEventListener('click', () => modalOverlay.classList.remove('active'));
    if (modalOverlay) modalOverlay.addEventListener('click', (event) => { if (event.target === modalOverlay) modalOverlay.classList.remove('active'); });
});