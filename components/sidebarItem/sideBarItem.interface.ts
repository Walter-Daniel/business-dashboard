import { LucideIcon } from "lucide-react";

export interface SidebarItemsProps {
    item: {
        label: string;
        icon: LucideIcon;
        href: string;
    },
    key: string;
}