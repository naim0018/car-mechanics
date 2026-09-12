import { createRequire } from 'module';

const require = createRequire(import.meta.url);

Skip to content
naim0018
car-mechanics
Repository navigation
Code
Issues
Pull requests
Agents
Actions
Projects
Wiki
Security and quality
Insights
Settings
Files

t
T
public
src
.gitignore
README.md
eslint.config.mjs
next.config.ts
package-lock.json
package.json
postcss.config.mjs
tailwind.config.ts
tsconfig.json
vercel.json
car-mechanics
/

in
main

Edit

Preview
Indent mode

Indent size

Line wrap mode

Editing postcss.config.mjs file contents
  1
  2
  3
  4
  5
  6
  7
  8
  9
 10
 11
 12
 13




/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
};

export default config
