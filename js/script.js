document.addEventListener('DOMContentLoaded', () => {
    // 1️⃣ Menu Hamburguer (Toggle Mobile Menu)
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-list a');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });

    // Fecha o menu ao clicar em um link (Scroll Suave)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('no-scroll');
            }
        });
    });

    // 2️⃣ Header Sticky e Microanimação ao Scroll
    const header = document.getElementById('header');
    
    const handleScroll = () => {
        // Sticky Header
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Scroll Reveal (Micro Animações)
        revealOnScroll();
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Executa uma vez no load para elementos visíveis

    // 3️⃣ Filtros de Produtos
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove a classe 'active' de todos
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Adiciona a classe 'active' ao clicado
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            // Itera sobre os cards e aplica o filtro
            productCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    // Re-aplica animação de entrada ao mostrar
                    card.classList.remove('revealed');
                    setTimeout(() => card.classList.add('revealed'), 100); 
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 4️⃣ Formulário de Contato Inteligente (Exemplo de Validação Básica)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const nome = document.getElementById('nome').value;
            const telefone = document.getElementById('telefone').value;
            const mensagem = document.getElementById('mensagem').value;

            if (nome && telefone && mensagem) {
                // Mensagem de sucesso no site
                alert('Sua mensagem foi enviada com sucesso! Em breve entraremos em contato.');
                
                // Redirecionamento estratégico (Opcional, mas recomendado para CRO)
                // Cria a URL do WhatsApp com a mensagem do formulário
                const waMessage = `Olá, BellaFlor! Meu nome é ${nome} (${telefone}). Minha mensagem: ${mensagem}`;
                const waUrl = `https://wa.me/5519998028205?text=${encodeURIComponent(waMessage)}`;
                
                // Redireciona o usuário para o WhatsApp após o envio
                window.open(waUrl, '_blank');
                
                // Reset do formulário
                contactForm.reset();

            } else {
                alert('Por favor, preencha todos os campos obrigatórios.');
            }
        });
    }

    // 5️⃣ Lazy Loading (Para todas as imagens, já adicionado no HTML, aqui apenas a lógica de revelar)
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Imagem já está carregando devido ao 'loading="lazy"', mas podemos adicionar classes
                    entry.target.classList.add('loaded');
                    observer.unobserve(entry.target);
                }
            });
        });

        lazyImages.forEach(image => {
            imageObserver.observe(image);
        });
    }
    
    // 6️⃣ Scroll Reveal (Lógica das Micro Animações)
    const revealElements = document.querySelectorAll('[data-scroll-reveal]');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const revealPoint = 150; // Começa a revelar 150px antes de entrar na tela

            if (elementTop < windowHeight - revealPoint) {
                const delay = element.getAttribute('data-delay') || 0;
                setTimeout(() => {
                    element.classList.add('revealed');
                }, delay);
            }
        });
    };
    
});