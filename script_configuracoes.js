document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const root = document.documentElement;

    // --- LÓGICA DO SELETOR DE TEMA (DARK MODE) ---
    const themeToggle = document.getElementById('theme-toggle');

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
    if (savedTheme) {
        applyTheme(savedTheme);
    }

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

    // --- LÓGICA DA COR DE DESTAQUE ---
    const colorSwatches = document.querySelectorAll('.color-swatch');

    const applyAccentColor = (color) => {
        root.style.setProperty('--accent-color', color);
        // Atualiza a seleção visual
        colorSwatches.forEach(swatch => {
            swatch.classList.remove('selected');
            if (swatch.dataset.color === color) {
                swatch.classList.add('selected');
            }
        });
    };

    const savedColor = localStorage.getItem('accentColor');
    if (savedColor) {
        applyAccentColor(savedColor);
    }

    colorSwatches.forEach(swatch => {
        swatch.addEventListener('click', () => {
            const newColor = swatch.dataset.color;
            applyAccentColor(newColor);
            localStorage.setItem('accentColor', newColor);
        });
    });

    // --- LÓGICA DO BOTÃO SALVAR ---
    const saveButton = document.getElementById('save-settings-button');
    if (saveButton) {
        saveButton.addEventListener('click', () => {
            // Em uma aplicação real, aqui você pegaria os valores dos inputs e salvaria.
            alert('Configurações salvas com sucesso!');
        });
    }
});