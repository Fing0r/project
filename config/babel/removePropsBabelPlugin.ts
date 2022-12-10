import { PluginItem } from '@babel/core';

export default function (): PluginItem {
    return {
        visitor: {
            // Program и path.traverse тут не обязательны, в данном варианте можно было сделать лишь с JSXIdentifier добавив state в аргументы
            Program(path, state) {
                const attributesToRemove = state.opts.props ?? [];

                path.traverse({
                    JSXIdentifier(path) {
                        const currentNodeName = path.node.name;

                        if (attributesToRemove.includes(currentNodeName)) {
                            path.parentPath.remove();
                        }
                    },
                });
            },
        },
    };
}
