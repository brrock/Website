"use client";

import { siteConfig } from "@/config/site";
import { Icons } from "./icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function MainNav() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="font-bold">{siteConfig.name}</span>
      </Link>
      <Link
        href="https://techblog.benjyross.xyz"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block text-foreground/60 ",
        )}
      >
        TechBlog
      </Link>
      <Link
        href="/about"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block",
          pathname === "/about" ? "text-foreground" : "text-foreground/60"
        )}
      >
        About
      </Link>
    </nav>
  );
}
