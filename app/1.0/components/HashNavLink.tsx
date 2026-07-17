"use client";

import type { MouseEvent, ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type HashNavLinkProps = {
    href: string;
    className?: string;
    children: ReactNode;
    onClick?: () => void;
    scrollOffset?: number;
};

function normalizePath(path: string) {
    if (!path || path === "/") return "/";
    return path.endsWith("/") ? path.slice(0, -1) : path;
}

export default function HashNavLink({
    href,
    className,
    children,
    onClick,
    scrollOffset = 30,
}: HashNavLinkProps) {
    const pathname = usePathname();

    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
        const [rawPath, rawHash] = href.split("#");
        const hash = rawHash?.trim();

        if (!hash) {
            onClick?.();
            return;
        }

        const targetPath = normalizePath(rawPath || pathname || "/");
        const currentPath = normalizePath(pathname || "/");

        if (targetPath !== currentPath) {
            onClick?.();
            return;
        }

        event.preventDefault();
        onClick?.();

        const element = document.getElementById(hash);
        if (!element) return;

        const top = element.getBoundingClientRect().top + window.scrollY - scrollOffset;
        window.scrollTo({
            top: Math.max(top, 0),
            behavior: "smooth",
        });

        const nextUrl = `${targetPath}${window.location.search}#${hash}`;
        window.history.replaceState(window.history.state, "", nextUrl);
    };

    return (
        <Link href={href} scroll={false} onClick={handleClick} className={className}>
            {children}
        </Link>
    );
}
