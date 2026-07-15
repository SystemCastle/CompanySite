// types.ts
export type TechItem = {
    name: string;
    logoSrc: string;
};

export type TechRow = {
    title: string;
    items: TechItem[];
    reverse?: boolean;
};