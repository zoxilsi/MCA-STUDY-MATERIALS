// Lazy data loading utilities for performance optimization

class DataLoader {
  constructor() {
    this.cache = new Map();
    this.loadingPromises = new Map();
  }

  /**
   * Lazy load filesData when needed
   */
  async loadFilesData() {
    const cacheKey = 'filesData';
    
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    if (this.loadingPromises.has(cacheKey)) {
      return this.loadingPromises.get(cacheKey);
    }

    const promise = this.fetchFilesData();
    this.loadingPromises.set(cacheKey, promise);

    try {
      const data = await promise;
      this.cache.set(cacheKey, data);
      this.loadingPromises.delete(cacheKey);
      return data;
    } catch (error) {
      this.loadingPromises.delete(cacheKey);
      throw error;
    }
  }

  async fetchFilesData() {
    // Since filesData is in a module, we'll load it dynamically
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = './filesData.js';
      script.onload = () => {
        resolve(window.filesData || {});
      };
      script.onerror = () => {
        reject(new Error('Failed to load files data'));
      };
      
      // Only load if not already present
      if (!window.filesData) {
        document.head.appendChild(script);
      } else {
        resolve(window.filesData);
      }
    });
  }

  /**
   * Load course content for specific course
   */
  async loadCourseContent(courseCode) {
    const cacheKey = `courseContent_${courseCode}`;
    
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    try {
      // Assume we have a function to get modules for course
      const modules = window.getModulesForCourse ? 
        window.getModulesForCourse(courseCode) : [];
      
      this.cache.set(cacheKey, modules);
      return modules;
    } catch (error) {
      console.error(`Failed to load course content for ${courseCode}:`, error);
      return [];
    }
  }

  /**
   * Preload data for likely next interactions
   */
  preloadData(dataKeys) {
    dataKeys.forEach(key => {
      // Use requestIdleCallback for non-urgent preloading
      if (window.requestIdleCallback) {
        window.requestIdleCallback(() => {
          this.loadData(key);
        });
      } else {
        setTimeout(() => this.loadData(key), 100);
      }
    });
  }

  async loadData(key) {
    switch (key) {
      case 'filesData':
        return this.loadFilesData();
      default:
        return null;
    }
  }

  /**
   * Clear cache to free memory
   */
  clearCache() {
    this.cache.clear();
  }

  /**
   * Get cache size for debugging
   */
  getCacheSize() {
    return this.cache.size;
  }
}

// Create global instance
window.dataLoader = new DataLoader();

// React hook for data loading
function useDataLoader(dataKey, dependencies = []) {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    let cancelled = false;

    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const result = await window.dataLoader.loadData(dataKey);
        
        if (!cancelled) {
          setData(result);
          setLoading(false);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err);
          setLoading(false);
        }
      }
    };

    loadData();

    return () => {
      cancelled = true;
    };
  }, [dataKey, ...dependencies]);

  return { data, loading, error };
}

// Make hook globally available
window.useDataLoader = useDataLoader;