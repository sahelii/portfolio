#!/usr/bin/env node

/**
 * Image Optimization Script
 * 
 * This script helps optimize large image files in the portfolio.
 * For the large GIF file (flappy-bird.gif), consider:
 * 1. Converting to MP4/WebM for better performance
 * 2. Reducing frame rate or resolution
 * 3. Using a tool like FFmpeg to compress
 * 
 * Usage:
 * npm install -g sharp imagemin imagemin-gifsicle
 * node scripts/optimize-images.js
 */

const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const projectsDir = path.join(publicDir, 'projects');

console.log('🔍 Checking for large image files...\n');

// Check file sizes
const files = [
  { path: path.join(projectsDir, 'flappy-bird.gif'), maxSize: 1024 * 1024 }, // 1MB
  { path: path.join(projectsDir, 'blog-app.gif'), maxSize: 500 * 1024 }, // 500KB
  { path: path.join(projectsDir, 'creditFlowPulse.png'), maxSize: 500 * 1024 }, // 500KB
  { path: path.join(projectsDir, 'fitness-app.png'), maxSize: 500 * 1024 }, // 500KB
];

files.forEach(file => {
  if (fs.existsSync(file.path)) {
    const stats = fs.statSync(file.path);
    const sizeInMB = (stats.size / (1024 * 1024)).toFixed(2);
    const isLarge = stats.size > file.maxSize;
    
    console.log(`${isLarge ? '⚠️' : '✅'} ${path.basename(file.path)}: ${sizeInMB}MB`);
    
    if (isLarge) {
      console.log(`   ⚠️  This file is larger than recommended (${(file.maxSize / (1024 * 1024)).toFixed(2)}MB)`);
      
      if (file.path.endsWith('.gif')) {
        console.log('   💡 Consider converting to MP4/WebM for better performance');
        console.log('   💡 Use FFmpeg: ffmpeg -i input.gif -vf "fps=10,scale=480:-1" output.mp4');
      } else if (file.path.endsWith('.png')) {
        console.log('   💡 Consider converting to WebP for better compression');
        console.log('   💡 Use sharp or imagemin to optimize');
      }
    }
  } else {
    console.log(`❌ ${path.basename(file.path)}: File not found`);
  }
});

console.log('\n📋 Optimization Recommendations:');
console.log('1. Install optimization tools: npm install -g sharp imagemin imagemin-gifsicle');
console.log('2. Convert large GIFs to MP4/WebM for better performance');
console.log('3. Convert PNGs to WebP for better compression');
console.log('4. Use responsive images with different sizes for different devices');
console.log('5. Consider lazy loading for images below the fold'); 