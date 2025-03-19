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
        'grok3': `Why Grok 3 Thinking? Simply because it has been able to solve my 64 Tennis Players question and no model till date has been able to do that. And when it comes to other questions, it passed them all leaving the seating arrangement question which no model has yet been able to solve. So according to my POV, this is the best Reasoning model.`,
        'openai-math': `Why o3 mini high? When I asked Frontier Maths Questions this model was the only one that could solve them. Frontier math is a benchmark that evaluates the capability of current LLMs to solve Research level Frontier Maths problems. The Models iteratively have to work with the user and come to the solution. Other models have not been able to do it, but o3 mini high was the only model to get it correct, so this model according to my POV is the best model when it comes to maths.`,
        'openai-backend': `By backend coding I mean everything that doesn't require aesthetics. Personally I have built Automatic Caption Generators, Audio/Video Auto-trimming etc. The UI was not that good but these were all functional. I have seen when it comes to physics or anything that doesn't rely on looks, OpenAI reasoning models are superior, so according to my POV o3 mini high is good at it.`,
        'claude-frontend': `By Frontend Coding model, anything that requires Aesthetics UI/UX, there is no competition especially to Claude 3.7 Sonnet models. The biggest reason according to me is the extended output of this series of model both thinking and non-thinking. Since they can generate very long code, they are able to write entire games in one go! In my test of Super Mario Game, they have given best performance and nearly coded the exact game which before this no model has been able to do. So in my POV, when it comes to frontend coding, this is best up until now.`,
        'claude-overall': `Best overall is not a model that is best in all. All models have strengths and weaknesses, but this is a model which you can blindly pick. So even though it's not the best in reasoning and maths, but it's one of the top models. So this model is according to me the one that will get your work done in most cases. So in my POV, the best overall is Claude 3.7 Sonnet Thinking.`,
        'gpt-creative': `So this is very hard to decide and I would personally say this can vary person to person. But I have seen that this model is good if you want to rewrite any content like give it a prompt and make it a new one with slight changes in topic or give it a script and ask it to rewrite to be captivating. In all those scenarios I feel this model gives to-the-point responses. So I have picked this model. But I would say in API this model is very pricey. If you want an alternative, you can go with Claude 3.7 Sonnet.`,
        'claude-convo': `This again is a personal preference and is based on how the models have been fine-tuned. But from the time of Claude 3 Opus I have seen that Claude models feel more conversational and also for personal advice and everything I have found these models to put their point forward boldly unlike OpenAI models which don't put their point of view very straightforwardly. So according to me this is the best conversational model. But especially this domain can be subjective. And I respect everyone's opinion.`,
        'deepseek': `Deepseek is the first company other than OpenAI which released a thinking model and this being on par with o1 at that time was absolutely free giving tough competition to OpenAI. Even now this is the best opensource and free reasoning model and best free model overall. But remember to be careful on the website because the website has privacy concerns.`,
        'gemma-reasoning': `I never thought a 27b model would be able to beat GPT-4o mini, my favorite when it comes to efficient models. It clearly beats GPT-4o mini when it comes to reasoning and there is no doubt about it. So the most efficient reasoning model is Gemma 3 27b.`,
        'gemma-math': `Best Efficient Maths Model is clearly again Gemma 3 27b because it got a clear sweep in scores and when it comes to my question of what day is April 1, it's the only model that gets it right every single time. So clearly it's my pick as Best Efficient Maths Model.`,
        'llama-coding': `On my test it clearly outperformed its competitors. It was the only model that was able to give me a running snake game with snake having a triangular head and in Python PyQt5, and it was the only model to give me a good working Super Mario game although it was very primitive, but that is what we can expect for models that cost pennies.`,
        'gemma-overall': `Clearly having a clear sweep in scores when it comes to Reasoning and Maths, I will have to give the best overall to Gemma 3 27b. So on a blind pick, this is the best efficient model.`,
        'gemmini': `If you have to pick the best pretrained model, then Gemini 2.0 Pro is the one to go. It has the largest context and nothing compares to it. And it's close to top performing models, so for free this is the best you can have. Deepseek v3, Qwen Max and others are free but this model is better than them.`,
        'cursor': `Agentic IDE can just have perks but on extended use of any IDE you will find that it doesn't matter what you use. Windsurf currently has a lot of features but the biggest problem with that is its flow credits, credits that are used when read, write or do any kind of tool call. There is no plan where you can get unlimited flow credits so you will quickly exhaust your flow credits and the application will be useless. You will have Deepseek V3 but that model is barely usable. But Cursor, although it has limits to premium requests, even after that it has slow mode and you can indefinitely use the models. So just for this reason I think Cursor is best.`
    };

    // Video data for each model
    const modelVideos = {
        'grok3': 'jlfyhBUGnKs',         // Video provided by the user for Grok 3 Thinking
        'claude-overall': 'jlfyhBUGnKs',  // Using same video as Grok 3 Thinking
        'openai-math': ['qwgGUI7PWmY', 'uZSQRzdm4Og'],    // Both videos side by side
        'openai-backend': 'jlfyhBUGnKs',  // Using same video as Grok 3 Thinking
        'claude-frontend': ['qwgGUI7PWmY', 'uZSQRzdm4Og'], // Both videos side by side
        'gpt-creative': 'XIeZH49yxXY',    // OpenAI o3-Mini IS HERE!
        'claude-convo': 'BOjTjsNy6mg',    // Video provided by the user for Best Conversational Model
        'deepseek': 'xE3qeK3rdhI',        // Video provided by the user for Best Free Model
        'gemma-reasoning': 'urb3FEmX6kY',  // Video provided by the user for efficient models
        'gemma-math': 'urb3FEmX6kY',      // Video provided by the user for efficient models
        'llama-coding': 'urb3FEmX6kY',    // Video provided by the user for efficient models
        'gemma-overall': 'urb3FEmX6kY',   // Video provided by the user for efficient models
        'gemmini': 'xxCkuxQuT_g',         // Gemma 2 - Google's New 9B and 27B Open Weights Models
        'cursor': 'kL3lX5dVUCw'           // Microsoft's Phi-4 (placeholder)
    };

    // Modal functionality
    const modal = document.getElementById('model-modal');
    const closeModal = document.querySelector('.close-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalName = document.getElementById('modal-name');
    const modalLogo = document.getElementById('modal-logo');
    const modalOpinion = document.getElementById('modal-opinion');
    const modalVideo = document.getElementById('modal-video');

    // Add click event to all model cards
    recCards.forEach(card => {
        card.addEventListener('click', () => {
            const modelId = card.getAttribute('data-model');
            const modelTitle = card.querySelector('h3').textContent;
            const modelName = card.querySelector('.model-name').textContent;
            const logoSrc = card.querySelector('.model-logo img').getAttribute('src');
            const opinion = modelOpinions[modelId] || 'Opinion coming soon...';
            const videoId = modelVideos[modelId];
            
            // Set modal content
            modalTitle.textContent = modelTitle;
            modalName.textContent = modelName;
            modalLogo.setAttribute('src', logoSrc);
            modalOpinion.innerHTML = `<p>${opinion}</p>`;
            
            // Set video content if available
            if (videoId) {
                // Check if we have multiple videos for this model
                if (Array.isArray(videoId)) {
                    modalVideo.innerHTML = `
                        <div class="modal-video-grid">
                            ${videoId.map(id => `
                                <div class="video-embed-half">
                                    <iframe width="100%" height="200" 
                                        src="https://www.youtube.com/embed/${id}" 
                                        title="YouTube video player" frameborder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                        allowfullscreen></iframe>
                                </div>
                            `).join('')}
                        </div>
                    `;
                } else {
                    modalVideo.innerHTML = `
                        <div class="video-embed">
                            <iframe width="100%" height="315" 
                                src="https://www.youtube.com/embed/${videoId}" 
                                title="YouTube video player" frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen></iframe>
                        </div>
                    `;
                }
            } else {
                modalVideo.innerHTML = '<p>No video available for this model.</p>';
            }
            
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