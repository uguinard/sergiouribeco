---
// @ts-check
const fs = require('fs');
const path = require('path');

const repoRoot = process.cwd();
const source = '/Users/mac/Documents/01_ProyectoEspanol/SergioUribe.co/website/edits-implementations/story_timeline_map.json';
const webDir = path.join(repoRoot, 'src', 'pages', 'journey');
const target = path.join(webDir, 'story-timeline-map.json');

if (!fs.existsSync(webDir)) {
  fs.mkdirSync(webDir, { recursive: true });
}

fs.copyFileSync(source, target);
console.log('copied to', target);
