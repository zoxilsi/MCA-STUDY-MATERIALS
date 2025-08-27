#!/usr/bin/env node

/**
 * Simple performance testing script for MCA Notes application
 * Tests bundle size, loading times, and optimization effectiveness
 */

const fs = require('fs');
const path = require('path');

class PerformanceTester {
  constructor() {
    this.results = {
      bundleSize: {},
      fileCount: {},
      optimizations: {}
    };
  }

  // Analyze bundle size
  analyzeBundleSize() {
    console.log('\n🔍 Analyzing Bundle Size...');
    
    const getFileSize = (filePath) => {
      try {
        const stats = fs.statSync(filePath);
        return stats.size;
      } catch (error) {
        return 0;
      }
    };

    const formatBytes = (bytes) => {
      if (bytes === 0) return '0 Bytes';
      const k = 1024;
      const sizes = ['Bytes', 'KB', 'MB', 'GB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    // Core files
    const coreFiles = {
      'index.html': './index.html',
      'app.js': './app.js',
      'filesData.js': './filesData.js'
    };

    // Component files
    const componentDir = './components';
    const componentFiles = fs.readdirSync(componentDir)
      .filter(file => file.endsWith('.js'))
      .reduce((acc, file) => {
        acc[`components/${file}`] = path.join(componentDir, file);
        return acc;
      }, {});

    // Utility files
    const utilDir = './utils';
    const utilFiles = fs.readdirSync(utilDir)
      .filter(file => file.endsWith('.js'))
      .reduce((acc, file) => {
        acc[`utils/${file}`] = path.join(utilDir, file);
        return acc;
      }, {});

    // Asset files
    const assetDir = './assets';
    const assetFiles = fs.existsSync(assetDir) ? 
      fs.readdirSync(assetDir).reduce((acc, file) => {
        acc[`assets/${file}`] = path.join(assetDir, file);
        return acc;
      }, {}) : {};

    const allFiles = { ...coreFiles, ...componentFiles, ...utilFiles, ...assetFiles };
    let totalSize = 0;

    console.log('\n📊 File Size Analysis:');
    console.log('─'.repeat(50));

    Object.entries(allFiles).forEach(([name, path]) => {
      const size = getFileSize(path);
      totalSize += size;
      this.results.bundleSize[name] = size;
      
      const sizeStr = formatBytes(size);
      const status = size > 1000000 ? '🔴' : size > 500000 ? '🟡' : '🟢';
      console.log(`${status} ${name.padEnd(30)} ${sizeStr.padStart(10)}`);
    });

    console.log('─'.repeat(50));
    console.log(`📦 Total Bundle Size: ${formatBytes(totalSize)}`);

    this.results.bundleSize.total = totalSize;
    return totalSize;
  }

  // Check optimization features
  checkOptimizations() {
    console.log('\n🚀 Checking Optimization Features...');
    console.log('─'.repeat(50));

    const optimizations = [
      {
        name: 'React.lazy() Implementation',
        check: () => {
          const appContent = fs.readFileSync('./app.js', 'utf8');
          return appContent.includes('React.lazy(');
        }
      },
      {
        name: 'Service Worker',
        check: () => fs.existsSync('./sw.js')
      },
      {
        name: 'Image Optimization',
        check: () => fs.existsSync('./utils/imageOptimization.js')
      },
      {
        name: 'Data Loader',
        check: () => fs.existsSync('./utils/dataLoader.js')
      },
      {
        name: 'Performance Monitoring',
        check: () => fs.existsSync('./utils/performance.js')
      },
      {
        name: 'React.memo Usage',
        check: () => {
          const navContent = fs.readFileSync('./components/Navigation.js', 'utf8');
          return navContent.includes('React.memo(');
        }
      },
      {
        name: 'Async CSS Loading',
        check: () => {
          const htmlContent = fs.readFileSync('./index.html', 'utf8');
          return htmlContent.includes('rel="preload"') && htmlContent.includes('as="style"');
        }
      },
      {
        name: 'Suspense Implementation',
        check: () => {
          const appContent = fs.readFileSync('./app.js', 'utf8');
          return appContent.includes('React.Suspense');
        }
      }
    ];

    optimizations.forEach(opt => {
      const implemented = opt.check();
      const status = implemented ? '✅' : '❌';
      console.log(`${status} ${opt.name}`);
      this.results.optimizations[opt.name] = implemented;
    });

    const implementedCount = optimizations.filter(opt => opt.check()).length;
    const percentage = Math.round((implementedCount / optimizations.length) * 100);
    
    console.log('─'.repeat(50));
    console.log(`🎯 Optimization Score: ${implementedCount}/${optimizations.length} (${percentage}%)`);

    return percentage;
  }

  // Analyze file structure
  analyzeStructure() {
    console.log('\n📁 Project Structure Analysis...');

    const countFiles = (dir, extension = '') => {
      try {
        const files = fs.readdirSync(dir);
        return files.filter(file => 
          extension ? file.endsWith(extension) : true
        ).length;
      } catch (error) {
        return 0;
      }
    };

    const structure = {
      'JavaScript Files': countFiles('./', '.js') + countFiles('./components', '.js') + countFiles('./utils', '.js'),
      'Component Files': countFiles('./components', '.js'),
      'Utility Files': countFiles('./utils', '.js'),
      'Asset Files': countFiles('./assets'),
      'Total Files': countFiles('./') + countFiles('./components') + countFiles('./utils') + countFiles('./assets')
    };

    Object.entries(structure).forEach(([category, count]) => {
      console.log(`📊 ${category}: ${count}`);
      this.results.fileCount[category] = count;
    });

    return structure;
  }

  // Generate performance recommendations
  generateRecommendations() {
    console.log('\n💡 Performance Recommendations...');
    console.log('─'.repeat(50));

    const recommendations = [];

    // Bundle size recommendations
    if (this.results.bundleSize.total > 5000000) {
      recommendations.push('🔴 Large bundle size detected. Consider implementing more aggressive code splitting.');
    }

    // Check for large individual files
    Object.entries(this.results.bundleSize).forEach(([file, size]) => {
      if (size > 1000000 && file !== 'total') {
        recommendations.push(`🟡 Large file detected: ${file} (${(size/1024/1024).toFixed(2)}MB). Consider optimization.`);
      }
    });

    // Optimization recommendations
    const unimplementedOptimizations = Object.entries(this.results.optimizations)
      .filter(([name, implemented]) => !implemented)
      .map(([name]) => name);

    if (unimplementedOptimizations.length > 0) {
      recommendations.push(`🔴 Missing optimizations: ${unimplementedOptimizations.join(', ')}`);
    }

    if (recommendations.length === 0) {
      console.log('🎉 Excellent! All major optimizations are implemented.');
      console.log('🚀 Your application is well-optimized for performance.');
    } else {
      recommendations.forEach(rec => console.log(rec));
    }

    return recommendations;
  }

  // Run complete performance test
  run() {
    console.log('🎯 MCA Notes Performance Analysis');
    console.log('='.repeat(50));

    this.analyzeBundleSize();
    this.analyzeStructure();
    const optimizationScore = this.checkOptimizations();
    const recommendations = this.generateRecommendations();

    console.log('\n📈 Performance Summary');
    console.log('='.repeat(50));
    console.log(`🏆 Optimization Score: ${optimizationScore}%`);
    console.log(`📦 Total Bundle Size: ${(this.results.bundleSize.total / 1024 / 1024).toFixed(2)}MB`);
    console.log(`📊 Total Files: ${this.results.fileCount['Total Files']}`);
    console.log(`🚀 Recommendations: ${recommendations.length} items`);

    // Save results to file
    fs.writeFileSync(
      './performance-report.json',
      JSON.stringify(this.results, null, 2)
    );

    console.log('\n💾 Detailed report saved to: performance-report.json');
    console.log('\n🎉 Performance analysis complete!');

    return this.results;
  }
}

// Run the performance test
if (require.main === module) {
  const tester = new PerformanceTester();
  tester.run();
}

module.exports = PerformanceTester;