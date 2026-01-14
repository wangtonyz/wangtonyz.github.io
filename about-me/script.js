// Initialize the portfolio website
document.addEventListener('DOMContentLoaded', function() {
    // Animate skill bars when they come into view
    animateSkillBars();
    
    // Add scroll animations
    addScrollAnimations();
    
    // Initialize terminal-like typing effect
    initTerminalEffect();
    
    // Add interactive elements
    addInteractiveElements();
    
    // Set up scroll indicator behavior
    setupScrollIndicator();
    
    // Initialize language toggle functionality
    initializeLanguageToggle();
});

// Animate skill bars when they come into view
function animateSkillBars() {
    const skillLevels = document.querySelectorAll('.skill-level');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillLevel = entry.target;
                const percentage = skillLevel.getAttribute('data-skill');
                skillLevel.style.width = percentage + '%';
                
                // Add a slight delay for the animation
                setTimeout(() => {
                    skillLevel.style.transition = 'width 2s cubic-bezier(0.65, 0, 0.35, 1)';
                }, 100);
                
                // Remove observer after animation starts
                skillObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    skillLevels.forEach(skill => {
        skillObserver.observe(skill);
    });
}

// Add scroll animations for sections
function addScrollAnimations() {
    const sections = document.querySelectorAll('section');
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                
                // Add staggered animation delays for elements within the section
                const childElements = entry.target.querySelectorAll('h2, .education-card, .skill-category, .timeline-item, .summary-item');
                childElements.forEach((el, index) => {
                    el.style.animationDelay = `${index * 0.1}s`;
                    el.classList.add('delay-' + (index % 4 + 1));
                });
                
                sectionObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
}

// Initialize terminal-like typing effect for hero subtitle
function initTerminalEffect() {
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const texts = [
        'Cloud Native • Microservices • Distributed Systems',
        'Kubernetes • Docker • Go • Backend Engineering',
        'Open Source Contributor • Tech Enthusiast',
        'Problem Solver • Continuous Learner'
    ];
    
    let currentIndex = 0;
    
    function typeText(text, element, callback) {
        let i = 0;
        element.textContent = '';
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, 50);
            } else if (callback) {
                setTimeout(callback, 2000);
            }
        }
        
        type();
    }
    
    function cycleTexts() {
        typeText(texts[currentIndex], heroSubtitle, () => {
            currentIndex = (currentIndex + 1) % texts.length;
            setTimeout(cycleTexts, 3000);
        });
    }
    
    cycleTexts();
}

// Add interactive elements
function addInteractiveElements() {
    // Add hover effects to contact links
    const contactLinks = document.querySelectorAll('.contact-link, .contact-item');
    contactLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 10px 25px rgba(0, 212, 255, 0.3)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Add click effects to timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle('expanded');
        });
    });
    
    // Add smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 40, // Account for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add copy-to-clipboard for contact info
    const phoneElement = document.querySelector('.contact-item');
    if (phoneElement) {
        phoneElement.addEventListener('click', function() {
            navigator.clipboard.writeText('+86 13041156677').then(() => {
                const originalHTML = this.innerHTML;
                this.innerHTML = '<i class="fas fa-check"></i> Copied!';
                setTimeout(() => {
                    this.innerHTML = originalHTML;
                }, 2000);
            });
        });
    }
}

// Set up scroll indicator behavior
function setupScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (scrollIndicator) {
        // Hide scroll indicator when user starts scrolling
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                scrollIndicator.style.opacity = '0';
                scrollIndicator.style.pointerEvents = 'none';
            } else {
                scrollIndicator.style.opacity = '1';
                scrollIndicator.style.pointerEvents = 'auto';
            }
        });
        
        // Add click handler to scroll to next section
        scrollIndicator.addEventListener('click', function() {
            const nextSection = document.querySelector('#about');
            if (nextSection) {
                window.scrollTo({
                    top: nextSection.offsetTop - 40,
                    behavior: 'smooth'
                });
            }
        });
    }
}

// Add particle background effect
function initParticleBackground() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '-1';
    canvas.style.pointerEvents = 'none';
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = Math.random() * 1 - 0.5;
            this.speedY = Math.random() * 1 - 0.5;
            this.color = `rgba(${Math.floor(Math.random() * 100 + 100)}, ${Math.floor(Math.random() * 155 + 100)}, 255, ${Math.random() * 0.5 + 0.1})`;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
            if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;
        }
        
        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    function initParticles() {
        particles = [];
        const particleCount = Math.min(100, Math.floor(canvas.width * canvas.height / 10000));
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }
    
    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
            
            // Draw connections between nearby particles
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    ctx.strokeStyle = `rgba(0, 212, 255, ${0.2 * (1 - distance/100)})`;
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        
        requestAnimationFrame(animateParticles);
    }
    
    initParticles();
    animateParticles();
}

// Initialize particle background after a short delay
setTimeout(initParticleBackground, 1000);


// Add keyboard navigation
function addKeyboardNavigation() {
    document.addEventListener('keydown', function(e) {
        // Use arrow keys to navigate between sections
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            const currentScroll = window.scrollY;
            const sections = Array.from(document.querySelectorAll('section'));
            const nextSection = sections.find(section => section.offsetTop > currentScroll);
            
            if (nextSection) {
                window.scrollTo({
                    top: nextSection.offsetTop - 40,
                    behavior: 'smooth'
                });
            }
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            const currentScroll = window.scrollY;
            const sections = Array.from(document.querySelectorAll('section')).reverse();
            const prevSection = sections.find(section => section.offsetTop < currentScroll);
            
            if (prevSection) {
                window.scrollTo({
                    top: prevSection.offsetTop - 40,
                    behavior: 'smooth'
                });
            }
        }
    });
}

// Initialize keyboard navigation
addKeyboardNavigation();

// Language toggle functionality
function initializeLanguageToggle() {
    const langToggleBtn = document.getElementById('lang-toggle');
    
    if (!langToggleBtn) {
        console.warn('Language toggle button not found');
        return;
    }
    
    langToggleBtn.addEventListener('click', function() {
        const currentLang = this.getAttribute('data-lang');
        const newLang = currentLang === 'en' ? 'zh' : 'en';
        
        // Update button text and state
        this.textContent = newLang.toUpperCase();
        this.setAttribute('data-lang', newLang);
        
        // Update all experience-related elements
        updateExperienceContent(newLang);
    });
}

// Update experience content based on selected language
function updateExperienceContent(lang) {
    // Update job titles
    const expTitles = document.querySelectorAll('.exp-title');
    expTitles.forEach(title => {
        title.textContent = title.getAttribute(`data-${lang}`);
    });
    
    // Update company names
    const expCompanies = document.querySelectorAll('.exp-company');
    expCompanies.forEach(company => {
        company.textContent = company.getAttribute(`data-${lang}`);
    });
    
    // Update position descriptions
    const expPositions = document.querySelectorAll('.exp-position');
    expPositions.forEach(position => {
        position.textContent = position.getAttribute(`data-${lang}`);
    });
    
    // Update job descriptions
    const expDescriptions = document.querySelectorAll('.exp-desc');
    expDescriptions.forEach(desc => {
        desc.textContent = desc.getAttribute(`data-${lang}`);
    });
}

// Update todo list status
console.log('JavaScript functionality initialized successfully');