// Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Navbar scroll effect
        window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    // Pegar a cor atual do tema claro/escuro para o navbar-bg
    const currentNavbarBg = getComputedStyle(document.documentElement).getPropertyValue('--navbar-bg');
    
    if (window.scrollY > -1) {
        // Se estiver rolando, use uma versão mais opaca da cor do tema atual
        // Para o tema escuro, pode ser totalmente preto, para o claro, totalmente branco.
        const theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'light') {
            navbar.style.background = '#ffffff'; // Ou rgba(255,255,255,1)
            navbar.style.backdropFilter = 'blur(20px)';
            navbar.style.borderBottom = '1px solid #e0e0e0';
        } else {
            navbar.style.background = '#0a0a0a'; // Ou rgba(10,10,10,1)
            navbar.style.backdropFilter = 'blur(20px)';
            navbar.style.borderBottom = '1px solid #2a2a2a';
        }
    } else {
        // Quando no topo, use a cor semi-transparente definida pela variável de tema
        navbar.style.background = currentNavbarBg;
        navbar.style.backdropFilter = 'blur(20px)'; // Manter o blur mesmo no topo se desejar
        // Retornar a borda inicial
        navbar.style.borderBottom = '1px solid ' + getComputedStyle(document.documentElement).getPropertyValue('--navbar-border');
    }
});

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all fade-in-up elements
        document.querySelectorAll('.fade-in-up').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease';
            observer.observe(el);
        });

        // Theme toggle functionality
        const themeToggle = document.getElementById('themeToggle');
        const themeIcon = themeToggle.querySelector('i');
        
        // Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    if (savedTheme === 'light') {
        themeIcon.className = 'fas fa-sun';
        // Light theme colors
        document.documentElement.style.setProperty('--primary-green', '#00cc6a');
        document.documentElement.style.setProperty('--dark-bg', '#ffffff');
        document.documentElement.style.setProperty('--card-bg', '#f8f9fa');
        document.documentElement.style.setProperty('--text-primary', '#212529');
        document.documentElement.style.setProperty('--text-secondary', '#6c757d');
        document.documentElement.style.setProperty('--border-color', '#dee2e6');
        document.documentElement.style.setProperty('--navbar-bg', 'rgba(255, 255, 255, 0.95)');
        document.documentElement.style.setProperty('--navbar-border', '#e0e0e0');
    }
}

themeToggle.addEventListener('click', function() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    if (newTheme === 'light') {
        themeIcon.className = 'fas fa-sun';
        document.documentElement.style.setProperty('--primary-green', '#00cc6a');
        document.documentElement.style.setProperty('--dark-bg', '#ffffff');
        document.documentElement.style.setProperty('--card-bg', '#f8f9fa');
        document.documentElement.style.setProperty('--text-primary', '#212529');
        document.documentElement.style.setProperty('--text-secondary', '#6c757d');
        document.documentElement.style.setProperty('--border-color', '#dee2e6');
        document.documentElement.style.setProperty('--navbar-bg', 'rgba(255, 255, 255, 0.95)');
        document.documentElement.style.setProperty('--navbar-border','#e0e0e0');
    } else {
        themeIcon.className = 'fas fa-moon';
        document.documentElement.style.setProperty('--primary-green', '#00ff88');
        document.documentElement.style.setProperty('--dark-bg', '#0a0a0a');
        document.documentElement.style.setProperty('--card-bg', '#1a1a1a');
        document.documentElement.style.setProperty('--text-primary', '#ffffff');
        document.documentElement.style.setProperty('--text-secondary', '#b0b0b0');
        document.documentElement.style.setProperty('--border-color', '#2a2a2a');

        document.documentElement.style.setProperty('--navbar-bg', 'rgba(10, 10, 10, 0.95)'); /* Preto semi-transparente */
        document.documentElement.style.setProperty('--border-color', '#2a2a2a');
    }
});
        // Parallax effect for hero section
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            const heroContent = document.querySelector('.hero-content');
            
            if (hero && heroContent) {
                heroContent.style.transform = `translateY(${scrolled * 0.2}px)`;
            }
        });

        // Typing effect for hero title
        function typeWriter(element, text, speed = 100) {
            let i = 0;
            element.innerHTML = '';
            
            function type() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                }
            }
            type();
        }

        // Initialize typing effect when page loads
        window.addEventListener('load', function() {
            const heroTitle = document.querySelector('.hero h1');
            if (heroTitle) {
                const originalText = heroTitle.textContent;
                typeWriter(heroTitle, originalText, 50);
            }
        });

        // Card hover effects
        document.querySelectorAll('.blog-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Search functionality (basic implementation)
        function createSearchBox() {
            const searchHTML = `
                <div class="search-container" style="position: relative; margin: 2rem 0;">
                    <input type="text" id="searchInput" placeholder="Buscar posts..." 
                           style="width: 100%; padding: 1rem; border-radius: 25px; border: 1px solid var(--border-color); 
                                  background: var(--card-bg); color: var(--text-primary); font-size: 1rem;">
                    <i class="fas fa-search" style="position: absolute; right: 1rem; top: 50%; transform: translateY(-50%); 
                                                    color: var(--text-secondary);"></i>
                </div>
            `;
            
            const blogSection = document.getElementById('blog');
            if (blogSection) {
                const title = blogSection.querySelector('.section-title');
                title.insertAdjacentHTML('afterend', searchHTML);
            }
        }

        // Add search functionality
        createSearchBox();

        // Implement search filter
        document.getElementById('searchInput')?.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const blogCards = document.querySelectorAll('.blog-card');
            
            blogCards.forEach(card => {
                const title = card.querySelector('.blog-title').textContent.toLowerCase();
                const excerpt = card.querySelector('.blog-excerpt').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || excerpt.includes(searchTerm)) {
                    card.parentElement.style.display = 'block';
                    card.style.opacity = '1';
                } else {
                    card.parentElement.style.display = 'none';
                    card.style.opacity = '0';
                }
            });
        });

        // Newsletter subscription
        function createNewsletterSection() {
            const newsletterHTML = `
                <section style="background: var(--card-bg); padding: 4rem 0; margin: 4rem 0; border-radius: 20px; text-align: center;">
                    <div class="container">
                        <h3 style="color: var(--primary-green); margin-bottom: 1rem;">📧 Newsletter</h3>
                        <h2 style="margin-bottom: 1rem;">Receba as últimas novidades</h2>
                        <p style="color: var(--text-secondary); margin-bottom: 2rem;">
                            Inscreva-se para receber os melhores conteúdos sobre tecnologia diretamente no seu email.
                        </p>
                        <div class="row justify-content-center">
                            <div class="col-md-6">
                                <div class="d-flex gap-2">
                                    <input type="email" class="form-control" placeholder="Seu melhor email" 
                                           style="border-radius: 25px; padding: 0.75rem 1.5rem; border: 1px solid var(--border-color); 
                                                  background: var(--dark-bg); color: var(--text-primary);">
                                    <button class="btn" style="background: var(--primary-green); color: var(--dark-bg); 
                                                                 border-radius: 25px; padding: 0.75rem 1.5rem; font-weight: 600;">
                                        Inscrever
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            `;
            
            const blogSection = document.getElementById('blog');
            if (blogSection) {
                blogSection.insertAdjacentHTML('afterend', newsletterHTML);
            }
        }

        // Add newsletter section
        createNewsletterSection();

        // Scroll to top button
        function createScrollToTop() {
            const scrollButton = document.createElement('button');
            scrollButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
            scrollButton.setAttribute('id', 'scrollToTop');
            scrollButton.style.cssText = `
                position: fixed;
                bottom: 2rem;
                right: 2rem;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background: var(--primary-green);
                color: var(--dark-bg);
                border: none;
                font-size: 1.2rem;
                cursor: pointer;
                opacity: 0;
                transition: all 0.3s ease;
                z-index: 1000;
                box-shadow: 0 4px 20px rgba(0, 255, 136, 0.3);
            `;
            
            document.body.appendChild(scrollButton);
            
            // Show/hide scroll button
            window.addEventListener('scroll', function() {
                if (window.pageYOffset > 300) {
                    scrollButton.style.opacity = '1';
                    scrollButton.style.transform = 'translateY(0)';
                } else {
                    scrollButton.style.opacity = '0';
                    scrollButton.style.transform = 'translateY(10px)';
                }
            });
            
            // Scroll to top functionality
            scrollButton.addEventListener('click', function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }

        // Add scroll to top button
        createScrollToTop();

        // Loading animation
        window.addEventListener('load', function() {
            // Esconder a tela de carregamento
            const loadingScreen = document.getElementById('loadingScreen');
            if (loadingScreen){
                // Adiciona a classe 'hidden' para iniciar o fade out e ocultar
                loadingScreen.classList.add('hidden');
            }
            document.body.style.opacity = '1';
            document.body.style.transform = 'translateY(0)';
        });

        // Mobile menu improvements
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');
        
        if (navbarToggler && navbarCollapse) {
            navbarToggler.addEventListener('click', function() {
                const isExpanded = navbarCollapse.classList.contains('show');
                
                if (isExpanded) {
                    navbarToggler.innerHTML = '<i class="fas fa-bars" style="color: var(--text-primary);"></i>';
                } else {
                    navbarToggler.innerHTML = '<i class="fas fa-times" style="color: var(--text-primary);"></i>';
                }
            });
        }

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                const navbarCollapse = document.querySelector('.navbar-collapse');
                const navbarToggler = document.querySelector('.navbar-toggler');
                
                if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                    navbarCollapse.classList.remove('show');
                    navbarToggler.innerHTML = '<i class="fas fa-bars" style="color: var(--text-primary);"></i>';
                }
            });
        });

        // Performance optimization - Lazy loading for images
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });