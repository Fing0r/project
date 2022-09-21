type Mods = Record<string, boolean | string>;

const classNames = (cls: string, mods?: Mods, additional?: string[]) => [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
        .filter(([_, value]) => Boolean(value))
        .map(([className]) => className),
].join(' ');

export { classNames };
