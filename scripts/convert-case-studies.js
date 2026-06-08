const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');
const APP_DIR = path.join(ROOT_DIR, 'app');

const caseStudies = [
  {
    slug: 'mbkm-ut',
    htmlFile: path.join(PUBLIC_DIR, 'case-study', 'mbkm-ut.html'),
    outDir: path.join(APP_DIR, 'case-study', 'mbkm-ut'),
  },
  {
    slug: 'simontila',
    htmlFile: path.join(PUBLIC_DIR, 'case-study', 'simontila.html'),
    outDir: path.join(APP_DIR, 'case-study', 'simontila'),
  },
  {
    slug: 'esertifikat-nextgen',
    htmlFile: path.join(PUBLIC_DIR, 'case-study', 'esertifikat-nextgen.html'),
    outDir: path.join(APP_DIR, 'case-study', 'esertifikat-nextgen'),
  }
];

// Helper to prefix CSS selectors
function prefixCssSelectors(cssString, prefix) {
  let result = '';
  let depth = 0;
  let currentSelector = '';
  let inMediaQuery = false;
  
  let i = 0;
  while (i < cssString.length) {
    const char = cssString[i];
    if (char === '{') {
      depth++;
      if (depth === 1) {
        let sel = currentSelector.trim();
        if (sel.startsWith('@media')) {
          result += sel + ' {\n';
          inMediaQuery = true;
        } else if (sel.startsWith('@keyframes') || sel.startsWith('@-webkit-keyframes')) {
          result += sel + ' {\n';
          inMediaQuery = true;
        } else {
          result += prefixSelectorList(sel, prefix) + ' {\n';
        }
        currentSelector = '';
      } else {
        let sel = currentSelector.trim();
        if (inMediaQuery && !sel.startsWith('@') && !/^(from|to|\d+%)/.test(sel)) {
          result += prefixSelectorList(sel, prefix) + ' {\n';
        } else {
          result += sel + ' {\n';
        }
        currentSelector = '';
      }
    } else if (char === '}') {
      depth--;
      result += '}\n';
      if (depth === 0) {
        inMediaQuery = false;
      }
      currentSelector = '';
    } else {
      if (depth === 0 || (depth === 1 && inMediaQuery)) {
        currentSelector += char;
      } else {
        result += char;
      }
    }
    i++;
  }
  return result;
}

function prefixSelectorList(selectorList, prefix) {
  return selectorList.split(',').map(sel => {
    let s = sel.trim();
    if (!s) return '';
    if (s === 'body' || s === 'html' || s === ':root') {
      return prefix;
    }
    if (s.startsWith('body ') || s.startsWith('html ') || s.startsWith(':root ')) {
      return prefix + s.slice(4);
    }
    return prefix + ' ' + s;
  }).join(', ');
}

// Helper to convert inline style attribute strings to React style objects
function convertInlineStyles(html) {
  return html.replace(/\bstyle="([^"]*)"/g, (match, styleStr) => {
    const styles = styleStr.split(';').reduce((acc, pair) => {
      const parts = pair.split(':');
      if (parts.length >= 2) {
        const key = parts[0].trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
        const val = parts.slice(1).join(':').trim();
        acc.push(`${key}: "${val.replace(/"/g, '\\"')}"`);
      }
      return acc;
    }, []);
    if (styles.length === 0) return '';
    return `style={{ ${styles.join(', ')} }}`;
  });
}

// Helper to prefix all class names found in the HTML structure
function prefixLocalClasses(htmlContent, cssContent) {
  // Find all class="..." values
  const classAttrRegex = /class="([^"]+)"/g;
  const classes = new Set();
  let match;
  while ((match = classAttrRegex.exec(htmlContent)) !== null) {
    match[1].split(/\s+/).forEach(c => {
      const cleanClass = c.trim();
      if (cleanClass && cleanClass !== 'back-to-home') {
        classes.add(cleanClass);
      }
    });
  }

  // Sort classes by length descending so that longer names are replaced first
  const sortedClasses = Array.from(classes).sort((a, b) => b.length - a.length);

  let updatedHtml = htmlContent;
  let updatedCss = cssContent;

  // Replace classes in HTML (inside class="..." attributes)
  updatedHtml = updatedHtml.replace(/class="([^"]+)"/g, (fullAttr, classVal) => {
    const prefixedVal = classVal.split(/\s+/).map(c => {
      if (c === 'back-to-home') return c; // keep back-to-home as-is since it is our specific route back button
      if (sortedClasses.includes(c)) {
        return 'cs-' + c;
      }
      return c;
    }).join(' ');
    return `class="${prefixedVal}"`;
  });

  // Replace classes in CSS
  sortedClasses.forEach(c => {
    const cssClassRegex = new RegExp('\\.(' + c + ')(?![a-zA-Z0-9_-])', 'g');
    updatedCss = updatedCss.replace(cssClassRegex, '.cs-$1');
  });

  return { html: updatedHtml, css: updatedCss };
}

// Process each case study
caseStudies.forEach(cs => {
  console.log(`Processing: ${cs.slug}...`);
  
  if (!fs.existsSync(cs.htmlFile)) {
    console.error(`Error: File not found ${cs.htmlFile}`);
    return;
  }
  
  let content = fs.readFileSync(cs.htmlFile, 'utf8');
  
  // Create images output directory
  const imagesDestDir = path.join(PUBLIC_DIR, 'images', 'case-study', cs.slug);
  fs.mkdirSync(imagesDestDir, { recursive: true });
  
  // Extract Title
  let title = 'Case Study';
  const titleMatch = content.match(/<title>([\s\S]*?)<\/title>/i);
  if (titleMatch) {
    title = titleMatch[1].trim();
  }
  
  // Extract CSS
  let css = '';
  const styleMatch = content.match(/<style>([\s\S]*?)<\/style>/i);
  if (styleMatch) {
    css = styleMatch[1];
  }

  // Extract body HTML
  let bodyHtml = '';
  const bodyMatch = content.match(/<body>([\s\S]*?)<\/body>/i);
  if (bodyMatch) {
    bodyHtml = bodyMatch[1];
  } else {
    bodyHtml = content; // fallback
  }

  // Prefix local class names to completely avoid clashes
  console.log(`- Prefixing local class names with "cs-"...`);
  const prefixedData = prefixLocalClasses(bodyHtml, css);
  bodyHtml = prefixedData.html;
  css = prefixedData.css;
  
  // Prefix CSS selectors using the scoped wrapper container
  console.log(`- Scoping CSS rules to .cs-case-study-wrapper...`);
  const prefixedCss = prefixCssSelectors(css, '.cs-case-study-wrapper');
  
  // Extract and Save Base64 Images
  console.log(`- Extracting Base64 images to static files...`);
  let imgCount = 0;
  const base64Regex = /src="data:image\/([^;]+);base64,([^"]+)"/g;
  
  bodyHtml = bodyHtml.replace(base64Regex, (fullMatch, ext, base64Data) => {
    imgCount++;
    if (ext === 'jpeg') ext = 'jpg';
    if (ext === 'svg+xml') ext = 'svg';
    
    const imgName = `img_${imgCount}.${ext}`;
    const imgPath = path.join(imagesDestDir, imgName);
    
    // Save image binary to filesystem
    const buffer = Buffer.from(base64Data, 'base64');
    fs.writeFileSync(imgPath, buffer);
    
    // Return relative public path
    return `src="/images/case-study/${cs.slug}/${imgName}"`;
  });
  console.log(`  Saved ${imgCount} images to /public/images/case-study/${cs.slug}/`);

  // Remove the navigation <a> tag since we will add it manually as a Link component
  bodyHtml = bodyHtml.replace(/<a[^>]*class="back-to-home"[\s\S]*?<\/a>/i, '');
  
  // Convert comments
  bodyHtml = bodyHtml.replace(/<!--[\s\S]*?-->/g, '');
  
  // Convert standard classes
  bodyHtml = bodyHtml.replace(/\bclass="/g, 'className="');
  
  // Convert inline styles
  bodyHtml = convertInlineStyles(bodyHtml);
  
  // Convert SVG properties
  const svgReplacements = [
    { from: /stroke-width=/g, to: 'strokeWidth=' },
    { from: /stroke-linecap=/g, to: 'strokeLinecap=' },
    { from: /stroke-linejoin=/g, to: 'strokeLinejoin=' },
    { from: /stroke-miterlimit=/g, to: 'strokeMiterlimit=' },
    { from: /clip-rule=/g, to: 'clipRule=' },
    { from: /fill-rule=/g, to: 'fillRule=' },
    { from: /viewbox=/g, to: 'viewBox=' },
    { from: /xmlns:xlink=/g, to: 'xmlnsXlink=' },
    { from: /xml:space=/g, to: 'xmlSpace=' },
    { from: /stroke-dasharray=/g, to: 'strokeDasharray=' },
    { from: /stroke-dashoffset=/g, to: 'strokeDashoffset=' }
  ];
  svgReplacements.forEach(r => {
    bodyHtml = bodyHtml.replace(r.from, r.to);
  });
  
  // Ensure self-closing tags
  bodyHtml = bodyHtml.replace(/<img([^>]*)(?<!\/)>/g, '<img$1 />');
  bodyHtml = bodyHtml.replace(/<br([^>]*)(?<!\/)>/g, '<br$1 />');
  bodyHtml = bodyHtml.replace(/<hr([^>]*)(?<!\/)>/g, '<hr$1 />');
  bodyHtml = bodyHtml.replace(/<line([^>]*)(?<!\/)>/g, '<line$1 />');
  bodyHtml = bodyHtml.replace(/<polyline([^>]*)(?<!\/)>/g, '<polyline$1 />');
  bodyHtml = bodyHtml.replace(/<rect([^>]*)(?<!\/)>/g, '<rect$1 />');
  bodyHtml = bodyHtml.replace(/<circle([^>]*)(?<!\/)>/g, '<circle$1 />');
  
  // Generate JSX Page Code
  const pageJsx = `"use client";

import Link from "next/link";

export default function Page() {
  return (
    <div className="cs-case-study-wrapper">
      <style dangerouslySetInnerHTML={{ __html: \`${prefixedCss.replace(/`/g, '\\`').replace(/\${/g, '\\${')}\` }} />
      
      <Link href="/" className="back-to-home">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
        <span>Back to Home</span>
      </Link>

      ${bodyHtml.trim()}
    </div>
  );
}
`;
  
  // Write page.jsx
  fs.mkdirSync(cs.outDir, { recursive: true });
  fs.writeFileSync(path.join(cs.outDir, 'page.jsx'), pageJsx, 'utf8');
  console.log(`- Created React Component at ${cs.outDir}/page.jsx`);
  console.log('-----------------------------------');
});

console.log("SUCCESS: Scoped Case study conversion script completed successfully!");
