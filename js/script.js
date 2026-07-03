document.addEventListener("DOMContentLoaded", () => {
    // Inicializa os ícones Lucide
    lucide.createIcons();
    
    // Controle de Animações de Entrada (Mude para 'true' para reativar as animações no futuro)
    const ENABLE_ENTRANCE_ANIMATIONS = false;
    
    if (ENABLE_ENTRANCE_ANIMATIONS) {
        // Animações GSAP de Entrada Elegante
        gsap.registerPlugin(ScrollTrigger);
        
        // Navbar
        gsap.fromTo(".gs-reveal-down",
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
        );
    }

    // Efeito de mudança de cor no menu ao scrollar
    const navElement = document.querySelector('header nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navElement.classList.remove('bg-white/10', 'border-white/20', 'shadow-black/10');
            navElement.classList.add('bg-brand-primary/95', 'border-brand-accent-light/15', 'shadow-brand-primary/20');
        } else {
            navElement.classList.add('bg-white/10', 'border-white/20', 'shadow-black/10');
            navElement.classList.remove('bg-brand-primary/95', 'border-brand-accent-light/15', 'shadow-brand-primary/20');
        }
    });

    // Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const menuIcon = mobileBtn.querySelector('i');
    let menuOpen = false;

    function toggleMenu() {
        menuOpen = !menuOpen;
        if (menuOpen) {
            mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
            mobileMenu.classList.add('opacity-100', 'pointer-events-auto');
            menuIcon.setAttribute('data-lucide', 'x');
            lucide.createIcons();
            document.body.style.overflow = 'hidden';
        } else {
            mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
            mobileMenu.classList.add('opacity-0', 'pointer-events-none');
            menuIcon.setAttribute('data-lucide', 'menu');
            lucide.createIcons();
            document.body.style.overflow = '';
        }
    }

    if (mobileBtn) {
        mobileBtn.addEventListener('click', toggleMenu);
    }
    mobileLinks.forEach(link => link.addEventListener('click', toggleMenu));

    if (ENABLE_ENTRANCE_ANIMATIONS) {
        // Textos surgindo da esquerda
        gsap.fromTo(".gs-reveal-left", 
            { x: -60, opacity: 0 }, 
            { x: 0, opacity: 1, duration: 1.4, ease: "power3.out", delay: 0.2 }
        );
        
        // Vídeo surgindo da direita
        gsap.fromTo(".gs-reveal-right", 
            { x: 60, opacity: 0, scale: 0.95 }, 
            { x: 0, opacity: 1, scale: 1, duration: 1.4, ease: "power3.out", delay: 0.4 }
        );

        // Botões
        gsap.fromTo(".gs-button",
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "back.out(1.5)", stagger: 0.15, delay: 1 }
        );

        // Animação da Seção Sobre (ScrollTrigger)
        gsap.fromTo(".gs-about-reveal-left",
            { x: -80, opacity: 0, scale: 0.95 },
            {
                x: 0,
                opacity: 1,
                scale: 1,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: "#about",
                    start: "top 75%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        gsap.fromTo(".gs-about-reveal-right",
            { x: 80, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: "#about",
                    start: "top 75%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Animação da Seção Serviços (ScrollTrigger)
        gsap.fromTo(".gs-services-reveal-header",
            { y: 55, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: "#services",
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        gsap.fromTo(".gs-service-card",
            { y: 60, opacity: 0, scale: 0.96 },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 1.1,
                ease: "power4.out",
                stagger: 0.12,
                scrollTrigger: {
                    trigger: "#services",
                    start: "top 75%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Animação da Seção Diferenciais (ScrollTrigger)
        gsap.fromTo(".gs-why-reveal-header",
            { y: 55, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: "#why-choose-us",
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        gsap.fromTo(".gs-why-card",
            { y: 60, opacity: 0, scale: 0.96 },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 1.1,
                ease: "power4.out",
                stagger: 0.15,
                scrollTrigger: {
                    trigger: "#why-choose-us",
                    start: "top 75%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Animação da Seção Equipe (ScrollTrigger)
        gsap.fromTo(".gs-team-reveal-header",
            { y: 55, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: "#team",
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        gsap.fromTo(".gs-team-card",
            { y: 60, opacity: 0, scale: 0.96 },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 1.1,
                ease: "power4.out",
                stagger: 0.12,
                scrollTrigger: {
                    trigger: "#team",
                    start: "top 75%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Animação da Seção Depoimentos (ScrollTrigger)
        gsap.fromTo(".gs-testimonials-reveal-header",
            { y: 55, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: "#testimonials",
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        gsap.fromTo(".gs-testimonial-card",
            { y: 60, opacity: 0, scale: 0.96 },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 1.1,
                ease: "power4.out",
                stagger: 0.15,
                scrollTrigger: {
                    trigger: "#testimonials",
                    start: "top 75%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Animação da Seção Convênios (ScrollTrigger)
        gsap.fromTo(".gs-partnerships-reveal-left",
            { x: -60, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: "#partnerships",
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        gsap.fromTo(".gs-partnerships-reveal-right",
            { x: 60, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: "#partnerships",
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        const partnershipsCard = document.querySelector(".gs-partnerships-card");
        if (partnershipsCard) {
            gsap.fromTo(".gs-partnerships-card",
                { y: 50, opacity: 0, scale: 0.97 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1.2,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: ".gs-partnerships-card",
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }

        // Animação da Seção FAQ (ScrollTrigger)
        gsap.fromTo(".gs-faq-reveal-header",
            { y: 55, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: "#faq",
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        gsap.fromTo(".gs-faq-reveal-content details",
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: "#faq",
                    start: "top 75%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Animação da Seção Contato (ScrollTrigger)
        gsap.fromTo(".gs-contact-reveal-left",
            { x: -60, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: "#contact",
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        gsap.fromTo(".gs-contact-reveal-right",
            { x: 60, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: "#contact",
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    }
});
