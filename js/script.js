// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functions
    initNavbar();
    initSmoothScroll();
    initPortfolioFilter();
    initTestimonials();
    initContactForm();
    initNewsletterForm();
    initCountdownTimer();
    initModal();
    updateCopyrightYear();
    initAnimations();
    
    // Add portfolio items dynamically
    loadPortfolioItems();
});

// Initialize Navbar
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Active nav link on scroll
        const sections = document.querySelectorAll('section[id]');
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Initialize Smooth Scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize Portfolio Filter
function initPortfolioFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Load Portfolio Items
function loadPortfolioItems() {
    const portfolioGrid = document.querySelector('.portfolio-grid');
    
    // Sample portfolio data
    const portfolioItems = [
        {
            id: 1,
            title: "Ahmad & Sari",
            theme: "Tema Modern Gold",
            category: "modern",
            image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            description: "Undangan digital dengan tema modern dan sentuhan emas, dilengkapi dengan animasi elegan.",
            features: ["Animasi Emas", "RSVP Online", "Gallery Foto", "Countdown Timer"]
        },
        {
            id: 2,
            title: "Rizky & Dian",
            theme: "Tema Islami Elegan",
            category: "islami",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            description: "Undangan dengan nuansa islami yang elegan, dilengkapi ayat Al-Qur'an dan doa pernikahan.",
            features: ["Ayat Al-Qur'an", "Doa Pernikahan", "Waktu Shalat", "Musik Islami"]
        },
        {
            id: 3,
            title: "Budi & Ani",
            theme: "Tema Floral Romantic",
            category: "elegant",
            image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            description: "Undangan romantis dengan tema bunga-bunga dan warna pastel yang lembut.",
            features: ["Floral Design", "Warna Pastel", "Musik Romantis", "Love Story Timeline"]
        },
        {
            id: 4,
            title: "Doni & Maya",
            theme: "Tema Minimalis White",
            category: "modern",
            image: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            description: "Desain minimalis dengan nuansa putih bersih dan elegan, cocok untuk pernikahan modern.",
            features: ["Minimalis", "Interaktif", "Gallery Slider", "RSVP Online"]
        },
        {
            id: 5,
            title: "Fajar & Rina",
            theme: "Tema Classic Luxury",
            category: "elegant",
            image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            description: "Undangan mewah dengan sentuhan klasik dan elegan, untuk pernikahan yang berkesan.",
            features: ["Design Mewah", "Animasi Khusus", "Video Background", "Custom Musik"]
        },
        {
            id: 6,
            title: "Hendra & Lisa",
            theme: "Tema Custom Artistic",
            category: "custom",
            image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            description: "Desain custom dengan sentuhan artistic sesuai permintaan pasangan.",
            features: ["Full Custom", "Artistic Design", "Interaktif Khusus", "Priority Support"]
        },
        {
            id: 7,
            title: "Joko & Siti",
            theme: "Tema Garden Wedding",
            category: "wedding",
            image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            description: "Undangan dengan tema garden wedding yang segar dan natural.",
            features: ["Garden Theme", "Natural Color", "RSVP Online", "Location Map"]
        },
        {
            id: 8,
            title: "Kevin & Putri",
            theme: "Tema Beach Wedding",
            category: "wedding",
            image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            description: "Undangan dengan tema pantai yang segar, cocok untuk pernikahan di pantai.",
            features: ["Beach Theme", "Blue Color Palette", "Wave Animation", "Beach Sound"]
        },
        {
            id: 9,
            title: "Lukman & Nia",
            theme: "Tema Vintage Classic",
            category: "elegant",
            image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            description: "Undangan dengan nuansa vintage klasik yang timeless dan elegan.",
            features: ["Vintage Design", "Classic Color", "Old Music", "Retro Animation"]
        },
        {
            id: 10,
            title: "Miko & Dinda",
            theme: "Tema Modern Geometric",
            category: "modern",
            image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            description: "Desain modern dengan pola geometris yang unik dan eye-catching.",
            features: ["Geometric Pattern", "Modern Design", "Interactive Element", "Smooth Animation"]
        },
        {
            id: 11,
            title: "Nando & Winda",
            theme: "Tema Rustic Natural",
            category: "custom",
            image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            description: "Undangan dengan tema rustic yang natural dan hangat, cocok untuk pernikahan outdoor.",
            features: ["Rustic Design", "Natural Element", "Warm Color", "Wood Texture"]
        },
        {
            id: 12,
            title: "Oki & Fitri",
            theme: "Tema Luxury Gold",
            category: "elegant",
            image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            description: "Undangan mewah dengan sentuhan emas yang glamorous dan elegan.",
            features: ["Gold Design", "Luxury Style", "Elegant Animation", "Classical Music"]
        },
        {
            id: 13,
            title: "Pandu & Rara",
            theme: "Tema Modern Calligraphy",
            category: "modern",
            image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            description: "Desain modern dengan kaligrafi elegan sebagai fokus utama.",
            features: ["Calligraphy Focus", "Modern Layout", "Elegant Typography", "Smooth Transition"]
        },
        {
            id: 14,
            title: "Qomar & Lina",
            theme: "Tema Simple & Clean",
            category: "modern",
            image: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            description: "Undangan dengan desain simple dan clean yang mudah dibaca dan elegan.",
            features: ["Simple Design", "Clean Layout", "Easy Navigation", "Fast Loading"]
        },
        {
            id: 15,
            title: "Rendi & Siska",
            theme: "Tema Boho Chic",
            category: "custom",
            image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            description: "Undangan dengan tema boho chic yang artistic dan unik.",
            features: ["Boho Design", "Artistic Element", "Unique Layout", "Custom Illustration"]
        },
        {
            id: 16,
            title: "Sandi & Yuni",
            theme: "Tema Romantic Pink",
            category: "wedding",
            image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            description: "Undangan romantis dengan dominasi warna pink yang lembut dan feminin.",
            features: ["Pink Theme", "Romantic Design", "Soft Animation", "Love Music"]
        }
    ];
    
    // Clear existing content
    portfolioGrid.innerHTML = '';
    
    // Generate portfolio items
    portfolioItems.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item fade-in';
        portfolioItem.setAttribute('data-category', item.category);
        
        // Create tags HTML
        const tagsHtml = item.features.map(feature => `<span>${feature}</span>`).join('');
        
        portfolioItem.innerHTML = `
            <div class="portfolio-image">
                <img src="${item.image}" alt="${item.title}">
                <div class="portfolio-overlay">
                    <div class="portfolio-buttons">
                        <button class="btn btn-sm btn-primary preview-btn" data-id="${item.id}">Preview</button>
                        <button class="btn btn-sm btn-outline detail-btn" data-id="${item.id}">Detail</button>
                    </div>
                </div>
            </div>
            <div class="portfolio-info">
                <h4>${item.title}</h4>
                <p>${item.theme}</p>
                <div class="portfolio-tags">
                    ${tagsHtml}
                </div>
            </div>
        `;
        
        portfolioGrid.appendChild(portfolioItem);
    });
    
    // Add event listeners to portfolio buttons
    document.querySelectorAll('.preview-btn').forEach(button => {
        button.addEventListener('click', function() {
            const itemId = parseInt(this.getAttribute('data-id'));
            openPortfolioModal(itemId);
        });
    });
    
    document.querySelectorAll('.detail-btn').forEach(button => {
        button.addEventListener('click', function() {
            const itemId = parseInt(this.getAttribute('data-id'));
            const item = portfolioItems.find(i => i.id === itemId);
            if (item) {
                window.open(`https://wa.me/6281234567890?text=Halo%20Rekan%20Wedding,%20saya%20ingin%20tanya%20tentang%20template%20${encodeURIComponent(item.title)}`, '_blank');
            }
        });
    });
    
    // Add event listeners to template preview buttons
    document.querySelectorAll('.preview-btn[data-template]').forEach(button => {
        button.addEventListener('click', function() {
            const templateName = this.getAttribute('data-template');
            alert(`Demo template ${templateName} akan ditampilkan di sini. Untuk demo lengkap, silakan hubungi kami via WhatsApp.`);
        });
    });
    
    // Add event listeners to template use buttons
    document.querySelectorAll('.btn-template').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const templateCard = this.closest('.template-card');
            const templateName = templateCard.querySelector('h3').textContent;
            window.open(`https://wa.me/6281234567890?text=Halo%20Rekan%20Wedding,%20saya%20ingin%20menggunakan%20template%20${encodeURIComponent(templateName)}`, '_blank');
        });
    });
}

// Initialize Testimonials
function initTestimonials() {
    const carouselInner = document.querySelector('.carousel-inner');
    
    // Sample testimonials data
    const testimonials = [
        {
            name: "Andi & Rina",
            avatar: "https://randomuser.me/api/portraits/women/32.jpg",
            text: "Undangan digital dari Rekan Wedding sangat elegan dan semua tamu kami memuji. Proses pengerjaannya cepat dan hasilnya melebihi ekspektasi!",
            rating: 5
        },
        {
            name: "Budi & Sari",
            avatar: "https://randomuser.me/api/portraits/men/54.jpg",
            text: "Kami sangat puas dengan undangan digital yang dibuat oleh Rekan Wedding. Fitur RSVP online sangat membantu untuk menghitung jumlah tamu.",
            rating: 5
        },
        {
            name: "Candra & Dini",
            avatar: "https://randomuser.me/api/portraits/women/65.jpg",
            text: "Desainnya modern dan elegan, sesuai dengan tema pernikahan kami. Tim Rekan Wedding sangat responsif dan profesional.",
            rating: 5
        },
        {
            name: "Doni & Eva",
            avatar: "https://randomuser.me/api/portraits/men/76.jpg",
            text: "Undangan digitalnya interaktif dan mudah dibagikan. Tamu-tamu kami terutama yang jauh sangat mengapresiasi kemudahan ini.",
            rating: 5
        },
        {
            name: "Eko & Fina",
            avatar: "https://randomuser.me/api/portraits/women/43.jpg",
            text: "Harga terjangkau untuk kualitas premium. Hasil undangan digital kami sangat memukau dan semua fitur berjalan dengan baik.",
            rating: 5
        }
    ];
    
    // Generate testimonial items
    testimonials.forEach((testimonial, index) => {
        const carouselItem = document.createElement('div');
        carouselItem.className = `carousel-item ${index === 0 ? 'active' : ''}`;
        
        // Generate star rating
        const stars = '⭐'.repeat(testimonial.rating);
        
        carouselItem.innerHTML = `
            <div class="testimonial-item">
                <div class="testimonial-avatar">
                    <img src="${testimonial.avatar}" alt="${testimonial.name}">
                </div>
                <div class="testimonial-rating">
                    ${stars}
                </div>
                <p class="testimonial-text">"${testimonial.text}"</p>
                <h4 class="testimonial-author">${testimonial.name}</h4>
            </div>
        `;
        
        carouselInner.appendChild(carouselItem);
    });
    
    // Initialize carousel
    const testimonialCarousel = new bootstrap.Carousel(document.getElementById('testimonialCarousel'), {
        interval: 5000,
        ride: 'carousel'
    });
}

// Initialize Contact Form
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            let isValid = true;
            
            if (!name.trim()) {
                showError('name', 'Harap isi nama lengkap Anda.');
                isValid = false;
            } else {
                hideError('name');
            }
            
            if (!email.trim() || !isValidEmail(email)) {
                showError('email', 'Harap isi email yang valid.');
                isValid = false;
            } else {
                hideError('email');
            }
            
            if (!message.trim()) {
                showError('message', 'Harap isi pesan Anda.');
                isValid = false;
            } else {
                hideError('message');
            }
            
            if (isValid) {
                // Simulate form submission
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';
                submitBtn.disabled = true;
                
                // In a real application, you would send the form data to a server here
                setTimeout(() => {
                    alert(`Terima kasih ${name}! Pesan Anda telah berhasil dikirim. Kami akan menghubungi Anda via email ${email} dalam waktu 1x24 jam.`);
                    
                    // Reset form
                    contactForm.reset();
                    
                    // Reset button
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, 1500);
            }
        });
    }
}

// Initialize Newsletter Form
function initNewsletterForm() {
    const newsletterForm = document.getElementById('newsletterForm');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            if (!email.trim() || !isValidEmail(email)) {
                alert('Harap masukkan email yang valid.');
                return;
            }
            
            // Simulate subscription
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalIcon = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert(`Terima kasih! Email ${email} telah berhasil terdaftar untuk newsletter kami.`);
                emailInput.value = '';
                
                // Reset button
                submitBtn.innerHTML = originalIcon;
                submitBtn.disabled = false;
            }, 1000);
        });
    }
}

// Initialize Countdown Timer
function initCountdownTimer() {
    // Set wedding date (example: 30 days from now)
    const weddingDate = new Date();
    weddingDate.setDate(weddingDate.getDate() + 30);
    
    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = weddingDate - now;
        
        // Calculate days, hours, minutes, seconds
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        // Update display
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        
        // If countdown is finished
        if (timeLeft < 0) {
            clearInterval(countdownInterval);
            document.querySelector('.countdown-timer').innerHTML = '<h4>Selamat Menikah!</h4>';
        }
    }
    
    // Update countdown every second
    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);
}

// Initialize Modal
function initModal() {
    // Portfolio modal functionality is handled in openPortfolioModal function
}

// Open Portfolio Modal
function openPortfolioModal(itemId) {
    // Sample portfolio data (same as in loadPortfolioItems)
    const portfolioItems = [
        {
            id: 1,
            title: "Ahmad & Sari",
            theme: "Tema Modern Gold",
            category: "modern",
            image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            description: "Undangan digital dengan tema modern dan sentuhan emas, dilengkapi dengan animasi elegan. Desain ini cocok untuk pasangan yang menginginkan undangan yang modern namun tetap elegan.",
            features: ["Animasi Emas", "RSVP Online", "Gallery Foto", "Countdown Timer", "Google Maps", "Musik Background"]
        },
        // Add other items as needed
    ];
    
    const item = portfolioItems.find(i => i.id === itemId);
    
    if (item) {
        // Set modal content
        document.getElementById('portfolioModalLabel').textContent = `Undangan ${item.title}`;
        document.getElementById('portfolioCoupleName').textContent = item.title;
        document.getElementById('portfolioTheme').textContent = item.theme;
        document.getElementById('portfolioDescription').textContent = item.description;
        
        // Set features
        const featuresContainer = document.getElementById('portfolioFeatures');
        featuresContainer.innerHTML = item.features.map(feature => 
            `<span class="badge bg-gold me-2 mb-2">${feature}</span>`
        ).join('');
        
        // Set carousel images
        const carouselInner = document.getElementById('portfolioCarouselInner');
        carouselInner.innerHTML = `
            <div class="carousel-item active">
                <img src="${item.image}" class="d-block w-100" alt="${item.title}">
            </div>
            <div class="carousel-item">
                <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" class="d-block w-100" alt="Detail Undangan">
            </div>
            <div class="carousel-item">
                <img src="https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" class="d-block w-100" alt="Mobile View">
            </div>
        `;
        
        // Set WhatsApp button
        const whatsappBtn = document.getElementById('portfolioWhatsAppBtn');
        whatsappBtn.href = `https://wa.me/6281234567890?text=Halo%20Rekan%20Wedding,%20saya%20tertarik%20dengan%20undangan%20${encodeURIComponent(item.title)}%20(${encodeURIComponent(item.theme)})`;
        
        // Show modal
        const portfolioModal = new bootstrap.Modal(document.getElementById('portfolioModal'));
        portfolioModal.show();
    }
}

// Update Copyright Year
function updateCopyrightYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Initialize Animations
function initAnimations() {
    // Intersection Observer for fade-in animations
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    fadeElements.forEach(element => {
        observer.observe(element);
    });
}

// Helper Functions
function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorElement = field.nextElementSibling;
    
    field.classList.add('is-invalid');
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function hideError(fieldId) {
    const field = document.getElementById(fieldId);
    const errorElement = field.nextElementSibling;
    
    field.classList.remove('is-invalid');
    errorElement.style.display = 'none';
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// WhatsApp Redirect Function
function redirectToWhatsApp(message) {
    const phoneNumber = '6281234567890';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
}

// Add event listeners for WhatsApp buttons
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('whatsapp-btn') || 
        e.target.closest('.whatsapp-btn')) {
        const button = e.target.classList.contains('whatsapp-btn') ? e.target : e.target.closest('.whatsapp-btn');
        const message = button.getAttribute('data-message') || 'Halo Rekan Wedding, saya ingin konsultasi tentang undangan digital pernikahan.';
        redirectToWhatsApp(message);
    }
});