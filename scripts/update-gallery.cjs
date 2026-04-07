const fs = require('fs');
const path = require('path');

const srcFile = path.join(__dirname, '../src/data/products.ts');
let content = fs.readFileSync(srcFile, 'utf8');

const productsRegex = /\{\s*id: \d+,([\s\S]*?)idealFor: [^\}]*\}/g;
const blocks = content.match(productsRegex);

if (blocks) {
  blocks.forEach(block => {
    const nameMatch = block.match(/name: "([^"]+)"/);
    if (!nameMatch) return;
    const name = nameMatch[1];
    
    const dir = path.join(__dirname, '../public/images/gallery', name);
    let galleryArr = [];
    
    if(fs.existsSync(dir)) {
      const files = fs.readdirSync(dir);
      galleryArr = files
        .filter(f => /\.(jpe?g|png|webp)$/i.test(f) && f !== '1.jpeg')
        .sort((a, b) => a.localeCompare(b, undefined, {numeric: true}))
        .map(f => `/images/gallery/${name}/${f}`);
    }
    
    if (galleryArr.length > 0) {
      if(block.includes('gallery: [')) return; // Already updated
      const galleryStr = `\n    gallery: ${JSON.stringify(galleryArr)},`;
      const newBlock = block.replace(/(image: "[^"]*",)/, `$1${galleryStr}`);
      content = content.replace(block, newBlock);
    }
  });
  
  fs.writeFileSync(srcFile, content, 'utf8');
}
