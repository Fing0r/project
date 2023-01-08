const fs = require('fs');
const path = require('path');

const dirTranslate = path.resolve(__dirname, '..', 'public', 'locales');
const dirLocalesFiles = fs.readdirSync(dirTranslate, (files) => files);
const languages = dirLocalesFiles.filter((file) => {
    const fileStat = fs.statSync(`${dirTranslate}/${file}`);
    return fileStat.isDirectory();
});

const data = languages.reduce((acc, language) => {
    const files = fs.readdirSync(`${dirTranslate}/${language}`, (files) => files);
    acc[language] = {};
    files.forEach((file) => {
        const locale = file.split('.json')[0];

        const localeTranslateJSON = fs.readFileSync(`${dirTranslate}/${language}/${locale}.json`);
        acc[language][locale] = JSON.parse(localeTranslateJSON);
    });
    return acc;
}, {});

fs.writeFileSync('./public/locales/resource.json', JSON.stringify(data));
