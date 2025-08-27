// Performance monitoring and optimization utilities

class PerformanceMonitor {
  constructor() {
    this.metrics = {};
    this.observers = {};
    this.init();
  }

  init() {
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined') {
      this.observeLCP();
      this.observeFID();
      this.observeCLS();
      this.observeFCP();
      this.observeTTFB();
    }
  }

  // Largest Contentful Paint
  observeLCP() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.metrics.lcp = lastEntry.startTime;
        console.log('LCP:', lastEntry.startTime);
      });
      
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.lcp = observer;
    }
  }

  // First Input Delay
  observeFID() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((entryList) => {
        const firstInput = entryList.getEntries()[0];
        if (firstInput) {
          const fid = firstInput.processingStart - firstInput.startTime;
          this.metrics.fid = fid;
          console.log('FID:', fid);
        }
      });
      
      observer.observe({ entryTypes: ['first-input'] });
      this.observers.fid = observer;
    }
  }

  // Cumulative Layout Shift
  observeCLS() {
    if ('PerformanceObserver' in window) {
      let clsValue = 0;
      const observer = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        }
        this.metrics.cls = clsValue;
        console.log('CLS:', clsValue);
      });
      
      observer.observe({ entryTypes: ['layout-shift'] });
      this.observers.cls = observer;
    }
  }

  // First Contentful Paint
  observeFCP() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const fcp = entries.find(entry => entry.name === 'first-contentful-paint');
        if (fcp) {
          this.metrics.fcp = fcp.startTime;
          console.log('FCP:', fcp.startTime);
        }
      });
      
      observer.observe({ entryTypes: ['paint'] });
      this.observers.fcp = observer;
    }
  }

  // Time to First Byte
  observeTTFB() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const navigation = entries.find(entry => entry.entryType === 'navigation');
        if (navigation) {
          const ttfb = navigation.responseStart - navigation.requestStart;
          this.metrics.ttfb = ttfb;
          console.log('TTFB:', ttfb);
        }
      });
      
      observer.observe({ entryTypes: ['navigation'] });
      this.observers.ttfb = observer;
    }
  }

  // Bundle size analysis
  analyzeResources() {
    if ('performance' in window) {
      const resources = performance.getEntriesByType('resource');
      let totalSize = 0;
      const resourceBreakdown = {};

      resources.forEach(resource => {
        const size = resource.transferSize || 0;
        totalSize += size;
        
        const type = this.getResourceType(resource.name);
        resourceBreakdown[type] = (resourceBreakdown[type] || 0) + size;
      });

      this.metrics.bundleSize = totalSize;
      this.metrics.resourceBreakdown = resourceBreakdown;
      
      console.log('Total bundle size:', this.formatBytes(totalSize));
      console.log('Resource breakdown:', resourceBreakdown);
      
      return { totalSize, resourceBreakdown };
    }
  }

  getResourceType(url) {
    if (url.includes('.js')) return 'JavaScript';
    if (url.includes('.css')) return 'CSS';
    if (url.includes('.jpg') || url.includes('.png') || url.includes('.webp')) return 'Images';
    if (url.includes('.woff') || url.includes('.ttf')) return 'Fonts';
    return 'Other';
  }

  formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  // Memory usage monitoring
  monitorMemory() {
    if ('memory' in performance) {
      const memory = performance.memory;
      this.metrics.memory = {
        used: memory.usedJSHeapSize,
        total: memory.totalJSHeapSize,
        limit: memory.jsHeapSizeLimit
      };
      
      console.log('Memory usage:', {
        used: this.formatBytes(memory.usedJSHeapSize),
        total: this.formatBytes(memory.totalJSHeapSize),
        limit: this.formatBytes(memory.jsHeapSizeLimit)
      });
    }
  }

  // React component render tracking
  trackComponentRender(componentName, renderTime) {
    if (!this.metrics.componentRenders) {
      this.metrics.componentRenders = {};
    }
    
    if (!this.metrics.componentRenders[componentName]) {
      this.metrics.componentRenders[componentName] = [];
    }
    
    this.metrics.componentRenders[componentName].push(renderTime);
  }

  // Generate performance report
  generateReport() {
    return {
      coreWebVitals: {
        lcp: this.metrics.lcp,
        fid: this.metrics.fid,
        cls: this.metrics.cls,
        fcp: this.metrics.fcp,
        ttfb: this.metrics.ttfb
      },
      bundleAnalysis: {
        totalSize: this.metrics.bundleSize,
        breakdown: this.metrics.resourceBreakdown
      },
      memory: this.metrics.memory,
      componentRenders: this.metrics.componentRenders
    };
  }

  // Cleanup observers
  disconnect() {
    Object.values(this.observers).forEach(observer => {
      if (observer && observer.disconnect) {
        observer.disconnect();
      }
    });
  }
}

// React performance tracking hook
function usePerformanceTracking(componentName) {
  const startTime = React.useRef(performance.now());
  
  React.useEffect(() => {
    const endTime = performance.now();
    const renderTime = endTime - startTime.current;
    
    if (window.performanceMonitor) {
      window.performanceMonitor.trackComponentRender(componentName, renderTime);
    }
    
    startTime.current = performance.now();
  });
}

// Initialize global performance monitor
if (typeof window !== 'undefined') {
  window.performanceMonitor = new PerformanceMonitor();
  window.usePerformanceTracking = usePerformanceTracking;
  
  // Generate report after page load
  window.addEventListener('load', () => {
    setTimeout(() => {
      window.performanceMonitor.analyzeResources();
      window.performanceMonitor.monitorMemory();
      
      // Log complete report
      console.log('Performance Report:', window.performanceMonitor.generateReport());
    }, 2000);
  });
}