// Post-build step for GitHub Pages deployment.
// Without `.nojekyll` GitHub Pages runs the build output through Jekyll,
// which drops files/directories whose names start with an underscore
// (notably `_astro/`, where all of Astro's CSS and JS live).
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = 'dist';
const marker = join(outputDir, '.nojekyll');

writeFileSync(marker, '');
console.log(`[postbuild] created ${marker}`);
