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

    // Free Mode Toggle functionality
    const freeModeToggle = document.getElementById('free-mode-toggle');
    const recCards = document.querySelectorAll('.rec-card');
    
    if (freeModeToggle) {
        freeModeToggle.addEventListener('change', () => {
            const isFreeMode = freeModeToggle.checked;
            
            recCards.forEach(card => {
                const isFree = card.getAttribute('data-free') === 'true';
                
                if (isFreeMode) {
                    // Show only free models when in Free Mode
                    card.style.display = isFree ? 'block' : 'none';
                } else {
                    // Show all models when not in Free Mode
                    card.style.display = 'block';
                }
            });
        });
    }

    // Model opinions data
    const modelOpinions = {
        'grok3': `Why Grok 3 thinking. Simply because It has been able to solve my 64 Tennis Players question and no model till date has been able to do that. And when it comes to other questions it passed them all leaving the seating arrangement question which no model has yet been able to solve. So according to my POV this is the best Reasoning model.`,
        'openai-math': `Coming soon...`,
        'openai-backend': `Coming soon...`,
        'claude-frontend': `Coming soon...`,
        'claude-overall': `Coming soon...`,
        'gpt-creative': `Coming soon...`,
        'claude-convo': `Coming soon...`,
        'deepseek': `Coming soon...`,
        'gemma-reasoning': `Coming soon...`,
        'gemma-math': `Coming soon...`,
        'llama-coding': `Coming soon...`,
        'gemma-overall': `Coming soon...`,
        'gemmini': `Coming soon...`,
        'cursor': `Coming soon...`
    };

    // Modal functionality
    const modal = document.getElementById('model-modal');
    const closeModal = document.querySelector('.close-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalName = document.getElementById('modal-name');
    const modalLogo = document.getElementById('modal-logo');
    const modalOpinion = document.getElementById('modal-opinion');

    // Add click event to all model cards
    recCards.forEach(card => {
        card.addEventListener('click', () => {
            const modelId = card.getAttribute('data-model');
            const modelTitle = card.querySelector('h3').textContent;
            const modelName = card.querySelector('.model-name').textContent;
            const logoSrc = card.querySelector('.model-logo img').getAttribute('src');
            const opinion = modelOpinions[modelId] || 'Opinion coming soon...';
            
            // Set modal content
            modalTitle.textContent = modelTitle;
            modalName.textContent = modelName;
            modalLogo.setAttribute('src', logoSrc);
            modalOpinion.innerHTML = `<p>${opinion}</p>`;
            
            // Show modal with animation
            modal.style.display = 'block';
            setTimeout(() => {
                modal.classList.add('show');
            }, 10);
            
            // Prevent scrolling on body
            document.body.style.overflow = 'hidden';
        });
    });

    // Close modal functionality
    if (closeModal) {
        closeModal.addEventListener('click', closeModalFunction);
    }

    // Close modal when clicking outside the content
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModalFunction();
        }
    });

    // Close with escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModalFunction();
        }
    });

    function closeModalFunction() {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    }

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

    // Highlight active nav item based on scroll position
    const highlightNavOnScroll = () => {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('nav ul li a');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
                link.style.color = 'var(--primary-color)';
            }
        });
    };
    
    window.addEventListener('scroll', highlightNavOnScroll);
}); 