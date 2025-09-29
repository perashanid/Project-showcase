// Image Viewer Module
class ImageViewer {
    constructor() {
        this.currentImages = [];
        this.currentIndex = 0;
        this.isOpen = false;
    }

    open(images, startIndex = 0) {
        if (this.isOpen) return;
        
        this.currentImages = images;
        this.currentIndex = startIndex;
        this.isOpen = true;
        
        this.createViewer();
        this.setupEvents();
        this.showImage();
        this.preventBodyScroll();
    }

    createViewer() {
        // Remove existing viewer
        this.removeViewer();

        const viewerHTML = `
            <div id="imageViewerOverlay" class="image-viewer-overlay">
                <div class="image-viewer-container">
                    <button class="viewer-close-btn" id="viewerCloseBtn">×</button>
                    <img class="viewer-image" id="viewerImage" alt="Full size image">
                    <div class="viewer-controls">
                        ${this.currentImages.length > 1 ? `
                            <button class="viewer-nav-btn viewer-prev" id="viewerPrev">‹</button>
                            <div class="viewer-counter" id="viewerCounter">1 / 1</div>
                            <button class="viewer-nav-btn viewer-next" id="viewerNext">›</button>
                        ` : `
                            <div class="viewer-counter" id="viewerCounter">1 / 1</div>
                        `}
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', viewerHTML);
    }

    setupEvents() {
        const overlay = document.getElementById('imageViewerOverlay');
        const closeBtn = document.getElementById('viewerCloseBtn');
        const prevBtn = document.getElementById('viewerPrev');
        const nextBtn = document.getElementById('viewerNext');

        // Close events
        closeBtn.addEventListener('click', () => this.close());
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) this.close();
        });

        // Navigation events
        if (prevBtn) prevBtn.addEventListener('click', () => this.previousImage());
        if (nextBtn) nextBtn.addEventListener('click', () => this.nextImage());

        // Keyboard events
        this.keyHandler = (e) => {
            if (!this.isOpen) return;
            
            switch(e.key) {
                case 'Escape':
                    this.close();
                    break;
                case 'ArrowLeft':
                    this.previousImage();
                    break;
                case 'ArrowRight':
                    this.nextImage();
                    break;
            }
        };

        document.addEventListener('keydown', this.keyHandler);
    }

    showImage() {
        const image = document.getElementById('viewerImage');
        const counter = document.getElementById('viewerCounter');

        if (image && this.currentImages[this.currentIndex]) {
            image.src = this.currentImages[this.currentIndex];
            image.alt = `Image ${this.currentIndex + 1} of ${this.currentImages.length}`;
        }

        if (counter) {
            counter.textContent = `${this.currentIndex + 1} / ${this.currentImages.length}`;
        }
    }

    previousImage() {
        if (this.currentImages.length <= 1) return;
        this.currentIndex = (this.currentIndex - 1 + this.currentImages.length) % this.currentImages.length;
        this.showImage();
    }

    nextImage() {
        if (this.currentImages.length <= 1) return;
        this.currentIndex = (this.currentIndex + 1) % this.currentImages.length;
        this.showImage();
    }

    close() {
        if (!this.isOpen) return;
        
        this.isOpen = false;
        this.restoreBodyScroll();
        this.removeViewer();
        
        if (this.keyHandler) {
            document.removeEventListener('keydown', this.keyHandler);
        }
    }

    removeViewer() {
        const existingViewer = document.getElementById('imageViewerOverlay');
        if (existingViewer) {
            existingViewer.remove();
        }
    }

    preventBodyScroll() {
        document.body.style.overflow = 'hidden';
    }

    restoreBodyScroll() {
        document.body.style.overflow = '';
    }
}

// Create global instance
window.imageViewer = new ImageViewer();