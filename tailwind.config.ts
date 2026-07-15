// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
    content: [/* ...your existing content globs... */],
    theme: {
        extend: {
            keyframes: {
                marquee: {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(calc(-50% - 17px))" },
                },
            },
        },
    },
    plugins: [],
} satisfies Config;