import path from 'path';

import { Project } from 'ts-morph';

function isAbsolute(value: string) {
    const layers = ['app', 'shared', 'entities', 'features', 'widgets', 'pages'];
    return layers.some((layer) => value.startsWith(layer));
}

const project = new Project({});

project.addSourceFilesAtPaths(['src/**/*.ts', 'src/**/*.tsx']);

const files = project.getSourceFiles();

const sharedUiPath = path.resolve(__dirname, '..', 'src', 'shared', 'ui');
const filesDirs = project.getDirectory(sharedUiPath);
const componentsDirs = filesDirs?.getDirectories();

componentsDirs?.forEach((directory) => {
    const indexFilePath = `${directory.getPath()}/index.ts`;
    const indexFile = directory.getSourceFile(indexFilePath);

    if (!indexFile) {
        // const filesInFolder = directory.getSourceFiles([
        //     '**/*.tsx',
        //     '!**/*.stories.tsx',
        //     '!**/*.test.tsx',
        // ]);
        //
        // let content = '';

        // filesInFolder?.forEach((component) => {
        //     const folderLen = directory.getPath().length;
        //     const moduleName = component.getBaseNameWithoutExtension();
        //     const modulePath = `.${component.getFilePath().slice(folderLen, -4)}`;
        //     content += `export {${moduleName}} from "${modulePath}"\n`;
        // });
        const fileText = `export { ${directory.getBaseName()} } from './${directory.getBaseName()}';`;
        project.createSourceFile(indexFilePath, fileText);

        // directory.createSourceFile(
        //     indexFilePath,
        //     content,
        //     { overwrite: true },
        // );
    }
});

files.forEach((file) => {
    const importDeclarations = file.getImportDeclarations();
    importDeclarations.forEach((importDeclaration) => {
        const value = importDeclaration.getModuleSpecifierValue().replace('@/', '');
        const segments = value.split('/');
        const isShared = segments?.[0] === 'shared';
        const isUi = segments?.[1] === 'ui';

        if (isAbsolute(value) && isShared && isUi) {
            const pathToIndex = value.split('/').slice(0, 3).join('/');
            importDeclaration.setModuleSpecifier(`@/${pathToIndex}`);
        }
    });
});

project.save();
