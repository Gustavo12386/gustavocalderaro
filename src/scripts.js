//menu navbar
const navMenu = document.querySelector(".nav-menu");
const hamburguer = document.querySelector(".hamburguer");

// Função para fechar o menu após clicar em um link
function closeMenu() {
    hamburguer.classList.remove('active');
    navMenu.classList.remove('active');
}

// Adiciona o evento de clique para abrir e fechar o menu
hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
})

// Adiciona evento de clique para links do menu
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Previne o comportamento padrão do link
        const targetId = this.getAttribute('href').substring(1); // Obtém o ID do alvo
        const targetElement = document.getElementById(targetId); // Obtém o elemento alvo
        if (targetElement) {
            // Calcula a posição do elemento alvo em relação ao topo da página
            const offsetTop = targetElement.offsetTop;
            // Rola suavemente até o elemento alvo
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            closeMenu(); // Fecha o menu após clicar no link
        }
    });
});