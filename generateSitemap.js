const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');
const path = require('path');

// Import all pages
const { getAllPages } = require('./app/utils/pageUtils'); // Import your utility function to get all pages
console.log(getAllPages, "getall pages...");

// Function to generate sitemap XML
async function generateSitemap() {
  const pages = await getAllPages(); // Retrieve all pages using your utility function

  const stream = new SitemapStream({ hostname: 'https://mst-zaryab.vercel.app/' }); // Replace with your domain

  pages.forEach((page) => {
    stream.write({ url: page.url, changefreq: 'weekly', priority: 0.7 });
  });

  stream.end();

  return streamToPromise(stream).then((data) => data.toString()); // Return the sitemap without gzip compression
}

// Generate sitemap and save to file
generateSitemap().then((sitemap) => {
  fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap); 
});

