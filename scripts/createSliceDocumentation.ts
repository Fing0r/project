import path from 'path';

import { Project } from 'ts-morph';

type Layers = 'entities' | 'features' | 'widgets' | 'pages'

const layers: Layers[] = ['entities', 'features', 'widgets', 'pages'];

const sliceMap: Record<Layers, string> = {
    entities: '## Сущность',
    features: '## Фича',
    widgets: '## Виджет',
    pages: '## Страница',
};

const project = new Project({});

project.addSourceFilesAtPaths(['src/**/*.ts', 'src/**/*.md', 'src/**/*.tsx']);

const sharedUiPath = path.resolve(__dirname, '..', 'src');
const filesDirs = project.getDirectory(sharedUiPath);
const componentsDirs = filesDirs?.getDirectories();

componentsDirs?.forEach((dir) => {
    const layer = dir.getBaseName() as Layers;
    if (layers.includes(layer)) {
        const layerDirs = dir.getDirectories();
        layerDirs.forEach((layerDir) => {
            const uiCompDirs = layerDir.getDirectory(`${layerDir.getPath()}/ui`);
            const readmeFilePath = `${layerDir.getPath()}/README.md`;
            const hasReadmeFile = project.getSourceFile(readmeFilePath);

            if (hasReadmeFile) {
                return;
            }

            const readmeFile = project.createSourceFile(readmeFilePath);

            uiCompDirs?.getDirectories().forEach((uiCompDir) => {
                const uiComponentName = uiCompDir.getBaseName();
                const uiComponentText = `${uiComponentName} - ...`;
                readmeFile.insertText(
                    0,
                    (writer) => writer.writeLine(uiComponentText).writeLine(''),
                );
            });

            const sliceName = layerDir.getBaseName();
            const sliceText = `${sliceMap[layer]} ${sliceName}`;
            readmeFile.insertText(
                0,
                (writer) => writer.writeLine(sliceText).writeLine(''),
            );
        });
    }
});

project.save();

// const layersPattern = [
//     '**/entities/*/ui/**/*.*',
//     '**/features/*/ui/**/*.*',
//     '**/widgets/*/ui/**/*.*',
//     '**/pages/*/ui/**/*.*',
//     '!**/*.stories.tsx',
//     '!**/*.test.tsx',
//     '!**/*.async.tsx',
// ];
// const files = project.getSourceFiles(layersPattern);
