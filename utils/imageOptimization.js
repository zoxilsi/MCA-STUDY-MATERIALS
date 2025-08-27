// Image optimization utilities for web performance

/**
 * Lazy image loading with intersection observer
 */
function initLazyLoading() {
  if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
  } else {
    // Fallback for browsers without IntersectionObserver
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => {
      img.src = img.dataset.src;
      img.classList.remove('lazy');
    });
  }
}

/**
 * WebP support detection and progressive enhancement
 */
function supportsWebP() {
  return new Promise(resolve => {
    const webP = new Image();
    webP.onload = webP.onerror = () => {
      resolve(webP.height === 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  });
}

/**
 * Optimize image loading based on browser capabilities
 */
async function optimizeImages() {
  const webpSupported = await supportsWebP();
  
  // Update image sources based on WebP support
  const images = document.querySelectorAll('img[data-webp]');
  images.forEach(img => {
    if (webpSupported && img.dataset.webp) {
      img.dataset.src = img.dataset.webp;
    }
  });
  
  // Initialize lazy loading
  initLazyLoading();
}

/**
 * Create responsive image component
 */
function ResponsiveImage({ src, webpSrc, alt, className, ...props }) {
  const [imageSrc, setImageSrc] = React.useState('');
  const [isLoaded, setIsLoaded] = React.useState(false);
  const imgRef = React.useRef();

  React.useEffect(() => {
    const loadImage = async () => {
      try {
        const webpSupported = await supportsWebP();
        const finalSrc = webpSupported && webpSrc ? webpSrc : src;
        
        // Preload the image
        const img = new Image();
        img.onload = () => {
          setImageSrc(finalSrc);
          setIsLoaded(true);
        };
        img.src = finalSrc;
      } catch (error) {
        setImageSrc(src);
        setIsLoaded(true);
      }
    };

    loadImage();
  }, [src, webpSrc]);

  return React.createElement('div', {
    className: `relative ${className || ''}`
  }, [
    // Placeholder while loading
    !isLoaded && React.createElement('div', {
      key: 'placeholder',
      className: 'absolute inset-0 bg-gray-200 animate-pulse rounded'
    }),
    // Actual image
    imageSrc && React.createElement('img', {
      key: 'image',
      ref: imgRef,
      src: imageSrc,
      alt,
      className: `transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`,
      ...props
    })
  ]);
}

// Make components globally available
window.ResponsiveImage = ResponsiveImage;
window.optimizeImages = optimizeImages;

// Auto-initialize on load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', optimizeImages);
} else {
  optimizeImages();
}