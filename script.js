// Smooth scrolling
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

// Form validation and submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        // Validate inputs
        if (!name || !email || !message) {
            alert('Por favor, preencha todos os campos');
            return;
        }
        
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, insira um email válido');
            return;
        }
        
        // Here you would send the form data to your backend
        // For now, we'll just show a success message
        alert('Obrigado por entrar em contato! Responderemos em breve.');
        this.reset();
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    observer.observe(card);
});

// Mobile menu toggle (if needed)
const navLinks = document.querySelector('.nav-links');
if (navLinks) {
    navLinks.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            // Close mobile menu if open
            this.style.display = 'flex';
        }
    });
}

// Device detection for download buttons
function detectDevice() {
    const ua = navigator.userAgent;
    
    const downloadBtns = document.querySelectorAll('.download-btn');
    downloadBtns.forEach(btn => {
        if (btn.classList.contains('ios')) {
            if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) {
                btn.addEventListener('click', function(e) {
                    // iOS device - you can add auto-redirect here
                });
            }
        } else if (btn.classList.contains('android')) {
            if (/Android/.test(ua)) {
                btn.addEventListener('click', function(e) {
                    // Android device - you can add auto-redirect here
                });
            }
        }
    });
}

// Run device detection
window.addEventListener('DOMContentLoaded', detectDevice);

// Scroll effect for header
let lastScroll = 0;
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.2)';
    }
    
    lastScroll = currentScroll;
});

// Log for development
console.log('App site loaded successfully!');
