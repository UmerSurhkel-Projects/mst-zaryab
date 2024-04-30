
const { SitemapStream, streamToPromise } = require('sitemap');
const { createGzip } = require('zlib');
const fs = require('fs');
const path = require('path');

// Import all pages
const { getAllPages } = require('./app/utils/pageUtils'); // Import your utility function to get all pages

// Function to generate sitemap XML
async function generateSitemap() {
  const pages = await getAllPages(); // Retrieve all pages using your utility function

  const stream = new SitemapStream({ hostname: 'https://mst-zaryab.vercel.app/' }); // Replace with your domain
  const pipeline = stream.pipe(createGzip());

  pages.forEach((page) => {
    stream.write({ url: page.url, changefreq: 'weekly', priority: 0.7 });
  });

  stream.end();

  return streamToPromise(pipeline).then((data) => data.toString());
}

// Generate sitemap and save to file
generateSitemap().then((sitemap) => {
  fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml.gz'), sitemap); // Save the sitemap in the public directory
});
