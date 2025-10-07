// ==================== DADOS DAS IMAGENS ====================
const serviceImages = [
    { src: '/Imagens/1-Espeho-com-Led.webp', srcset: '/Imagens/1-Espeho-com-Led-308.webp 308w, /Imagens/1-Espeho-com-Led.webp 1080w', sizes: '(max-width: 768px) 308px, 1080px'},
    { src: '/Imagens/2-Guarda-corpo.webp', srcset: '/Imagens/2-Guarda-corpo-308.webp 308w, /Imagens/2-Guarda-corpo.webp 1080w', sizes: '(max-width: 768px) 308px, 1080px'},
    { src: '/Imagens/3-Vitro-de-2-folhas.webp', srcset: '/Imagens/3-Vitro-de-2-folhas-308.webp 308w, /Imagens/3-Vitro-de-2-folhas.webp 1080w', sizes: '(max-width: 768px) 1080px, 1080px'},
    { src: '/Imagens/4-Divisoria-de-Eucatex.webp', srcset: '/Imagens/4-Divisoria-de-Eucatex-308.webp 308w, /Imagens/4-Divisoria-de-Eucatex.webp 1080w', sizes: '(max-width: 768px) 308px, 1080px'},
    { src: '/Imagens/5-Box-frontal.webp', srcset: '/Imagens/5-Box-frontal-308.webp 308w, /Imagens/5-Box-frontal.webp 1080w', sizes: '(max-width: 768px) 308px, 1080px'},
    { src: '/Imagens/6-Divisoria-de-Eucatex.webp', srcset: '/Imagens/6-Divisoria-de-Eucatex-308.webp 308w, /Imagens/6-Divisoria-de-Eucatex.webp 1080w', sizes: '(max-width: 768px) 308px, 1080px'},
    { src: '/Imagens/7-Box-de-abrir-cromado.webp', srcset: '/Imagens/7-Box-de-abrir-cromado-308.webp 308w, /Imagens/7-Box-de-abrir-cromado.webp 1080w', sizes: '(max-width: 768px) 308px, 1080px'},
    { src: '/Imagens/8-Espelho-organico-duplo.webp', srcset: '/Imagens/8-Espelho-organico-duplo-308.webp 308w, /Imagens/8-Espelho-organico-duplo.webp 1080w', sizes: '(max-width: 768px) 308px, 1080px'},
    { src: '/Imagens/9-Porta-de-Abrir.webp', srcset: '/Imagens/9-Porta-de-Abrir-308.webp 308w, /Imagens/9-Porta-de-Abrir.webp 1080w', sizes: '(max-width: 768px) 308px, 1080px'},
    { src: '/Imagens/10-Espelho-organico.webp', srcset: '/Imagens/10-Espelho-organico-308.webp 308w, /Imagens/10-Espelho-organico.webp 1080w', sizes: '(max-width: 768px) 308px, 308px'},
    { src: '/Imagens/11-Porta-de-abrir.webp', srcset: '/Imagens/11-Porta-de-abrir-308.webp 308w, /Imagens/11-Porta-de-abrir.webp 1080w', sizes: '(max-width: 768px) 308px, 1080px'},
    { src: '/Imagens/12-Espelho-com-Led.webp', srcset: '/Imagens/12-Espelho-com-Led-308.webp 308w, /Imagens/12-Espelho-com-Led.webp 1080w', sizes: '(max-width: 768px) 308px, 1080px'},
    { src: '/Imagens/13-Divisoria-de-vidro.webp', srcset: '/Imagens/13-Divisoria-de-vidro-308.webp 308w, /Imagens/13-Divisoria-de-vidro.webp 1080w', sizes: '(max-width: 768px) 308px, 1080px'},
    { src: '/Imagens/14-Espelho-com-Led.webp', srcset: '/Imagens/14-Espelho-com-Led-308.webp 308w, /Imagens/14-Espelho-com-Led.webp 1080w', sizes: '(max-width: 768px) 308px, 1080px'},
    { src: '/Imagens/15-Espelho-com-Led-triplo.webp', srcset: '/Imagens/15-Espelho-com-Led-triplo-308.webp 308w, /Imagens/15-Espelho-com-Led-triplo.webp 1080w', sizes: '(max-width: 768px) 308px, 1080px'},
    { src: '/Imagens/16-Box-frontal.webp', srcset: '/Imagens/16-Box-frontal-308.webp 308w, /Imagens/16-Box-frontal.webp 1080w', sizes: '(max-width: 768px) 308px, 1080px'},
    { src: '/Imagens/17-Porta-de-banheiro-cadeirante.webp', srcset: '/Imagens/17-Porta-de-banheiro-cadeirante-308.webp 308w, /Imagens/17-Porta-de-banheiro-cadeirante.webp 1080w', sizes: '(max-width: 768px) 308px, 1080px'},
    { src: '/Imagens/18-Box-frontal-branco.webp', srcset: '/Imagens/18-Box-frontal-branco-308.webp 308w, /Imagens/18-Box-frontal-branco.webp 1080w', sizes: '(max-width: 768px) 308px, 1080px'},
];

// ==================== DADOS DOS 20 DEPOIMENTOS ==================== 
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
const slides = document.querySelectorAll(".hero .slide");
const dots = document.querySelectorAll(".hero .dot");

let slideIndex = 0;
let autoSlideTimer = null;

function clearAutoSlide() {
    if (autoSlideTimer) {
        clearTimeout(autoSlideTimer);
        autoSlideTimer = null;
    }
}

function showSlides() {
    clearAutoSlide();
    if (slides.length === 0) return;

    slides.forEach(s => s.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));

    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;

    slides[slideIndex - 1].classList.add("active");
    if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].classList.add("active");
    }

    autoSlideTimer = setTimeout(showSlides, 8000);
}

// Dots
dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        clearAutoSlide();
        slides.forEach(s => s.classList.remove("active"));
        dots.forEach(d => d.classList.remove("active"));

        slideIndex = i + 1;
        slides[i].classList.add("active");
        dot.classList.add("active");

        autoSlideTimer = setTimeout(showSlides, 8000);
    });
});

// Setas
const prevButton = document.querySelector(".hero .prev");
const nextButton = document.querySelector(".hero .next");

if (prevButton) {
    prevButton.addEventListener("click", () => {
        clearAutoSlide();
        slides.forEach(s => s.classList.remove("active"));
        dots.forEach(d => d.classList.remove("active"));

        slideIndex--;
        if (slideIndex < 1) slideIndex = slides.length;

        slides[slideIndex - 1].classList.add("active");
        dots[slideIndex - 1]?.classList.add("active");

        autoSlideTimer = setTimeout(showSlides, 8000);
    });
}

if (nextButton) {
    nextButton.addEventListener("click", () => {
        clearAutoSlide();
        slides.forEach(s => s.classList.remove("active"));
        dots.forEach(d => d.classList.remove("active"));

        slideIndex++;
        if (slideIndex > slides.length) slideIndex = 1;

        slides[slideIndex - 1].classList.add("active");
        dots[slideIndex - 1]?.classList.add("active");

        autoSlideTimer = setTimeout(showSlides, 8000);
    });
}

// ==================== SERVICES CAROUSEL ====================
class ServicesCarousel {
    constructor() {
        this.carousel = document.getElementById('servicesCarousel');
        this.dotsContainer = document.getElementById('serviceDots');
        this.prevBtn = document.querySelector('.service-prev');
        this.nextBtn = document.querySelector('.service-next');

        if (!this.carousel || !this.dotsContainer) return;

        this.currentIndex = 0;
        this.isMobile = window.matchMedia('(max-width: 480px)').matches;
        this.slidesPerView = this.isMobile ? 1 : 3;
        this.totalSlides = Math.ceil(serviceImages.length / this.slidesPerView);

        this.resizeTimeout = null;
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
            const imagesToShow = serviceImages.slice(startIndex, startIndex + this.slidesPerView);

            imagesToShow.forEach((imgData, index) => {
                const img = document.createElement('img');
                img.src = imgData.src;
                img.srcset = imgData.srcset;
                img.sizes = imgData.sizes;
                img.alt = `Serviço ${startIndex + index + 1} da Vidraçaria Kibox`;
                img.loading = index === 0 ? 'eager' : 'lazy';
                img.decoding = 'async';
                img.width = 308;
                img.height = 308;

                img.onerror = () => {
                    img.classList.add('img-error');
                    img.alt = 'Imagem não disponível';
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

    updateDisplay() {
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

    handleResize = () => {
        clearTimeout(this.resizeTimeout);
        this.resizeTimeout = setTimeout(() => {
            const newIsMobile = window.matchMedia('(max-width: 480px)').matches;
            if (newIsMobile !== this.isMobile) {
                this.isMobile = newIsMobile;
                this.slidesPerView = this.isMobile ? 1 : 3;
                this.totalSlides = Math.ceil(serviceImages.length / this.slidesPerView);
                this.currentIndex = 0;
                this.init();
            }
        }, 250);
    }

    setupEventListeners() {
        if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.next());
        if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.prev());

        window.addEventListener('resize', this.handleResize, { passive: true });
    }
}

// ==================== TESTIMONIALS CAROUSEL ====================
class TestimonialsCarousel {
    constructor() {
        this.carousel = document.querySelector('.testimonials-carousel');
        this.prevBtn = document.querySelector('.testimonial-prev');
        this.nextBtn = document.querySelector('.testimonial-next');
        this.dotsContainer = document.querySelector('.testimonial-dots');

        if (!this.carousel) return;

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
            const slideTestimonials = testimonialsData.slice(startIndex, startIndex + this.testimonialsPerSlide);

            slideTestimonials.forEach(testimonial => {
                const card = document.createElement('div');
                card.className = 'review-card';
                card.innerHTML = `
                    <img src="/Imagens/icons8-google-logo-48.webp" alt="Google" class="google-review-logo" onerror="this.style.display='none'">
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

    updateDisplay() {
        // ✅ VOLTANDO O requestAnimationFrame APENAS PARA DEPOIMENTOS
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

    setupEventListeners() {
        if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.next());
        if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.prev());
    }
}

// ==================== INICIALIZAÇÃO ====================
// ==================== INICIALIZAÇÃO ====================
function initCarousels() {
    if (slides.length > 0) showSlides();
    new ServicesCarousel();
    new TestimonialsCarousel();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCarousels);
} else {
    setTimeout(initCarousels, 0);
}

// ✅ SERVICE WORKER COM ATUALIZAÇÃO SEM LOOP
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js?v=2.5').then((registration) => {
    console.log('✅ SW registrado:', registration);

    // Força o navegador a verificar se há uma nova versão
    registration.update();

    // Se for detectada uma nova versão do SW
    registration.addEventListener('updatefound', () => {
      const newWorker = registration.installing;
      console.log('⚡ Nova versão do SW encontrada!');

      newWorker.addEventListener('statechange', () => {
        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
          console.log('🚀 Nova versão instalada! Recarregando...');
          window.location.reload(); // recarrega para aplicar as novas versões
        }
      });
    });
  }).catch((error) => {
    console.error('❌ Falha ao registrar o Service Worker:', error);
  });
}

// ✅ CORREÇÃO - CONTROLLER CHANGE SEM LOOP
if ('serviceWorker' in navigator) {
  let isReloading = false;
  
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (!isReloading && navigator.serviceWorker.controller) {
      console.log('🔄 Controller changed - recarregando página uma vez');
      isReloading = true;
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  });
}