document.addEventListener('DOMContentLoaded', () => {
    // Lógica do Seletor de Tema (Dark Mode) - REPETIDO PARA INDEPENDÊNCIA
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            // O theme-toggle não existe nesta página, então não tentamos marcá-lo
        } else {
            body.classList.remove('dark-mode');
        }
    };
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) applyTheme(savedTheme);
    // Não há seletor de tema nesta página, então não adicionamos o listener

    // Lógica Específica da Página de Frequência
    const datePicker = document.getElementById('attendance-date');
    if (datePicker) {
        const today = new Date();
        datePicker.value = today.toISOString().split('T')[0];
    }
});