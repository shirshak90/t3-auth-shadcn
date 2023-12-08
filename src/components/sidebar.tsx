"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { Icons } from "./icons";
import { SidebarNavItem } from "@/app/types";
import { cn } from "@/lib/utils";

interface DashboardNavProps {
  items: SidebarNavItem[];
}

export function Sidebar({ items }: DashboardNavProps) {
  const path = usePathname();

  if (!items?.length) {
    return <div>Sidebar</div>;
  }

  return (
    <nav className="sticky top-5 grid items-start gap-2">
      {items.map((item, index) => {
        const Icon = Icons[item.icon || "arrowright"];
        return (
          item.href && (
            <Link key={index} href={item.disabled ? "/" : item.href}>
              <span
                className={cn(
                  "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  path === item.href ? "bg-accent" : "transparent",
                  item.disabled && "cursor-not-allowed opacity-80",
                )}
              >
                <Icon className="mr-2 h-4 w-4" />
                <span className="hidden md:block">{item.title}</span>
              </span>
            </Link>
          )
        );
      })}
    </nav>
  );
}
