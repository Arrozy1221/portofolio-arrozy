const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'data', 'i18n.js');
let content = fs.readFileSync(filePath, 'utf8');

// Fix broken encoding: replace curly/smart quotes and em dashes
content = content.replace(/\u201C/g, '');  // left double curly quote
content = content.replace(/\u201D/g, '');  // right double curly quote
content = content.replace(/\u2018/g, "'"); // left single curly quote
content = content.replace(/\u2019/g, "'"); // right single curly quote
content = content.replace(/\u2014"/g, ' \u2014'); // em dash + stray quote
content = content.replace(/\u2014/g, ' \u2014 '); // normalize em dash spacing
content = content.replace(/  +/g, ' '); // collapse double spaces

// Also fix the broken "â€"" pattern if any remain (from bad UTF-8 decode)
content = content.replace(/â€"/g, '\u2014');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Fixed encoding issues in i18n.js');
