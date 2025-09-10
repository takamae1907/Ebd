document.addEventListener('DOMContentLoaded', () => {
    // --- LÓGICA GERAL (TEMA E MENU RESPONSIVO) ---
    const body = document.body;
    const applyTheme = (theme) => {
        if (theme === 'dark') body.classList.add('dark-mode');
        else body.classList.remove('dark-mode');
    };
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) applyTheme(savedTheme);

    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    if (sidebarToggle && sidebar && overlay) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
            overlay.classList.toggle('active');
        });
        overlay.addEventListener('click', () => {
            sidebar.classList.remove('open');
            overlay.classList.remove('active');
        });
    }

    // --- LÓGICA DO ACCORDION ---
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(clickedHeader => {
        clickedHeader.addEventListener('click', () => {
            const panel = clickedHeader.nextElementSibling;
            const isCurrentlyActive = clickedHeader.classList.contains('active');

            // Fecha todos os outros accordions que possam estar abertos
            accordionHeaders.forEach(header => {
                if (header !== clickedHeader) {
                    header.classList.remove('active');
                    header.nextElementSibling.style.maxHeight = null;
                }
            });

            // Abre ou fecha o accordion que foi clicado
            if (isCurrentlyActive) {
                clickedHeader.classList.remove('active');
                panel.style.maxHeight = null;
            } else {
                clickedHeader.classList.add('active');
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    });

    // --- LÓGICA PARA ADICIONAR NOVO ALUNO (FUNCIONAL) ---
    const modalOverlay = document.getElementById('add-student-modal');
    const addStudentForm = document.getElementById('add-student-form');
    const openModalButton = document.getElementById('add-student-button');
    const closeModalButton = document.getElementById('close-modal-button');

    // Abrir o modal
    if (openModalButton) openModalButton.addEventListener('click', () => modalOverlay.classList.add('active'));

    // Fechar o modal
    const closeModal = () => modalOverlay.classList.remove('active');
    if (closeModalButton) closeModalButton.addEventListener('click', closeModal);
    if (modalOverlay) modalOverlay.addEventListener('click', (event) => { if (event.target === modalOverlay) closeModal(); });

    // Lidar com o envio do formulário
    if (addStudentForm) {
        addStudentForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Impede o recarregamento da página

            // 1. Pegar os valores do formulário
            const studentNameInput = document.getElementById('student-name-input');
            const classSelect = document.getElementById('student-class-select');
            const studentName = studentNameInput.value.trim();
            const classId = classSelect.value;

            if (!studentName || !classId) {
                alert('Por favor, preencha todos os campos.');
                return;
            }

            // 2. Encontrar a lista de alunos da turma correta
            const targetAccordion = document.querySelector(`.accordion-item[data-class-id="${classId}"]`);
            if (!targetAccordion) {
                console.error('Accordion para a classe selecionada não encontrado!');
                return;
            }
            const targetStudentList = targetAccordion.querySelector('.student-list');

            // 3. Criar o HTML para o novo aluno
            const newStudentHTML = `
                <div class="student-item">
                    <p class="student-name">${studentName}</p>
                    <div class="student-actions">
                        <button class="action-btn edit-btn"><i class="fa-solid fa-pencil"></i></button>
                        <button class="action-btn delete-btn"><i class="fa-solid fa-trash"></i></button>
                    </div>
                </div>`;

            // 4. Adicionar o novo aluno à lista
            targetStudentList.insertAdjacentHTML('beforeend', newStudentHTML);

            // 5. Atualizar o contador de alunos
            const countSpan = targetAccordion.querySelector('.student-count');
            let currentCount = parseInt(countSpan.textContent);
            countSpan.textContent = currentCount + 1;

            // 6. Limpar o formulário e fechar o modal
            addStudentForm.reset();
            closeModal();

            // 7. Abrir ou reajustar o accordion para mostrar o aluno adicionado
            const header = targetAccordion.querySelector('.accordion-header');
            const panel = header.nextElementSibling;
            if (!header.classList.contains('active')) {
                // Simula um clique para abrir com a lógica correta (fechando os outros)
                header.click();
            } else {
                // Se já estiver aberto, recalcula o maxHeight para a animação
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
});