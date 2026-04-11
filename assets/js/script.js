/**
 * script.js - Clínica Vida & Saúde
 * Responsável pela validação do formulário e efeitos de interface.
 */

document.addEventListener('DOMContentLoaded', function () {
    
    // 1. Validação do Formulário (Padrão Bootstrap 5)
    const form = document.getElementById('formContato');
    
    if (form) {
        form.addEventListener('submit', function (event) {
            // Impede o envio real (requisito do projeto: sem processamento)
            event.preventDefault();

            // Verifica a validade do formulário
            if (!form.checkValidity()) {
                event.stopPropagation();
                form.classList.add('was-validated');
            } else {
                // Se o formulário for válido, simulamos o sucesso
                exibirSucesso();
            }
        }, false);
    }

    // 2. Efeito no Navbar ao rolar a página
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow'); // Adiciona sombra ao descer
            navbar.style.transition = '0.3s';
        } else {
            navbar.classList.remove('shadow');
        }
    });

    // 3. Função de Feedback de Sucesso
    function exibirSucesso() {
        // Alerta estilizado simulando o envio
        alert('Obrigado! Sua solicitação de pré-agendamento foi recebida. Nossa equipe entrará em contato em breve.');
        
        // Limpa o formulário após o "envio"
        form.reset();
        form.classList.remove('was-validated');
    }
});