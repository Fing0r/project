const createTemplate = require('./templates/createTemplate');

const layer = process.argv[2];
const sliceName = process.argv[3];

const layers = ['entities', 'pages', 'features'];

if (!layer || !layers.includes(layer)) {
    throw new Error(`Укажите слой ${layers.join(' или ')}.`);
}

if (!sliceName) {
    throw new Error('Укажите слайс.');
}

createTemplate(layer, sliceName);
