// Project data structure
const projects = [
    {
        id: "algotrader",
        title: "AlgoTrader",
        description: "Algorithmic trading platform for retail investors",
        longDescription: "A comprehensive algorithmic trading platform that allows users to create their own trading algorithms to compete with Wall Street. Users can set custom constraints for buy/sell decisions, group stocks into different categories, and backtest their strategies using historical US stock market data.",
        targetAudience: "Retail investors and trading enthusiasts",
        problemSolved: "Democratizing algorithmic trading for individual investors",
        features: [
            "Custom algorithm builder",
            "Stock categorization system",
            "Historical backtesting",
            "Real-time market data",
            "Performance analytics",
            "Risk management tools",
            "Portfolio optimization",
            "Strategy comparison"
        ],
        technologies: [
            { name: "Python", color: "#3776ab" },
            { name: "React", color: "#61DAFB" },
            { name: "Django", color: "#092e20" },
            { name: "PostgreSQL", color: "#336791" }
        ],
        links: {
            github: "https://github.com/perashanid/algotrader",
            live: "https://algotrader-demo.vercel.app"
        },
        images: [
            "https://github.com/user-attachments/assets/126ec196-f87a-4dfa-8454-18ea468eb9a7",
            "https://github.com/user-attachments/assets/f8c8c6f1-7566-4366-939c-03bff6f8ae0c",
            "https://github.com/user-attachments/assets/5baae58f-98d0-4add-b2fe-a6ab6f8ae8bc",
            "https://github.com/user-attachments/assets/0172d66f-d8e6-4b31-950c-783f062884d5",
            "https://github.com/user-attachments/assets/1a6072a8-7b61-4e83-84c7-461c36187730",
            "https://github.com/user-attachments/assets/fd8a6b44-f41f-4e0a-bf0c-1876e29a34f1"
        ],
        featured: true,
        status: "completed"
    },
    {
        id: "bookmarket",
        title: "BookMarket",
        description: "Online marketplace for buying, selling, and trading books",
        longDescription: "A comprehensive book marketplace where people can auction, trade, or sell books at fixed prices. The platform also supports PDF sharing for digital books, creating a complete ecosystem for book enthusiasts to connect and exchange literature.",
        targetAudience: "Book lovers, students, and collectors",
        problemSolved: "Creating an accessible marketplace for physical and digital books",
        features: [
            "Book auctions",
            "Fixed price sales",
            "Book trading system",
            "PDF sharing",
            "User ratings and reviews",
            "Search and filtering",
            "Wishlist functionality",
            "Secure payment processing"
        ],
        technologies: [
            { name: "React", color: "#61DAFB" },
            { name: "Node.js", color: "#339933" },
            { name: "MongoDB", color: "#47A248" },
            { name: "Express", color: "#000000" }
        ],
        links: {
            github: "https://github.com/perashanid/bookmarket",
            live: "https://bookmarket-demo.vercel.app"
        },
        images: [
            "https://github.com/user-attachments/assets/1afd6946-a9fe-4a99-934f-3b96e31bee93",
            "https://github.com/user-attachments/assets/702abe5b-2ce8-4231-b8d9-091d1e6affa1",
            "https://github.com/user-attachments/assets/d7c263ba-c90d-4137-a2d6-107ee8e9ad2d",
            "https://github.com/user-attachments/assets/b0f5ae71-0452-4ee9-b28a-c628317ac95f",
            "https://github.com/user-attachments/assets/36b71170-63ad-4f1b-a437-890616cc9738"
        ],
        featured: true,
        status: "completed"
    },
    {
        id: "survey-platform",
        title: "Survey Platform",
        description: "Comprehensive survey creation and analytics platform",
        longDescription: "A full-featured survey platform that allows users to create private and public surveys with advanced analytics. Users can view other public surveys, export data in CSV and JSON formats, and share surveys via unique links. The platform supports anonymous responses and provides detailed insights.",
        targetAudience: "Researchers, businesses, and organizations",
        problemSolved: "Streamlined survey creation with powerful analytics",
        features: [
            "Private and public surveys",
            "Advanced analytics dashboard",
            "CSV and JSON data export",
            "Anonymous responses",
            "Link sharing",
            "Real-time results",
            "Custom question types",
            "Response filtering"
        ],
        technologies: [
            { name: "React", color: "#61DAFB" },
            { name: "Node.js", color: "#339933" },
            { name: "PostgreSQL", color: "#336791" },
            { name: "Chart.js", color: "#FF6384" }
        ],
        links: {
            github: "https://github.com/perashanid/survey-platform",
            live: "https://survey-platform-demo.vercel.app"
        },
        images: [
            "https://github.com/user-attachments/assets/cc9b1542-b86b-45f8-b22d-d9f181834a42",
            "https://github.com/user-attachments/assets/68ccae1e-c5a6-449c-a79d-61701a412c3a",
            "https://github.com/user-attachments/assets/84a4c81c-9c6b-415f-8ef6-569a6a3d4810",
            "https://github.com/user-attachments/assets/d76febc9-9365-4989-901d-d207ac2e4d99",
            "https://github.com/user-attachments/assets/36a54a64-6852-4abe-9a01-1843a04bf394"
        ],
        featured: true,
        status: "completed"
    },
    {
        id: "campaign-builder",
        title: "Campaign Builder",
        description: "Platform for creating fundraising and blood donation campaigns",
        longDescription: "A comprehensive campaign management platform that enables users to create and manage fundraising and blood donation campaigns. Users can share unique campaign links, track progress, and engage with supporters through an intuitive interface.",
        targetAudience: "Non-profits, individuals, and healthcare organizations",
        problemSolved: "Simplified campaign creation and management for social causes",
        features: [
            "Fundraising campaigns",
            "Blood donation drives",
            "Unique link sharing",
            "Progress tracking",
            "Donor management",
            "Social media integration",
            "Campaign analytics",
            "Mobile-responsive design"
        ],
        technologies: [
            { name: "React", color: "#61DAFB" },
            { name: "Node.js", color: "#339933" },
            { name: "MongoDB", color: "#47A248" },
            { name: "Stripe", color: "#635BFF" }
        ],
        links: {
            github: "https://github.com/perashanid/campaign-builder",
            live: "https://campaign-builder-demo.vercel.app"
        },
        images: [
            "https://github.com/user-attachments/assets/c4f04767-92cf-4657-8763-810f893adc23",
            "https://github.com/user-attachments/assets/02c29315-33bb-4b18-b7f7-d2cc506d42d6",
            "https://github.com/user-attachments/assets/23a79f31-3e13-48da-bedc-011c944b34e4",
            "https://github.com/user-attachments/assets/6f67c57d-3fc7-4aeb-a1b6-ea70df1de2bd",
            "https://github.com/user-attachments/assets/f0329efb-1125-4da3-a3bf-8a9d7d42305e"
        ],
        featured: true,
        status: "completed"
    },
    {
        id: "research-paper-analyzer",
        title: "Research Paper Analyzer",
        description: "AI-powered research paper analysis tool",
        longDescription: "An intelligent research paper analyzer powered by Gemini 2.5 Pro that can extract and analyze information from research papers via links, PDFs, or URLs. The tool provides comprehensive insights, summaries, and key findings from academic papers.",
        targetAudience: "Researchers, students, and academics",
        problemSolved: "Automated analysis and summarization of research papers",
        features: [
            "PDF analysis",
            "URL content extraction",
            "AI-powered insights",
            "Key findings extraction",
            "Citation analysis",
            "Summary generation",
            "Multi-format support",
            "Gemini 2.5 Pro integration"
        ],
        technologies: [
            { name: "Python", color: "#3776ab" },
            { name: "React", color: "#61DAFB" },
            { name: "Gemini API", color: "#4285f4" },
            { name: "FastAPI", color: "#009688" }
        ],
        links: {
            github: "https://github.com/perashanid/research-analyzer",
            live: "https://research-analyzer-demo.vercel.app"
        },
        images: [
            "https://github.com/user-attachments/assets/4b39b3ab-db62-411b-9462-c61ed8c56a56",
            "https://github.com/user-attachments/assets/13e10fd0-b544-4ce6-8576-9bf17f39512b",
            "https://github.com/user-attachments/assets/4caa2e76-1546-4ebd-ae16-af5af82a791c",
            "https://github.com/user-attachments/assets/554faa46-3c6f-41e9-8b8d-0ed48aeec457",
            "https://github.com/user-attachments/assets/9a5a8551-2dd1-40ec-bdaa-8a1d46aec415",
            "https://github.com/user-attachments/assets/ed1a67af-0f79-44ec-a4e3-938e75272ed7"
        ],
        featured: true,
        status: "completed"
    },
    {
        id: "bd-stock-api",
        title: "BD Stock Market API",
        description: "Free API for Bangladesh stock market data",
        longDescription: "The only free API available for Bangladesh stock market data. Provides real-time and historical stock information for the Dhaka Stock Exchange, enabling developers to build financial applications with local market data.",
        targetAudience: "Developers and fintech companies",
        problemSolved: "Lack of accessible Bangladesh stock market data",
        features: [
            "Real-time stock prices",
            "Historical data",
            "Market indices",
            "Company profiles",
            "RESTful API",
            "JSON responses",
            "Rate limiting",
            "Documentation"
        ],
        technologies: [
            { name: "Node.js", color: "#339933" },
            { name: "Express", color: "#000000" },
            { name: "MongoDB", color: "#47A248" },
            { name: "Redis", color: "#dc382d" }
        ],
        links: {
            github: "https://github.com/perashanid/bd-stock-api",
            live: "https://bd-stock-api.vercel.app"
        },
        images: [
            "https://github.com/user-attachments/assets/4b4c4e6a-7989-4d13-a782-331a4f3cacaa",
            "https://github.com/user-attachments/assets/d2573a43-58f1-4452-9131-ff5f30d13152"
        ],
        featured: false,
        status: "completed"
    },
    {
        id: "stock-market-bd",
        title: "Stock Market BD",
        description: "Bangladesh stock market tracking platform",
        longDescription: "A comprehensive platform for tracking Bangladesh stock market with features like stock profiles, top 30 stocks display, user registration, portfolio creation, and performance tracking. Built specifically for the Bangladesh financial market.",
        targetAudience: "Bangladesh stock market investors",
        problemSolved: "Centralized platform for BD stock market information",
        features: [
            "Stock profiles",
            "Top 30 stocks",
            "User registration",
            "Portfolio creation",
            "Performance tracking",
            "Market analysis",
            "Real-time updates",
            "Mobile responsive"
        ],
        technologies: [
            { name: "React", color: "#61DAFB" },
            { name: "Node.js", color: "#339933" },
            { name: "PostgreSQL", color: "#336791" },
            { name: "Chart.js", color: "#FF6384" }
        ],
        links: {
            github: "https://github.com/perashanid/stock-market-bd",
            live: "https://stock-market-bd.vercel.app"
        },
        images: [
            "https://github.com/user-attachments/assets/80ed9edb-e44b-48f9-927b-fab1bf83de98",
            "https://github.com/user-attachments/assets/f6a83321-d781-4f9d-a129-797f2ae27d37",
            "https://github.com/user-attachments/assets/5c02710a-5208-4de3-9aae-0da37dc12769",
            "https://github.com/user-attachments/assets/bbd8dcb0-744a-4ee1-ae6c-ff675eb9ef2b",
            "https://github.com/user-attachments/assets/ad7ffccf-7689-4d6f-ae13-eecc911ba0b0",
            "https://github.com/user-attachments/assets/7b2f752c-4f31-435e-be8d-59dfb653f456"
        ],
        featured: false,
        status: "completed"
    },
    {
        id: "media-bias-detector",
        title: "Media Bias Detector",
        description: "AI-powered media bias detection platform",
        longDescription: "A sophisticated platform that detects bias in media articles using AI analysis. Users can register, scrape articles by URL or website, select scraping parameters, run bias tests, favorite articles, and save them for later analysis.",
        targetAudience: "Journalists, researchers, and media consumers",
        problemSolved: "Identifying and analyzing bias in news articles",
        features: [
            "URL scraping",
            "Bias detection AI",
            "User registration",
            "Article favoriting",
            "Batch processing",
            "Bias scoring",
            "Article saving",
            "Analytics dashboard"
        ],
        technologies: [
            { name: "Python", color: "#3776ab" },
            { name: "React", color: "#61DAFB" },
            { name: "Django", color: "#092e20" },
            { name: "PostgreSQL", color: "#336791" }
        ],
        links: {
            github: "https://github.com/perashanid/media-bias-detector",
            live: "https://media-bias-detector.vercel.app"
        },
        images: [
            "https://github.com/user-attachments/assets/f1ca08cf-8908-4998-a11c-8652ad85ed05",
            "https://github.com/user-attachments/assets/7de2ba90-847a-48b0-b90b-82092b90402d",
            "https://github.com/user-attachments/assets/0a9e227a-b08a-4cba-aa3e-e70f782ab7c6",
            "https://github.com/user-attachments/assets/bc5a4b78-e578-458d-bf33-99b0cdbcd7b9",
            "https://github.com/user-attachments/assets/5635e95b-cd55-4e97-a444-f0bf84c757d9",
            "https://github.com/user-attachments/assets/048d5fcc-2540-46a9-8c6a-94e52a91112c",
            "https://github.com/user-attachments/assets/89fb6402-3b84-4c02-bf14-d893dc00dc97",
            "https://github.com/user-attachments/assets/7eef0006-6501-40a7-bf1b-972c3fa8e2c4"
        ],
        featured: true,
        status: "completed"
    },
    {
        id: "calculator-app",
        title: "Calculator App",
        description: "A basic calculator application",
        longDescription: "A clean and functional calculator app built with modern web technologies. Features a responsive design with intuitive button layout and supports all basic mathematical operations including addition, subtraction, multiplication, and division.",
        targetAudience: "General users needing quick calculations",
        problemSolved: "Simple, accessible calculator for everyday use",
        features: [
            "Basic arithmetic operations",
            "Clean user interface",
            "Responsive design",
            "Keyboard support",
            "Clear and delete functions",
            "Decimal calculations",
            "Error handling",
            "Mobile-friendly"
        ],
        technologies: [
            { name: "HTML5", color: "#e34f26" },
            { name: "CSS3", color: "#1572b6" },
            { name: "JavaScript", color: "#f7df1e" },
            { name: "Responsive Design", color: "#38b2ac" }
        ],
        links: {
            github: "https://github.com/perashanid/calculator-app",
            live: "https://calculator-app-demo.vercel.app"
        },
        images: [
            "https://github.com/user-attachments/assets/947584d6-3250-4188-af8c-40dcaa71b52b"
        ],
        featured: false,
        status: "completed"
    },
    {
        id: "404-page",
        title: "404 Space Shooter",
        description: "Interactive 404 page with space shooter game",
        longDescription: "A creative 404 error page that turns the frustrating experience of hitting a dead link into an engaging space shooter game. Users can play the browser-based game while they decide where to navigate next, making error pages fun and interactive.",
        targetAudience: "Website visitors and gaming enthusiasts",
        problemSolved: "Making 404 errors engaging instead of frustrating",
        features: [
            "Space shooter game",
            "Browser-based gameplay",
            "Responsive controls",
            "Score tracking",
            "Retro graphics",
            "Sound effects",
            "Mobile compatible",
            "Easy navigation back"
        ],
        technologies: [
            { name: "HTML5 Canvas", color: "#e34f26" },
            { name: "JavaScript", color: "#f7df1e" },
            { name: "CSS3", color: "#1572b6" },
            { name: "Game Development", color: "#ff6b6b" }
        ],
        links: {
            github: "https://github.com/perashanid/404-space-shooter",
            live: "https://404-space-shooter.vercel.app"
        },
        images: [
            "https://github.com/user-attachments/assets/5bb32154-5d53-4b43-bf8d-faa188d78003",
            "https://github.com/user-attachments/assets/5a946c78-416d-44d3-a62e-a6292c306c6d"
        ],
        featured: false,
        status: "completed"
    },
    {
        id: "personal-portfolio",
        title: "Personal Portfolio",
        description: "Personal website showcasing projects and skills",
        longDescription: "A modern, responsive personal portfolio website built to showcase development projects, skills, and professional experience. Features a clean design with smooth animations, project galleries, and contact information.",
        targetAudience: "Potential employers and clients",
        problemSolved: "Professional online presence and project showcase",
        features: [
            "Responsive design",
            "Project showcase",
            "Skills display",
            "Contact information",
            "Modern animations",
            "SEO optimized",
            "Fast loading",
            "Mobile-first approach"
        ],
        technologies: [
            { name: "HTML5", color: "#e34f26" },
            { name: "CSS3", color: "#1572b6" },
            { name: "JavaScript", color: "#f7df1e" },
            { name: "Responsive Design", color: "#38b2ac" }
        ],
        links: {
            github: "https://github.com/perashanid/personal-portfolio",
            live: "https://shanid-portfolio.vercel.app"
        },
        images: [
            "https://github.com/user-attachments/assets/b24c3340-59f2-4cdd-b38d-eceb678fde65",
            "https://github.com/user-attachments/assets/1eb3d583-5700-4380-a03e-3cf5273246d5",
            "https://github.com/user-attachments/assets/bf702a9a-6904-4ae6-9c85-887442ec7e5d"
        ],
        featured: false,
        status: "completed"
    },
    {
        id: "loading-terminal",
        title: "Loading Terminal",
        description: "Animated terminal loading interface",
        longDescription: "A sleek animated terminal loading interface that simulates real terminal operations with typing effects and command execution. Perfect for adding a technical, developer-friendly loading experience to web applications with realistic terminal aesthetics.",
        targetAudience: "Developers and tech-savvy users",
        problemSolved: "Creating engaging loading experiences with terminal aesthetics",
        features: [
            "Realistic typing animation",
            "Terminal command simulation",
            "Customizable loading messages",
            "Smooth animations",
            "Retro terminal styling",
            "Progress indicators",
            "Sound effects (optional)",
            "Responsive design"
        ],
        technologies: [
            { name: "HTML5", color: "#e34f26" },
            { name: "CSS3", color: "#1572b6" },
            { name: "JavaScript", color: "#f7df1e" },
            { name: "Animation", color: "#ff6b6b" }
        ],
        links: {
            github: "https://github.com/perashanid/loading-terminal",
            live: "https://loading-terminal-demo.vercel.app"
        },
        images: [
            "https://github.com/user-attachments/assets/89fb6402-3b84-4c02-bf14-d893dc00dc97",
            "https://github.com/user-attachments/assets/7eef0006-6501-40a7-bf1b-972c3fa8e2c4"
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
            <div class="project-image ${index === 0 ? 'active' : ''}" data-index="${index}" data-project-id="${project.id}">
                <img src="${image}" alt="${project.title} screenshot ${index + 1}" loading="lazy" />
            </div>
        `).join('');

        const indicators = images.map((_, index) => `
            <div class="indicator ${index === 0 ? 'active' : ''}" data-index="${index}"></div>
        `).join('');

        return `
            <div class="project-image-container" data-project-id="${project.id}">
                ${imageElements}
                ${images.length > 1 ? `<div class="image-indicators">${indicators}</div>` : ''}
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

        // Add click event listeners to images for full-size viewing
        images.forEach((imageElement, index) => {
            imageElement.addEventListener('click', (e) => {
                e.stopPropagation();
                this.openImageViewer(project.images, index);
            });
        });

        // Add click event listeners to indicators
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', (e) => {
                e.stopPropagation();
                this.switchToImage(container, index);
            });
        });

        const interval = setInterval(() => {
            // Remove active class from current image and indicator
            images[currentIndex].classList.remove('active');
            if (indicators[currentIndex]) indicators[currentIndex].classList.remove('active');

            // Move to next image
            currentIndex = (currentIndex + 1) % images.length;

            // Add active class to new image and indicator
            images[currentIndex].classList.add('active');
            if (indicators[currentIndex]) indicators[currentIndex].classList.add('active');
        }, 2000); // Change image every 2 seconds

        // Store interval reference for cleanup
        this.imageIntervals.set(projectId, interval);
    }

    switchToImage(container, targetIndex) {
        const images = container.querySelectorAll('.project-image');
        const indicators = container.querySelectorAll('.indicator');

        // Remove active class from all
        images.forEach(img => img.classList.remove('active'));
        indicators.forEach(ind => ind.classList.remove('active'));

        // Add active class to target
        images[targetIndex].classList.add('active');
        if (indicators[targetIndex]) indicators[targetIndex].classList.add('active');
    }

    openImageViewer(images, startIndex = 0) {
        if (!images || images.length === 0) {
            console.error('No images provided to image viewer');
            return;
        }
        window.imageViewer.open(images, startIndex);
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
                   `<img src="${image}" alt="${this.project.title} screenshot ${index + 1}" class="modal-image" loading="lazy" data-index="${index}" />`
                 ).join('')}
               </div>`
            : '';

        // Add click event listeners to modal images after rendering
        setTimeout(() => {
            const modalImages = document.querySelectorAll('.modal-image');
            modalImages.forEach((img, index) => {
                img.addEventListener('click', () => {
                    window.imageViewer.open(this.project.images, index);
                });
            });
        }, 100);

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



// Prevent auto-scroll during page load
document.body.classList.add('loading');

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Ensure page starts at the top
    window.scrollTo(0, 0);
    
    // Initialize visit counter
    new VisitCounter();
    
    // Render projects
    const projectRenderer = new ProjectRenderer(projects);
    projectRenderer.render();
    
    // Initialize scroll management
    new ScrollManager();
    
    // Initialize scroll animations
    new AnimationObserver();
    
    // Remove loading class to allow scrolling
    setTimeout(() => {
        document.body.classList.remove('loading');
        window.scrollTo(0, 0); // Final scroll to top
    }, 500);
    
    console.log('Portfolio website initialized successfully!');
});

// Ensure page stays at top after all resources load
window.addEventListener('load', () => {
    // Force scroll to top after everything is loaded
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);
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