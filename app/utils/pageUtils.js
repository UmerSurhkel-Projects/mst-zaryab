
const fs = require('fs');
const path = require('path');

// Function to get all pages
function getAllPages() {
  const appDir = path.join(process.cwd(), 'app');
  const pages = [];

  function traverse(directory) {
    const files = fs.readdirSync(directory);

    files.forEach((file) => {
      const filePath = path.join(directory, file);
      const stats = fs.statSync(filePath);

      if (stats.isDirectory()) {
        // Ignore directories named "components"
        if (file !== 'components') {
          traverse(filePath);
        }
      } else if (file.endsWith('.tsx') || file.endsWith('.js')) {
        // Ignore specific files
        if (
          file !== 'pageUtils.js' &&
          file !== 'layout.tsx'
        ) {
          const relativePath = path.relative(appDir, filePath);
          const url = `/${relativePath.replace(/\.tsx?$/, '').replace(/\\/g, '/')}`;
          pages.push({ url });
        }
      }
    });
  }

  traverse(appDir);
  return pages;
}

module.exports = { getAllPages };
