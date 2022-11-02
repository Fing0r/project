export type Mods = Record<string, boolean | string | undefined>;

const classNames = (
    cls: string,
    mods: Mods = {},
    additional: (string | undefined)[] = [],
) => [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
        .filter(([_, value]) => Boolean(value))
        .map(([className]) => className) ?? [],
].join(' ');

export { classNames };
