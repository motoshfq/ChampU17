document.addEventListener('DOMContentLoaded', function() {
    // Прелоадер
    const loader = document.querySelector('.loader');
    const progressBar = document.querySelector('.progress');
    const heroContent = document.querySelector('.hero-content');
    let progress = 0;
    
    const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 10) + 1;
        if (progress > 100) progress = 100;
        progressBar.style.width = `${progress}%`;
        
        if (progress === 100) {
            clearInterval(interval);
            setTimeout(() => {
                loader.classList.add('hidden');
                document.body.classList.add('loaded');
            }, 500);
        }
    }, 200);
    
    // Кастомный курсор
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    document.addEventListener('mousemove', function(e) {
        cursor.style.opacity = '1';
        cursorFollower.style.opacity = '1';
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    });
    
    document.addEventListener('mouseout', function() {
        cursor.style.opacity = '0';
        cursorFollower.style.opacity = '0';
    });
    
    // Эффекты для ссылок и кнопок при наведении курсора
    const links = document.querySelectorAll('a, button, .btn');
    links.forEach(link => {
        link.addEventListener('mouseenter', function() {
            cursorFollower.style.width = '60px';
            cursorFollower.style.height = '60px';
            cursor.style.opacity = '0';
        });
        link.addEventListener('mouseleave', function() {
            cursorFollower.style.width = '40px';
            cursorFollower.style.height = '40px';
            cursor.style.opacity = '1';
        });
    });
    
    // Мобильное меню
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });
    
    // Закрытие мобильного меню при клике на ссылку
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('header');
    const scrollThreshold = 50;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Анимация частиц в hero-секции
    if (typeof particlesJS !== 'undefined') {
        particlesJS('hero-particles', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: ['#ffffff', '#ffcc00']
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    }
                },
                opacity: {
                    value: 0.5,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#ffffff',
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 0.5
                        }
                    },
                    push: {
                        particles_nb: 3
                    }
                }
            },
            retina_detect: true
        });
        
        // Частицы для секции About
        particlesJS('about-particles', {
            particles: {
                number: {
                    value: 60,
                    density: {
                        enable: true,
                        value_area: 900
                    }
                },
                color: {
                    value: ['#0048ff', '#ffcc00']
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    }
                },
                opacity: {
                    value: 0.3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 0.8,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 2.5,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1.5,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#ffffff',
                    opacity: 0.1,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 0.8,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: true,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'bubble'
                    },
                    onclick: {
                        enable: true,
                        mode: 'repulse'
                    },
                    resize: true
                },
                modes: {
                    bubble: {
                        distance: 200,
                        size: 4,
                        duration: 2,
                        opacity: 0.8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    }
                }
            },
            retina_detect: true
        });
        
        // Частицы для секции Schedule
        particlesJS('schedule-particles', {
            particles: {
                number: {
                    value: 70,
                    density: {
                        enable: true,
                        value_area: 900
                    }
                },
                color: {
                    value: ['#0048ff', '#ffcc00', '#ffffff']
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    }
                },
                opacity: {
                    value: 0.25,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 0.6,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 2,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 120,
                    color: '#ffffff',
                    opacity: 0.1,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 0.6,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: true,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'repulse'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 0.3
                        }
                    },
                    repulse: {
                        distance: 150,
                        duration: 0.4
                    }
                }
            },
            retina_detect: true
        });

        // Частицы для секции Venue
        particlesJS('venue-particles', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: ['#0048ff', '#ffcc00', '#ffffff']
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    }
                },
                opacity: {
                    value: 0.2,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 0.7,
                        opacity_min: 0.05,
                        sync: false
                    }
                },
                size: {
                    value: 2.5,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1.2,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#ffffff',
                    opacity: 0.15,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 0.7,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: true,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'bubble'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    bubble: {
                        distance: 150,
                        size: 4,
                        duration: 2,
                        opacity: 0.7,
                        speed: 3
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });

        // Частицы для секции Contact
        particlesJS('contact-particles', {
            particles: {
                number: {
                    value: 70,
                    density: {
                        enable: true,
                        value_area: 900
                    }
                },
                color: {
                    value: ['#0048ff', '#ffcc00', '#ffffff']
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    }
                },
                opacity: {
                    value: 0.15,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 0.5,
                        opacity_min: 0.05,
                        sync: false
                    }
                },
                size: {
                    value: 2.5,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#ffffff',
                    opacity: 0.1,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 0.6,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: true,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 0.3
                        }
                    },
                    push: {
                        particles_nb: 3
                    }
                }
            },
            retina_detect: true
        });
    }
    
    // Создаем альтернативный способ для particles, если стандартный не работает
    setTimeout(() => {
        const heroParticles = document.querySelector('.hero-particles');
        if (heroParticles && heroParticles.children.length === 0) {
            console.log('Particles JS не загрузился для hero-секции, применяем альтернативный фон');
            heroParticles.style.backgroundImage = 'url("images/pattern.png")';
            heroParticles.style.opacity = '0.05';
        }
        
        const aboutParticles = document.querySelector('.about-particles');
        if (aboutParticles && aboutParticles.children.length === 0) {
            console.log('Particles JS не загрузился для about-секции, применяем альтернативный фон');
            aboutParticles.style.backgroundImage = 'url("images/pattern.png")';
            aboutParticles.style.opacity = '0.05';
        }
        
        const scheduleParticles = document.querySelector('.schedule-particles');
        if (scheduleParticles && scheduleParticles.children.length === 0) {
            console.log('Particles JS не загрузился для schedule-секции, применяем альтернативный фон');
            scheduleParticles.style.backgroundImage = 'url("images/pattern.png")';
            scheduleParticles.style.opacity = '0.05';
        }

        const venueParticles = document.querySelector('.venue-particles');
        if (venueParticles && venueParticles.children.length === 0) {
            console.log('Particles JS не загрузился для venue-секции, применяем альтернативный фон');
            venueParticles.style.backgroundImage = 'url("images/pattern.png")';
            venueParticles.style.opacity = '0.05';
        }

        const contactParticles = document.querySelector('.contact-particles');
        if (contactParticles && contactParticles.children.length === 0) {
            console.log('Particles JS не загрузился для contact-секции, применяем альтернативный фон');
            contactParticles.style.backgroundImage = 'url("images/pattern.png")';
            contactParticles.style.opacity = '0.05';
        }
    }, 1000);
    
    // Smooth scrolling для якорных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const headerHeight = header.offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = targetPosition - headerHeight;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Таймер обратного отсчета до даты события
    const countdownElement = document.getElementById('countdown');
    if (countdownElement) {
        // Дата мероприятия - 30 апреля 2025
        const eventDate = new Date('April 30, 2025 00:00:00').getTime();
        
        function updateCountdown() {
            const now = new Date().getTime();
            const timeLeft = eventDate - now;
            
            if (timeLeft > 0) {
                const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
                
                // Обновляем только числа, чтобы избежать мерцания и сброса анимаций
                const countdownItems = countdownElement.querySelectorAll('.countdown-item');
                
                if (countdownItems.length === 0) {
                    // Первая инициализация, если элементы еще не созданы
                    countdownElement.innerHTML = `
                        <div class="countdown-item">
                            <div class="countdown-number">${days}</div>
                            <div class="countdown-label">днів</div>
                        </div>
                        <div class="countdown-item">
                            <div class="countdown-number">${hours}</div>
                            <div class="countdown-label">годин</div>
                        </div>
                        <div class="countdown-item">
                            <div class="countdown-number">${minutes}</div>
                            <div class="countdown-label">хвилин</div>
                        </div>
                        <div class="countdown-item">
                            <div class="countdown-number">${seconds}</div>
                            <div class="countdown-label">секунд</div>
                        </div>
                    `;
                } else {
                    // Обновляем только текст внутри элементов
                    const numbers = countdownElement.querySelectorAll('.countdown-number');
                    if (numbers.length >= 4) {
                        numbers[0].textContent = days;
                        numbers[1].textContent = hours;
                        numbers[2].textContent = minutes;
                        numbers[3].textContent = seconds;
                    }
                }
            } else {
                // Если время закончилось, и элементы еще не созданы
                if (countdownElement.querySelectorAll('.countdown-item').length === 0) {
                    countdownElement.innerHTML = `
                        <div class="countdown-item">
                            <div class="countdown-number">0</div>
                            <div class="countdown-label">днів</div>
                        </div>
                        <div class="countdown-item">
                            <div class="countdown-number">0</div>
                            <div class="countdown-label">годин</div>
                        </div>
                        <div class="countdown-item">
                            <div class="countdown-number">0</div>
                            <div class="countdown-label">хвилин</div>
                        </div>
                        <div class="countdown-item">
                            <div class="countdown-number">0</div>
                            <div class="countdown-label">секунд</div>
                        </div>
                    `;
                }
            }
        }
        
        updateCountdown(); // Вызвать сразу, чтобы не ждать первого интервала
        setInterval(updateCountdown, 1000);
    }
    
    // Устанавливаем индексы для элементов таймлайна для плавной анимации
    const allTimelineEvents = document.querySelectorAll('.timeline-event');
    allTimelineEvents.forEach((event, index) => {
        event.style.setProperty('--timeline-index', index);
    });
    
    // Анимации при скролле с помощью GSAP и ScrollTrigger
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        
        // Анимация заголовков секций
        const sectionHeadings = document.querySelectorAll('.section-heading');
        sectionHeadings.forEach(heading => {
            gsap.to(heading, {
                scrollTrigger: {
                    trigger: heading,
                    start: "top 80%",
                    once: true, // Анимация сработает только один раз
                    onEnter: () => heading.classList.add('animated')
                }
            });
        });
        
        // Анимация текстовых блоков
        const animatedTexts = document.querySelectorAll('.animate-text');
        animatedTexts.forEach((text, index) => {
            gsap.to(text, {
                scrollTrigger: {
                    trigger: text,
                    start: "top 85%",
                    onEnter: () => {
                        text.classList.add('animated');
                        // Добавляем задержку для каждого следующего параграфа
                        setTimeout(() => {
                            text.style.transitionDelay = '0s';
                        }, 100 * index);
                    }
                }
            });
        });
        
        // Анимация заголовка в About секции
        const aboutTitle = document.querySelector('.about-title');
        if (aboutTitle) {
            gsap.to(aboutTitle, {
                scrollTrigger: {
                    trigger: aboutTitle,
                    start: "top 80%",
                    once: true, // Анимация сработает только один раз
                    onEnter: () => aboutTitle.classList.add('animated')
                }
            });
        }
        
        // Анимация акцента заголовка
        const titleAccent = document.querySelector('.title-accent');
        if (titleAccent) {
            gsap.to(titleAccent, {
                scrollTrigger: {
                    trigger: titleAccent,
                    start: "top 80%",
                    once: true, // Анимация сработает только один раз
                    onEnter: () => titleAccent.classList.add('animated')
                }
            });
        }
        
        // Анимация статистики
        const aboutStats = document.querySelector('.about-stats');
        if (aboutStats) {
            gsap.to(aboutStats, {
                scrollTrigger: {
                    trigger: aboutStats,
                    start: "top 85%",
                    once: true, // Анимация сработает только один раз
                    onEnter: () => aboutStats.classList.add('animated')
                }
            });
        }
        
        // Анимация изображения в секции About
        const aboutImage = document.querySelector('.about-image');
        if (aboutImage) {
            gsap.to(aboutImage, {
                scrollTrigger: {
                    trigger: aboutImage,
                    start: "top 80%",
                    once: true, // Анимация сработает только один раз
                    onEnter: () => aboutImage.classList.add('animated')
                }
            });
        }
        
        // Анимация бейджа в секции About
        const aboutBadge = document.querySelector('.about-badge');
        if (aboutBadge) {
            gsap.to(aboutBadge, {
                scrollTrigger: {
                    trigger: '.about-image',
                    start: "top 80%",
                    once: true, // Анимация сработает только один раз
                    onEnter: () => aboutBadge.classList.add('animated')
                }
            });
        }
        
        // Анимация событий в таймлайне
        const timelineEvents = document.querySelectorAll('.timeline-event');
        timelineEvents.forEach((event, index) => {
            // Используем одноразовый триггер для анимации (once: true)
            gsap.to(event, {
                scrollTrigger: {
                    trigger: event,
                    start: "top 85%",
                    once: true, // Анимация сработает только один раз при первом скролле
                    onEnter: () => {
                        event.classList.add('animated');
                        
                        // Анимация постепенного появления событий на таймлайне
                        gsap.fromTo(
                            event, 
                            { opacity: 0, x: -20 },
                            { 
                                opacity: 1, 
                                x: 0, 
                                duration: 0.6,
                                delay: index * 0.1
                            }
                        );
                        
                        // Добавляем особую анимацию для специальных событий
                        if (event.querySelector('.special-event')) {
                            const specialEvent = event.querySelector('.special-event');
                            gsap.fromTo(specialEvent, 
                                { boxShadow: '0 0 0 rgba(255, 204, 0, 0)' }, 
                                { 
                                    boxShadow: '0 0 20px rgba(255, 204, 0, 0.3)', 
                                    duration: 1.5,
                                    repeat: 1,
                                    yoyo: true,
                                    delay: index * 0.1 + 0.3
                                }
                            );
                        }
                        
                        // Анимация точек на таймлайне
                        gsap.fromTo(
                            event,
                            { '--dot-scale': 0, '--dot-opacity': 0 },
                            { 
                                '--dot-scale': 1, 
                                '--dot-opacity': 1, 
                                duration: 0.4,
                                delay: index * 0.1
                            }
                        );
                    }
                }
            });
        });
        
        // Анимация секции Venue
        const venueDetails = document.querySelector('.venue-details');
        if (venueDetails) {
            gsap.to(venueDetails, {
                scrollTrigger: {
                    trigger: venueDetails,
                    start: "top 80%",
                    onEnter: () => venueDetails.classList.add('animated')
                }
            });
        }
        
        // Анимация карты в секции Venue
        const venueMap = document.querySelector('.venue-map');
        if (venueMap) {
            gsap.to(venueMap, {
                scrollTrigger: {
                    trigger: venueMap,
                    start: "top 80%",
                    onEnter: () => venueMap.classList.add('animated')
                }
            });
        }
        
        // Анимация контактных карточек
        const contactCards = document.querySelectorAll('.contact-card');
        contactCards.forEach((card, index) => {
            gsap.to(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    onEnter: () => {
                        card.classList.add('animated');
                        
                        // Добавляем постепенное появление карточек
                        gsap.fromTo(
                            card, 
                            { opacity: 0, y: 30 },
                            { 
                                opacity: 1, 
                                y: 0, 
                                duration: 0.5,
                                delay: index * 0.15
                            }
                        );
                    }
                }
            });
        });
        
        // Анимация блока социальных сетей
        const socialCta = document.querySelector('.social-cta');
        if (socialCta) {
            gsap.to(socialCta, {
                scrollTrigger: {
                    trigger: socialCta,
                    start: "top 85%",
                    onEnter: () => {
                        socialCta.classList.add('animated');
                        
                        // Добавляем эффект появления социальных иконок
                        const socialLinks = socialCta.querySelectorAll('.social-link');
                        socialLinks.forEach((link, index) => {
                            gsap.fromTo(
                                link,
                                { scale: 0, opacity: 0 },
                                { 
                                    scale: 1, 
                                    opacity: 1, 
                                    duration: 0.5,
                                    delay: 0.3 + (index * 0.1),
                                    ease: "back.out(1.7)"
                                }
                            );
                        });
                    }
                }
            });
        }
        
        // Анимация секций при скролле
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            if (section.classList.contains('hero')) return; // Пропустить hero секцию
            
            gsap.to(section, {
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    onEnter: () => section.classList.add('visible')
                }
            });
        });
        
        // Анимация статистики в About секции
        const statBoxes = document.querySelectorAll('.stat-box');
        statBoxes.forEach((box, index) => {
            gsap.to(box, {
                scrollTrigger: {
                    trigger: box,
                    start: "top 85%",
                    once: true, // Анимация сработает только один раз
                    onEnter: () => box.classList.add('animated')
                }
            });
        });
        
        // Анимация заголовка в Schedule секции
        const scheduleTitle = document.querySelector('.schedule-title');
        if (scheduleTitle) {
            gsap.to(scheduleTitle, {
                scrollTrigger: {
                    trigger: scheduleTitle,
                    start: "top 80%",
                    once: true, // Анимация сработает только один раз
                    onEnter: () => scheduleTitle.classList.add('animated')
                }
            });
        }
        
        // Анимация акцента заголовка в Schedule
        const scheduleTitleAccent = document.querySelector('.schedule-title-container .title-accent');
        if (scheduleTitleAccent) {
            gsap.to(scheduleTitleAccent, {
                scrollTrigger: {
                    trigger: scheduleTitleAccent,
                    start: "top 80%",
                    once: true, // Анимация сработает только один раз
                    onEnter: () => scheduleTitleAccent.classList.add('animated')
                }
            });
        }
        
        // Анимация кнопок табов
        const tabButtons = document.querySelectorAll('.tab-btn');
        tabButtons.forEach((button, index) => {
            gsap.to(button, {
                scrollTrigger: {
                    trigger: button,
                    start: "top 85%",
                    once: true, // Анимация сработает только один раз
                    onEnter: () => button.classList.add('animated')
                }
            });
        });
    }
    
    // Анимация цифр в секции статистики
    function animateNumbers() {
        const statNumbers = document.querySelectorAll('.stat-number');
        
        statNumbers.forEach(number => {
            // Сохраняем исходный текст для определения наличия плюса
            const targetText = number.textContent;
            // Извлекаем числовое значение
            let target = parseInt(targetText.replace(/\D/g, ''));
            // Проверяем наличие "+" в конце
            const hasPlus = targetText.includes('+');
            // Настройки анимации
            const duration = 2000; // 2 секунды на анимацию
            const frameRate = 60; // кадров в секунду
            const totalFrames = duration / 1000 * frameRate;
            const increment = target / totalFrames;
            
            let current = 0;
            let frame = 0;
            
            // Начинаем с нуля
            number.textContent = '0';
            
            // Функция обновления числа
            const updateNumber = () => {
                frame++;
                current += increment;
                
                if (current < target && frame < totalFrames) {
                    number.textContent = Math.floor(current);
                    requestAnimationFrame(updateNumber);
                } else {
                    // Добавляем "+" обратно, если он был
                    number.textContent = hasPlus ? target + '+' : target;
                }
            };
            
            // Используем IntersectionObserver для запуска анимации
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Добавляем небольшую задержку для каждого следующего числа
                        const delay = Array.from(statNumbers).indexOf(number) * 200;
                        setTimeout(() => {
                            updateNumber();
                        }, delay);
                        observer.unobserve(number);
                    }
                });
            }, { threshold: 0.2 });
            
            observer.observe(number);
        });
    }
    
    // Запустить анимацию чисел с небольшой задержкой после загрузки страницы
    setTimeout(animateNumbers, 500);
    
    // Табы в секции расписания
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    const tabContentsContainer = document.querySelector('.tab-contents');
    
    // Функция для обновления высоты контейнера табов
    function updateTabContainerHeight(activeContent) {
        if (tabContentsContainer) {
            // Сначала установим высоту контейнера равной высоте активного контента + небольшой запас
            const contentHeight = activeContent.offsetHeight;
            tabContentsContainer.style.minHeight = `${contentHeight + 50}px`;
        }
    }
    
    // Устанавливаем начальную высоту для контейнера табов на основе первого (активного) таба
    const initialActiveContent = document.querySelector('.tab-content.active');
    if (initialActiveContent && tabContentsContainer) {
        updateTabContainerHeight(initialActiveContent);
    }
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const day = button.getAttribute('data-day');
            
            // Сбросить активные классы
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => {
                content.classList.remove('active');
                // Добавляем анимацию плавного скрытия и отображения контента
                content.style.opacity = '0';
                content.style.transform = 'translateY(30px)';
            });
            
            // Установить новые активные элементы
            button.classList.add('active');
            const activeContent = document.querySelector(`.tab-content[data-day="${day}"]`);
            activeContent.classList.add('active');
            
            // Плавное появление контента с небольшой задержкой
            setTimeout(() => {
                activeContent.style.opacity = '1';
                activeContent.style.transform = 'translateY(0)';
                
                // Обновляем высоту контейнера
                updateTabContainerHeight(activeContent);
            }, 50);
        });
    });
    
    // Скрытие/показ хедера при скролле
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Если прокрутили больше порога
        if (Math.abs(lastScrollTop - scrollTop) > scrollThreshold) {
            // Скролл вниз - скрываем хедер
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                header.classList.add('scrolling-down');
                header.classList.remove('scrolling-up');
            } 
            // Скролл вверх - показываем хедер
            else {
                header.classList.remove('scrolling-down');
                header.classList.add('scrolling-up');
            }
            
            lastScrollTop = scrollTop;
        }
        
        // Добавляем класс scrolled при прокрутке
        if (scrollTop > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});