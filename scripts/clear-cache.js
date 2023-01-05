const fs = require('fs');
const path = require('path');

const cacheDir = path.resolve(__dirname, '..', 'node_modules', '.cache');

/**
 * либо можно установить пакет rimraf в дев зависимости и в package,json postinstall записать:
 * "postinstall": "rimraf ./node_modules/.cache"
 */
fs.rmSync(cacheDir, { recursive: true, force: true });
