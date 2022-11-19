export type ScrollPosition = Record<string, number>;

export interface ScrollPayload {
    path: string;
    position: number;
}

export interface PageSchema {
    scroll: ScrollPosition;
}
