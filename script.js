// Project data structure
const projects = [
    {
        id: "ecommerce-platform",
        title: "ShopFlow",
        description: "Modern e-commerce platform for local businesses",
        longDescription: "Built this platform to help local businesses transition online during the pandemic. Features include inventory tracking, order management, and integrated payment processing. The admin dashboard provides real-time sales analytics and customer insights.",
        targetAudience: "Local retail businesses",
        problemSolved: "Helping brick-and-mortar stores establish online presence",
        features: [
            "Inventory management",
            "Stripe payment integration",
            "Order tracking system",
            "Customer dashboard",
            "Sales analytics",
            "Email notifications",
            "Mobile-first design",
            "SEO optimization"
        ],
        technologies: [
            { name: "React", color: "#61DAFB" },
            { name: "Node.js", color: "#339933" },
            { name: "MongoDB", color: "#47A248" },
            { name: "Stripe", color: "#635BFF" }
        ],
        links: {
            github: "https://github.com/alexchen/shopflow",
            live: "https://shopflow-demo.vercel.app"
        },
        images: [
            "https://via.placeholder.com/400x300/667eea/ffffff?text=Homepage",
            "https://via.placeholder.com/400x300/764ba2/ffffff?text=Product+Page",
            "https://via.placeholder.com/400x300/f093fb/ffffff?text=Cart+Page",
            "https://via.placeholder.com/400x300/4facfe/ffffff?text=Admin+Dashboard"
        ],
        featured: true,
        status: "completed"
    },
    {
        id: "task-management-app",
        title: "TeamSync",
        description: "Project management for remote teams",
        longDescription: "Developed this tool while working with distributed teams across different time zones. It focuses on async collaboration with features like task dependencies, time tracking, and progress visualization. The interface prioritizes clarity over complexity.",
        targetAudience: "Remote development teams",
        problemSolved: "Coordinating work across time zones and team members",
        features: [
            "Real-time collaboration",
            "Drag-and-drop interface",
            "Time tracking",
            "Team analytics",
            "Project templates",
            "File attachments",
            "Comment system",
            "Progress tracking"
        ],
        technologies: [
            { name: "Vue.js", color: "#4FC08D" },
            { name: "Express", color: "#000000" },
            { name: "PostgreSQL", color: "#336791" },
            { name: "Socket.io", color: "#010101" }
        ],
        links: {
            github: "https://github.com/alexchen/teamsync",
            live: "https://teamsync-app.netlify.app"
        },
        images: [
            "https://via.placeholder.com/400x300/4FC08D/ffffff?text=Dashboard",
            "https://via.placeholder.com/400x300/42b883/ffffff?text=Kanban+Board",
            "https://via.placeholder.com/400x300/35495e/ffffff?text=Time+Tracker",
            "https://via.placeholder.com/400x300/41b883/ffffff?text=Analytics"
        ],
        featured: true,
        status: "completed"
    },
    {
        id: "weather-dashboard",
        title: "Weather Dashboard",
        description: "Beautiful weather app with forecasting",
        longDescription: "An elegant weather dashboard that provides comprehensive weather information with stunning visualizations. Features include detailed forecasts, interactive weather maps, location-based services, and real-time weather alerts.",
        targetAudience: "General users and weather enthusiasts",
        problemSolved: "Intuitive weather information with beautiful visualizations",
        features: [
            "7-day forecast",
            "Interactive maps",
            "Location-based weather",
            "Weather alerts",
            "Hourly forecasts",
            "Weather charts",
            "Multiple locations",
            "Dark/light themes"
        ],
        technologies: [
            { name: "JavaScript", color: "#F7DF1E" },
            { name: "CSS3", color: "#1572B6" },
            { name: "OpenWeather API", color: "#FF6B35" },
            { name: "Chart.js", color: "#FF6384" }
        ],
        links: {
            github: "https://github.com/johndeveloper/weather-dashboard",
            live: "https://weather-viz.github.io"
        },
        images: [
            "https://via.placeholder.com/400x300/F7DF1E/000000?text=Main+Dashboard",
            "https://via.placeholder.com/400x300/1572B6/ffffff?text=Weather+Map",
            "https://via.placeholder.com/400x300/FF6B35/ffffff?text=Forecast+View",
            "https://via.placeholder.com/400x300/FF6384/ffffff?text=Charts+View"
        ],
        featured: false,
        status: "completed"
    },
    {
        id: "portfolio-generator",
        title: "Portfolio Generator",
        description: "Automated portfolio website generator",
        longDescription: "An innovative tool that automatically generates professional portfolio websites for developers and designers. Features customizable templates, seamless GitHub integration, built-in SEO optimization, and one-click deployment capabilities.",
        targetAudience: "Developers and designers",
        problemSolved: "Quick professional portfolio creation without coding",
        features: [
            "Template customization",
            "GitHub integration",
            "SEO optimization",
            "One-click deployment",
            "Responsive design",
            "Analytics integration",
            "Custom domains",
            "Theme builder"
        ],
        technologies: [
            { name: "Next.js", color: "#000000" },
            { name: "TypeScript", color: "#3178C6" },
            { name: "Tailwind CSS", color: "#06B6D4" },
            { name: "Vercel", color: "#000000" }
        ],
        links: {
            github: "https://github.com/johndeveloper/portfolio-gen",
            live: null
        },
        images: [
            "https://via.placeholder.com/400x300/000000/ffffff?text=Template+Gallery",
            "https://via.placeholder.com/400x300/3178C6/ffffff?text=Customization+Panel",
            "https://via.placeholder.com/400x300/06B6D4/ffffff?text=Preview+Mode",
            "https://via.placeholder.com/400x300/0070f3/ffffff?text=Deploy+Dashboard"
        ],
        featured: true,
        status: "in-progress"
    },
    {
        id: "crypto-tracker",
        title: "Crypto Price Tracker",
        description: "Real-time cryptocurrency monitoring",
        longDescription: "A comprehensive cryptocurrency tracking application that provides real-time price monitoring, portfolio management, and market analysis. Perfect for crypto investors and traders who need up-to-date market information and portfolio insights.",
        targetAudience: "Crypto investors and traders",
        problemSolved: "Real-time price tracking with portfolio management",
        features: [
            "Real-time price updates",
            "Portfolio tracking",
            "Price alerts",
            "Market analysis",
            "Historical charts",
            "News integration",
            "Watchlist management",
            "Profit/loss calculations"
        ],
        technologies: [
            { name: "React", color: "#61DAFB" },
            { name: "Redux", color: "#764ABC" },
            { name: "CoinGecko API", color: "#8DC647" },
            { name: "Material-UI", color: "#0081CB" }
        ],
        links: {
            github: "https://github.com/johndeveloper/crypto-tracker",
            live: "https://crypto-portfolio-tracker.vercel.app"
        },
        images: [
            "https://via.placeholder.com/400x300/61DAFB/000000?text=Price+Dashboard",
            "https://via.placeholder.com/400x300/764ABC/ffffff?text=Portfolio+View",
            "https://via.placeholder.com/400x300/8DC647/ffffff?text=Market+Analysis",
            "https://via.placeholder.com/400x300/0081CB/ffffff?text=Alerts+Panel"
        ],
        featured: false,
        status: "completed"
    }
];

// Visit counter functionality
class VisitCounter {
    constructor() {
        this.storageKey = 'portfolioVisitCount';
        this.init();
    }

    init() {
        this.incrementVisits();
        this.displayCount();
        this.animateCounter();
    }

    getVisitCount() {
        try {
            return parseInt(localStorage.getItem(this.storageKey)) || 0;
        } catch (error) {
            console.warn('localStorage not available, using session count');
            return 0;
        }
    }

    incrementVisits() {
        try {
            const currentCount = this.getVisitCount();
            const newCount = currentCount + 1;
            localStorage.setItem(this.storageKey, newCount.toString());
            return newCount;
        } catch (error) {
            console.warn('Could not save visit count');
            return 1;
        }
    }

    displayCount() {
        const countElement = document.getElementById('visitCount');
        if (countElement) {
            const count = this.getVisitCount();
            countElement.textContent = count.toLocaleString();
        }
    }

    animateCounter() {
        const countElement = document.getElementById('visitCount');
        if (!countElement) return;

        const finalCount = this.getVisitCount();
        const duration = 1000; // 1 second
        const steps = 30;
        const stepValue = finalCount / steps;
        let currentStep = 0;

        const timer = setInterval(() => {
            currentStep++;
            const currentValue = Math.floor(stepValue * currentStep);
            
            if (currentStep >= steps) {
                countElement.textContent = finalCount.toLocaleString();
                clearInterval(timer);
            } else {
                countElement.textContent = currentValue.toLocaleString();
            }
        }, duration / steps);
    }
}

// Project rendering functionality
class ProjectRenderer {
    constructor(projects) {
        this.projects = projects;
        this.container = document.getElementById('projectsGrid');
        this.imageIntervals = new Map();
    }

    render() {
        if (!this.container) return;

        // Sort projects: featured first, then by completion date
        const sortedProjects = [...this.projects].sort((a, b) => {
            if (a.featured && !b.featured) return -1;
            if (!a.featured && b.featured) return 1;
            return 0;
        });

        this.container.innerHTML = '';
        
        sortedProjects.forEach((project, index) => {
            const projectCard = this.createProjectCard(project);
            projectCard.style.animationDelay = `${index * 0.1}s`;
            this.container.appendChild(projectCard);
            
            // Start image carousel for this project
            this.startImageCarousel(project.id);
        });
    }

    createProjectCard(project) {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.style.animation = 'fadeInUp 0.6s ease-out both';
        card.setAttribute('data-project-id', project.id);

        // Add click event to open modal
        card.addEventListener('click', (e) => {
            // Don't open modal if clicking on links
            if (e.target.closest('.project-link')) return;
            this.openProjectModal(project);
        });

        const techTags = project.technologies.map(tech => 
            `<span class="tech-tag" style="background-color: ${tech.color}20; border: 1px solid ${tech.color}40;">${tech.name}</span>`
        ).join('');

        const githubLink = project.links.github 
            ? `<a href="${project.links.github}" target="_blank" rel="noopener noreferrer" class="project-link" onclick="event.stopPropagation()">
                 <i class="fab fa-github"></i> GitHub
               </a>`
            : `<span class="project-link disabled"><i class="fab fa-github"></i> GitHub</span>`;

        const liveLink = project.links.live 
            ? `<a href="${project.links.live}" target="_blank" rel="noopener noreferrer" class="project-link" onclick="event.stopPropagation()">
                 <i class="fas fa-external-link-alt"></i> Live Demo
               </a>`
            : `<span class="project-link disabled"><i class="fas fa-external-link-alt"></i> Live Demo</span>`;

        // Create image carousel
        const imageCarousel = this.createImageCarousel(project);

        card.innerHTML = `
            ${imageCarousel}
            <h3 class="project-title">${project.title}</h3>
            <div class="project-meta">
                <div class="project-meta-item">
                    <span class="meta-label">For:</span>
                    <span class="meta-value">${project.targetAudience}</span>
                </div>
                <div class="project-meta-item">
                    <span class="meta-label">Problem:</span>
                    <span class="meta-value">${project.problemSolved}</span>
                </div>
            </div>
            <div class="tech-tags">
                ${techTags}
            </div>
            <div class="project-links">
                ${githubLink}
                ${liveLink}
            </div>
        `;

        return card;
    }

    createImageCarousel(project) {
        const images = project.images || [];
        const fallbackImage = project.title.split(' ').map(word => word[0]).join('').toUpperCase();

        if (images.length === 0) {
            return `
                <div class="project-image-container">
                    <div class="project-image active">
                        ${fallbackImage}
                    </div>
                </div>
            `;
        }

        const imageElements = images.map((image, index) => `
            <div class="project-image ${index === 0 ? 'active' : ''}" data-index="${index}">
                <img src="${image}" alt="${project.title} screenshot ${index + 1}" loading="lazy" />
            </div>
        `).join('');

        const indicators = images.map((_, index) => `
            <div class="indicator ${index === 0 ? 'active' : ''}" data-index="${index}"></div>
        `).join('');

        return `
            <div class="project-image-container" data-project-id="${project.id}">
                ${imageElements}
                <div class="image-indicators">
                    ${indicators}
                </div>
            </div>
        `;
    }

    startImageCarousel(projectId) {
        const project = this.projects.find(p => p.id === projectId);
        if (!project || !project.images || project.images.length <= 1) return;

        const container = document.querySelector(`[data-project-id="${projectId}"]`);
        if (!container) return;

        const images = container.querySelectorAll('.project-image');
        const indicators = container.querySelectorAll('.indicator');
        let currentIndex = 0;

        const interval = setInterval(() => {
            // Remove active class from current image and indicator
            images[currentIndex].classList.remove('active');
            indicators[currentIndex].classList.remove('active');

            // Move to next image
            currentIndex = (currentIndex + 1) % images.length;

            // Add active class to new image and indicator
            images[currentIndex].classList.add('active');
            indicators[currentIndex].classList.add('active');
        }, 2000); // Change image every 2 seconds

        // Store interval reference for cleanup
        this.imageIntervals.set(projectId, interval);
    }

    openProjectModal(project) {
        const modal = new ProjectModal(project);
        modal.open();
    }

    cleanup() {
        // Clear all image intervals
        this.imageIntervals.forEach(interval => clearInterval(interval));
        this.imageIntervals.clear();
    }
}

// Smooth scroll and back to top functionality
class ScrollManager {
    constructor() {
        this.backToTopButton = document.getElementById('backToTop');
        this.init();
    }

    init() {
        this.setupBackToTop();
        this.setupSmoothScroll();
    }

    setupBackToTop() {
        if (!this.backToTopButton) return;

        // Show/hide back to top button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                this.backToTopButton.classList.add('visible');
            } else {
                this.backToTopButton.classList.remove('visible');
            }
        });

        // Scroll to top when clicked
        this.backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    setupSmoothScroll() {
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// Animation observer for scroll-triggered animations
class AnimationObserver {
    constructor() {
        this.init();
    }

    init() {
        if ('IntersectionObserver' in window) {
            this.observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('animate-in');
                        }
                    });
                },
                { threshold: 0.1 }
            );

            // Observe project cards for scroll animations
            setTimeout(() => {
                document.querySelectorAll('.project-card').forEach(card => {
                    this.observer.observe(card);
                });
            }, 100);
        }
    }
}

// Project Modal functionality
class ProjectModal {
    constructor(project) {
        this.project = project;
        this.modal = document.getElementById('projectModal');
        this.modalBody = document.getElementById('modalBody');
        this.closeButton = document.getElementById('modalClose');
        this.init();
    }

    init() {
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Close modal when clicking close button
        this.closeButton.addEventListener('click', () => this.close());
        
        // Close modal when clicking overlay
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) this.close();
        });
        
        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.classList.contains('active')) {
                this.close();
            }
        });
    }

    open() {
        this.render();
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    close() {
        this.modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    render() {
        const techTags = this.project.technologies.map(tech => 
            `<span class="modal-tech-tag" style="background-color: ${tech.color}20; border-color: ${tech.color}40;">${tech.name}</span>`
        ).join('');

        const features = this.project.features.map(feature => 
            `<li>${feature}</li>`
        ).join('');

        const imageGallery = this.project.images && this.project.images.length > 0 
            ? `<div class="modal-image-gallery">
                 ${this.project.images.map((image, index) => 
                   `<img src="${image}" alt="${this.project.title} screenshot ${index + 1}" class="modal-image" loading="lazy" />`
                 ).join('')}
               </div>`
            : '';

        const githubLink = this.project.links.github 
            ? `<a href="${this.project.links.github}" target="_blank" rel="noopener noreferrer" class="modal-link">
                 <i class="fab fa-github"></i> View on GitHub
               </a>`
            : `<span class="modal-link disabled"><i class="fab fa-github"></i> GitHub Unavailable</span>`;

        const liveLink = this.project.links.live 
            ? `<a href="${this.project.links.live}" target="_blank" rel="noopener noreferrer" class="modal-link">
                 <i class="fas fa-external-link-alt"></i> Live Demo
               </a>`
            : `<span class="modal-link disabled"><i class="fas fa-external-link-alt"></i> Demo Unavailable</span>`;

        this.modalBody.innerHTML = `
            <div class="modal-header">
                <h2 class="modal-title">${this.project.title}</h2>
                <p class="modal-description">${this.project.longDescription || this.project.description}</p>
            </div>
            
            ${imageGallery}
            
            <div class="modal-details">
                <div class="modal-section">
                    <h4>Target Audience</h4>
                    <p>${this.project.targetAudience}</p>
                </div>
                
                <div class="modal-section">
                    <h4>Problem Solved</h4>
                    <p>${this.project.problemSolved}</p>
                </div>
                
                <div class="modal-section">
                    <h4>Key Features</h4>
                    <ul class="modal-features">
                        ${features}
                    </ul>
                </div>
                
                <div class="modal-section">
                    <h4>Technologies Used</h4>
                    <div class="modal-tech-grid">
                        ${techTags}
                    </div>
                </div>
            </div>
            
            <div class="modal-links">
                ${githubLink}
                ${liveLink}
            </div>
        `;
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize visit counter
    new VisitCounter();
    
    // Render projects
    const projectRenderer = new ProjectRenderer(projects);
    projectRenderer.render();
    
    // Initialize scroll management
    new ScrollManager();
    
    // Initialize scroll animations
    new AnimationObserver();
    
    console.log('Portfolio website initialized successfully!');
});

// Add some additional CSS for scroll animations
const additionalStyles = `
    .animate-in {
        animation: slideInUp 0.6s ease-out;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);