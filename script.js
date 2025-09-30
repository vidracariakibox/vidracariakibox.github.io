// DADOS DAS IMAGENS ORIGINAIS
const serviceImages = [
    'https://github.com/Betioli/Vidracaria-Kibox/blob/main/Imagens/1.jpg?raw=true',
    'https://github.com/Betioli/Vidracaria-Kibox/blob/main/Imagens/2.jpg?raw=true',
    'https://github.com/Betioli/Vidracaria-Kibox/blob/main/Imagens/3.jpg?raw=true',
    'https://github.com/Betioli/Vidracaria-Kibox/blob/main/Imagens/4.jpg?raw=true',
    'https://github.com/Betioli/Vidracaria-Kibox/blob/main/Imagens/5.jpg?raw=true',
    'https://github.com/Betioli/Vidracaria-Kibox/blob/main/Imagens/6.jpg?raw=true',
    'https://github.com/Betioli/Vidracaria-Kibox/blob/main/Imagens/7.jpg?raw=true',
    'https://github.com/Betioli/Vidracaria-Kibox/blob/main/Imagens/8.jpg?raw=true',
    'https://github.com/Betioli/Vidracaria-Kibox/blob/main/Imagens/9.jpg?raw=true',
    'https://github.com/Betioli/Vidracaria-Kibox/blob/main/Imagens/10.jpg?raw=true',
    'https://github.com/Betioli/Vidracaria-Kibox/blob/main/Imagens/11.jpg?raw=true',
    'https://github.com/Betioli/Vidracaria-Kibox/blob/main/Imagens/12.jpg?raw=true'
];

// DADOS DOS 20 DEPOIMENTOS
const testimonialsData = [
    {
        name: "Rose Teixeira",
        initial: "R",
        color: "#E74C3C",
        text: "Muito prestativo preço justo e trabalho limpo gostei muito"
    },
    {
        name: "Jessica Maciel Fiod",
        initial: "J",
        color: "#3498DB",
        text: "Ótimo atendimento e serviço, recomendo"
    },
    {
        name: "Tania dos Santos Arruda",
        initial: "T",
        color: "#1ABC9C",
        text: "Serviço de qualidade , gentil e atencioso, sempre que preciso grito o Kiko pra me socorrer nunca me deixou na mão 😌♥️"
    },
    {
        name: "Stephanie Gomes",
        initial: "S",
        color: "#9B59B6",
        text: "Gostei muito do trabalho dele, caprichoso, rápido, se precisar vou chamar mais vezes"
    },
    {
        name: "Leonor Silva",
        initial: "L",
        color: "#F39C12",
        text: "O que poderia dizer dessa lugar ótimo atendimento achei o box de vidro que procurava além de ter variedades de produtos com preço acessivel"
    },
    {
        name: "Maria Lúcia Malu",
        initial: "M",
        color: "#E67E22",
        text: "Ótimo atendimento e rapidez no serviço"
    },
    {
        name: "Aslei Lopes",
        initial: "A",
        color: "#2980B9",
        text: "Ótimo profissional, serviço rápido e muito bom voltaria a comprar"
    },
    {
        name: "Trator_Agro_Vida",
        initial: "T",
        color: "#27AE60",
        text: "Atendimento rápido, preço justo, e o parcelamento no cartão ajuda muito... E o atendimento é ótimo..."
    },
    {
        name: "Maicon Oliveira",
        initial: "M",
        color: "#C0392B",
        text: "Recomendo o serviço deles, melhor da cidade e com preços que cabem no bolso"
    },
    {
        name: "Eloisa oliveira",
        initial: "E",
        color: "#7D3C98",
        text: "Precisava de um suporte para uma porta de vidro, que foi difícil de encontrar, devido o empenho da Kibox que encontrou, e instalou obra nos. Estou muito agradecida"
    },
    {
        name: "José Vinicius",
        initial: "J",
        color: "#FF5733",
        text: "Excelente profissional, Responde rapido cumpriu com o combinado super recomendado a todos"
    },
    {
        name: "Katarine Lima",
        initial: "K",
        color: "#C70039",
        text: "Serviço top de linha, faz tempo que nossa família só usa kibox vidros e tá cada vez melhor."
    },
    {
        name: "Mayara Pires",
        initial: "M",
        color: "#FFBF00",
        text: "Profissional atencioso e muito prestativo, fez o serviço de forma rápida, organizada e eficiente, com certeza farei outras solicitações."
    },
    {
        name: "Angelica Albino",
        initial: "A",
        color: "#9900CC",
        text: "Excelente atendimento, preço justo e serviço de qualidade. Super recomendo!"
    },
    {
        name: "José Donizeti Cavenaghi",
        initial: "J",
        color: "#2E86C1",
        text: "Pedi a instalação de um vidro para porta, um serviço muito simples. Passaram o orçamento na hora com um preço justo. Fizeram a instalação hoje, um serviço de muito boa qualidade. Se atendem assim em um serviço simples, imagino um mais complexo. Recomendo."
    },
    {
        name: "Luiz gelatti",
        initial: "L",
        color: "#28B463",
        text: "Excelente serviço, extrema qualidade e profissionalismo além da qualidade e acabamento"
    },
    {
        name: "Karla Silva",
        initial: "K",
        color: "#D35400",
        text: "Ótima prestação de serviço e qualidade do produto!"
    },
    {
        name: "Roseli Rubio",
        initial: "R",
        color: "#8E44AD",
        text: "Serviço de qualidade e são muito prestativo eu indico"
    },
    {
        name: "Maurício Iwanaga",
        initial: "M",
        color: "#16A085",
        text: "Umas das melhores vidraçarias... honesto preço justo.. atencioso... cumpre com o prometido e dentro do prazo... parabens kibox 🙏🏾🙏🏾👊🏾👊🏾"
    },
    {
        name: "Juliana rsafortes",
        initial: "J",
        color: "#F1C40F",
        text: "preço justo, serviço rápido e impecável!"
    }
];

// ==================== HERO CAROUSEL OTIMIZADO ====================
const slides = document.getElementsByClassName("slide");
const dots = document.getElementsByClassName("dot");

let slideIndex = 0;
let autoSlideTimer = null;

// Função para limpar timer
function clearAutoSlide() {
    if (autoSlideTimer) {
        clearTimeout(autoSlideTimer);
        autoSlideTimer = null;
    }
}

// ✅ VERSÃO OTIMIZADA - SEM REFLOW FORÇADO
function showSlides() {
    clearAutoSlide();
    
    if (slides.length === 0) return;
    
    // 🎯 AGRUPAR TODAS AS ALTERAÇÕES NO DOM
    requestAnimationFrame(() => {
        // Remove todas as classes de uma vez (performance)
        const activeElements = document.querySelectorAll('.slide.active, .dot.active');
        activeElements.forEach(el => el.classList.remove('active'));
        
        slideIndex++;
        if (slideIndex > slides.length) slideIndex = 1;
        
        // Adiciona classes novas de uma vez
        slides[slideIndex - 1].classList.add('active');
        if (dots[slideIndex - 1]) {
            dots[slideIndex - 1].classList.add('active');
        }
    });
    
    autoSlideTimer = setTimeout(showSlides, 8000);
}

// ✅ CONFIGURAÇÃO OTIMIZADA DOS DOTS
for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", () => {
        clearAutoSlide();
        
        requestAnimationFrame(() => {
            // AGRUPAR TODAS AS ALTERAÇÕES
            const activeElements = document.querySelectorAll('.slide.active, .dot.active');
            activeElements.forEach(el => el.classList.remove('active'));
            
            slideIndex = i + 1;
            slides[i].classList.add('active');
            if (dots[i]) dots[i].classList.add('active');
        });
        
        autoSlideTimer = setTimeout(showSlides, 8000);
    });
}

// ✅ CONFIGURAÇÃO OTIMIZADA DAS SETAS
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

if (prevButton) {
    prevButton.addEventListener("click", () => {
        clearAutoSlide();
        
        requestAnimationFrame(() => {
            const activeElements = document.querySelectorAll('.slide.active, .dot.active');
            activeElements.forEach(el => el.classList.remove('active'));
            
            slideIndex--;
            if (slideIndex < 1) slideIndex = slides.length;
            
            slides[slideIndex - 1].classList.add('active');
            if (dots[slideIndex - 1]) {
                dots[slideIndex - 1].classList.add('active');
            }
        });
        
        autoSlideTimer = setTimeout(showSlides, 8000);
    });
}

if (nextButton) {
    nextButton.addEventListener("click", () => {
        clearAutoSlide();
        
        requestAnimationFrame(() => {
            const activeElements = document.querySelectorAll('.slide.active, .dot.active');
            activeElements.forEach(el => el.classList.remove('active'));
            
            slideIndex++;
            if (slideIndex > slides.length) slideIndex = 1;
            
            slides[slideIndex - 1].classList.add('active');
            if (dots[slideIndex - 1]) {
                dots[slideIndex - 1].classList.add('active');
            }
        });
        
        autoSlideTimer = setTimeout(showSlides, 8000);
    });
}

// ==================== SERVICES CAROUSEL OTIMIZADO ====================
class ServicesCarousel {
    constructor() {
        this.carousel = document.getElementById('servicesCarousel');
        this.dotsContainer = document.getElementById('serviceDots');
        this.prevBtn = document.querySelector('.service-prev');
        this.nextBtn = document.querySelector('.service-next');
        
        if (!this.carousel || !this.dotsContainer) {
            console.warn('ServicesCarousel: Elementos principais não encontrados');
            return;
        }
        
        this.currentIndex = 0;
        this.isMobile = window.matchMedia('(max-width: 480px)').matches;
        this.slidesPerView = this.isMobile ? 1 : 3;
        this.totalSlides = Math.ceil(serviceImages.length / this.slidesPerView);
        
        this.resizeTimeout = null; // ✅ DEBOUNCE OTIMIZADO
        
        this.init();
        this.setupEventListeners();
    }
    
    init() {
        this.buildCarousel();
        this.createDots();
        this.updateDisplay();
    }
    
    buildCarousel() {
        this.carousel.innerHTML = '';
        
        for (let i = 0; i < this.totalSlides; i++) {
            const slide = document.createElement('div');
            slide.className = 'service-slide';
            
            const startIndex = i * this.slidesPerView;
            const endIndex = startIndex + this.slidesPerView;
            const imagesToShow = serviceImages.slice(startIndex, endIndex);
            
            imagesToShow.forEach((src, index) => {
                const img = document.createElement('img');
                img.src = src;
                img.alt = `Serviço ${startIndex + index + 1} da Vidraçaria Kibox`;
                img.loading = i === 0 ? 'eager' : 'lazy';
                
                img.onerror = () => {
                    console.warn(`Imagem não carregada: ${src}`);
                    img.style.backgroundColor = '#f0f0f0';
                    img.style.display = 'flex';
                    img.style.alignItems = 'center';
                    img.style.justifyContent = 'center';
                    img.innerHTML = '<span style="color: #999;">Imagem não disponível</span>';
                };
                
                slide.appendChild(img);
            });
            
            this.carousel.appendChild(slide);
        }
    }
    
    createDots() {
        this.dotsContainer.innerHTML = '';
        
        for (let i = 0; i < this.totalSlides; i++) {
            const dot = document.createElement('span');
            dot.className = 'dot';
            if (i === 0) dot.classList.add('active');
            
            dot.addEventListener('click', () => {
                this.currentIndex = i;
                this.updateDisplay();
            });
            
            this.dotsContainer.appendChild(dot);
        }
    }
    
    // ✅ VERSÃO OTIMIZADA - SEM REFLOW FORÇADO
    updateDisplay() {
        requestAnimationFrame(() => {
            const movePercentage = this.currentIndex * 100;
            this.carousel.style.transform = `translateX(-${movePercentage}%)`;
            
            const dots = this.dotsContainer.querySelectorAll('.dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === this.currentIndex);
            });
            
            if (this.prevBtn) {
                this.prevBtn.style.display = this.currentIndex === 0 ? 'none' : 'flex';
            }
            if (this.nextBtn) {
                this.nextBtn.style.display = this.currentIndex === this.totalSlides - 1 ? 'none' : 'flex';
            }
        });
    }
    
    next() {
        if (this.currentIndex < this.totalSlides - 1) {
            this.currentIndex++;
            this.updateDisplay();
        }
    }
    
    prev() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updateDisplay();
        }
    }
    
    handleTouchStart(e) {
        this.touchStartX = e.touches[0].clientX;
        this.touchStartY = e.touches[0].clientY;
        this.isScrolling = false;
    }
    
    handleTouchMove(e) {
        if (!this.touchStartX) return;
        
        const touchX = e.touches[0].clientX;
        const touchY = e.touches[0].clientY;
        const diffX = this.touchStartX - touchX;
        const diffY = this.touchStartY - touchY;
        
        if (!this.isScrolling) {
            this.isScrolling = Math.abs(diffY) > Math.abs(diffX);
        }
        
        if (!this.isScrolling && Math.abs(diffX) > 10) {
            e.preventDefault();
        }
    }
    
    handleTouchEnd(e) {
        if (!this.touchStartX || this.isScrolling) {
            this.touchStartX = null;
            this.touchStartY = null;
            this.isScrolling = false;
            return;
        }
        
        const touchEndX = e.changedTouches[0].clientX;
        const diffX = this.touchStartX - touchEndX;
        
        if (diffX > 10) this.next();
        else if (diffX < -10) this.prev();
        
        this.touchStartX = null;
        this.touchStartY = null;
        this.isScrolling = false;
    }
    
    // ✅ DEBOUNCE OTIMIZADO PARA RESIZE
    handleResize = () => {
        clearTimeout(this.resizeTimeout);
        this.resizeTimeout = setTimeout(() => {
            requestAnimationFrame(() => {
                const newIsMobile = window.matchMedia('(max-width: 480px)').matches;
                if (newIsMobile !== this.isMobile) {
                    this.isMobile = newIsMobile;
                    this.slidesPerView = this.isMobile ? 1 : 3;
                    this.totalSlides = Math.ceil(serviceImages.length / this.slidesPerView);
                    this.currentIndex = 0;
                    this.init();
                }
            });
        }, 500); // ✅ DEBOUNCE MAIOR PARA PERFORMANCE
    }
    
    setupEventListeners() {
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.next());
        }
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.prev());
        }
        
        this.carousel.addEventListener('touchstart', (e) => this.handleTouchStart(e), { passive: true });
        this.carousel.addEventListener('touchmove', (e) => this.handleTouchMove(e), { passive: false });
        this.carousel.addEventListener('touchend', (e) => this.handleTouchEnd(e), { passive: true });
        
        // ✅ EVENTO RESIZE OTIMIZADO
        window.addEventListener('resize', this.handleResize, { passive: true });
    }
}

// ==================== TESTIMONIALS CAROUSEL OTIMIZADO ====================
class TestimonialsCarousel {
    constructor() {
        this.carousel = document.querySelector('.testimonials-carousel');
        this.prevBtn = document.querySelector('.testimonial-prev');
        this.nextBtn = document.querySelector('.testimonial-next');
        this.dotsContainer = document.querySelector('.testimonial-dots');
        
        if (!this.carousel) {
            console.warn('TestimonialsCarousel: Carrossel não encontrado');
            return;
        }
        
        this.currentIndex = 0;
        this.testimonialsPerSlide = 2;
        this.totalSlides = Math.ceil(testimonialsData.length / this.testimonialsPerSlide);
        
        this.init();
        this.setupEventListeners();
    }
    
    init() {
        this.buildCarousel();
        this.createDots();
        this.updateDisplay();
    }
    
    buildCarousel() {
        this.carousel.innerHTML = '';
        
        for (let i = 0; i < this.totalSlides; i++) {
            const slide = document.createElement('div');
            slide.className = 'testimonial-slide';
            
            const startIndex = i * this.testimonialsPerSlide;
            const endIndex = startIndex + this.testimonialsPerSlide;
            const slideTestimonials = testimonialsData.slice(startIndex, endIndex);
            
            slideTestimonials.forEach(testimonial => {
                const card = document.createElement('div');
                card.className = 'review-card';
                card.innerHTML = `
                    <img src="https://github.com/Betioli/Vidracaria-Kibox/blob/main/Imagens/icons8-google-logo-48.png?raw=true" 
                         alt="Google" 
                         class="google-review-logo"
                         onerror="this.style.display='none'">
                    <div class="review-header">
                        <div class="avatar" style="background-color: ${testimonial.color};">${testimonial.initial}</div>
                        <p><strong>${testimonial.name}</strong></p>
                    </div>
                    <p class="review-text">${testimonial.text}</p>
                `;
                slide.appendChild(card);
            });
            
            this.carousel.appendChild(slide);
        }
    }
    
    createDots() {
        if (!this.dotsContainer) return;
        
        this.dotsContainer.innerHTML = '';
        
        for (let i = 0; i < this.totalSlides; i++) {
            const dot = document.createElement('span');
            dot.className = 'dot';
            if (i === 0) dot.classList.add('active');
            
            dot.addEventListener('click', () => {
                this.currentIndex = i;
                this.updateDisplay();
            });
            
            this.dotsContainer.appendChild(dot);
        }
    }
    
    // ✅ VERSÃO OTIMIZADA
    updateDisplay() {
        requestAnimationFrame(() => {
            this.carousel.style.transform = `translateX(-${this.currentIndex * 100}%)`;
            
            if (this.dotsContainer) {
                const dots = this.dotsContainer.querySelectorAll('.dot');
                dots.forEach((dot, index) => {
                    dot.classList.toggle('active', index === this.currentIndex);
                });
            }
            
            if (this.prevBtn) {
                this.prevBtn.style.display = this.currentIndex === 0 ? 'none' : 'flex';
            }
            if (this.nextBtn) {
                this.nextBtn.style.display = this.currentIndex === this.totalSlides - 1 ? 'none' : 'flex';
            }
        });
    }
    
    next() {
        if (this.currentIndex < this.totalSlides - 1) {
            this.currentIndex++;
            this.updateDisplay();
        }
    }
    
    prev() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updateDisplay();
        }
    }
    
    handleTouchStart(e) {
        this.touchStartX = e.touches[0].clientX;
        this.touchStartY = e.touches[0].clientY;
        this.isScrolling = false;
    }
    
    handleTouchMove(e) {
        if (!this.touchStartX) return;
        
        const touchX = e.touches[0].clientX;
        const touchY = e.touches[0].clientY;
        const diffX = this.touchStartX - touchX;
        const diffY = this.touchStartY - touchY;
        
        if (!this.isScrolling) {
            this.isScrolling = Math.abs(diffY) > Math.abs(diffX);
        }
        
        if (!this.isScrolling && Math.abs(diffX) > 10) {
            e.preventDefault();
        }
    }
    
    handleTouchEnd(e) {
        if (!this.touchStartX || this.isScrolling) {
            this.touchStartX = null;
            this.touchStartY = null;
            this.isScrolling = false;
            return;
        }
        
        const touchEndX = e.changedTouches[0].clientX;
        const diffX = this.touchStartX - touchEndX;
        
        if (diffX > 10) this.next();
        else if (diffX < -10) this.prev();
        
        this.touchStartX = null;
        this.touchStartY = null;
        this.isScrolling = false;
    }
    
    setupEventListeners() {
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.next());
        }
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.prev());
        }
        
        this.carousel.addEventListener('touchstart', (e) => this.handleTouchStart(e), { passive: true });
        this.carousel.addEventListener('touchmove', (e) => this.handleTouchMove(e), { passive: false });
        this.carousel.addEventListener('touchend', (e) => this.handleTouchEnd(e), { passive: true });
    }
}

// ==================== INICIALIZAÇÃO SEGURA E OTIMIZADA ====================
function initCarousels() {
    console.log('🚀 Inicializando Vidraçaria Kibox (Otimizado)...');
    
    // Inicializar Hero Carousel apenas se existirem slides
    if (slides.length > 0) {
        showSlides();
        console.log('✅ Hero Carousel inicializado (Otimizado)');
    } else {
        console.warn('⚠️ Hero Carousel: Nenhum slide encontrado');
    }
    
    // Inicializar Services Carousel
    try {
        new ServicesCarousel();
        console.log('✅ Services Carousel inicializado (Otimizado)');
    } catch (error) {
        console.warn('⚠️ Services Carousel: Erro na inicialização', error);
    }
    
    // Inicializar Testimonials Carousel
    try {
        new TestimonialsCarousel();
        console.log('✅ Testimonials Carousel inicializado (Otimizado)');
    } catch (error) {
        console.warn('⚠️ Testimonials Carousel: Erro na inicialização', error);
    }
    
    console.log('🎉 Site Vidraçaria Kibox carregado com performance máxima!');
}

// ✅ INICIALIZAÇÃO OTIMIZADA
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCarousels);
} else {
    // Se o DOM já estiver carregado, usar setTimeout para não bloquear
    setTimeout(initCarousels, 0);
}

// ✅ FALLBACK PARA ERROS (não quebra o site)
window.addEventListener('error', (e) => {
    console.warn('Erro capturado (não crítico):', e.error);
});
// ==================== ELIMINAR REFLOW FORÇADO ====================
// COLOCAR NO FINAL do arquivo script.js

// Observer para otimizar elementos quando entram na viewport
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.willChange = 'transform';
        } else {
            // Remove will-change quando não está visível para liberar memória
            setTimeout(() => {
                if (entry.target.style.willChange === 'transform') {
                    entry.target.style.willChange = 'auto';
                }
            }, 300);
        }
    });
}, { threshold: 0.1 });

// Observar elementos que podem causar reflow
document.querySelectorAll('.service-slide, .testimonial-slide, .slide').forEach(el => {
    observer.observe(el);
});