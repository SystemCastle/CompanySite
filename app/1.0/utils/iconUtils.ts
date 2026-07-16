// utils/iconUtils.ts

export const iconUrl = (value: string): string => {
    if (value.startsWith("http://") || value.startsWith("https://") || value.startsWith("/")) {
        return value;

    }

    return `https://cdn.simpleicons.org/${value}`;
};

export const iconUrlWithColor = (slug: string, color?: string): string => {
    return color ? `https://cdn.simpleicons.org/${slug}/${color}` : iconUrl(slug);
};


export const iconUrlWithSize = (slug: string, size?: number): string => {
    return size ? `https://cdn.simpleicons.org/${slug}/${size}` : iconUrl(slug);
};


export const iconUrlWithOptions = (slug: string, color?: string, size?: number): string => {
    let url = `https://cdn.simpleicons.org/${slug}`;
    if (color) url += `/${color}`;
    if (size) url += `/${size}`;
    return url;
};