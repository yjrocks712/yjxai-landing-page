document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Offset for header height
                    behavior: 'smooth'
                });
            }
        });
    });

    // Responsive navigation menu toggle
    const createMobileMenu = () => {
        if (window.innerWidth <= 768 && !document.querySelector('.mobile-menu-btn')) {
            const header = document.querySelector('header .container');
            const nav = document.querySelector('nav');
            
            const mobileMenuBtn = document.createElement('button');
            mobileMenuBtn.classList.add('mobile-menu-btn');
            mobileMenuBtn.innerHTML = '☰';
            mobileMenuBtn.style.background = 'none';
            mobileMenuBtn.style.border = 'none';
            mobileMenuBtn.style.fontSize = '1.5rem';
            mobileMenuBtn.style.cursor = 'pointer';
            
            mobileMenuBtn.addEventListener('click', () => {
                nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
            });
            
            header.appendChild(mobileMenuBtn);
        }
    };
    
    createMobileMenu();
    
    window.addEventListener('resize', createMobileMenu);

    // Add active class to current page in navigation
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === '#home')) {
            link.style.color = 'var(--primary-color)';
            link.style.fontWeight = '700';
        }
    });
}); 