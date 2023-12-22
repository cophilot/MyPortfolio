# !/bin/bash
npm install

REM Add start script
npm pkg set scripts.start="npm run dev"

REM Install prettier and eslint
npm install prettier -D
npm install eslint -D
npm install eslint-plugin-prettier -D
npm install eslint-config-prettier -D
npm pkg set scripts.format="prettier --write ./src"
npm pkg set scripts.format:check="prettier --write ./src --check"

REM Install and configure husky
npm install husky -D
npm pkg set scripts.prepare="husky install"
npm run prepare
npx husky add .husky/pre-commit "npm run format:check"
