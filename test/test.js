const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'public', 'index.html');
if (!fs.existsSync(indexPath)) {
  console.error('index.html not found');
  process.exit(1);
}
console.log('All tests passed');
