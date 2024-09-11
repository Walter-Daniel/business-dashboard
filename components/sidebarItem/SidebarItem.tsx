'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

import { SidebarItemsProps } from './sideBarItem.interface';

export const SidebarItem = (props: SidebarItemsProps) => {
    const { item } = props;

    const pathname = usePathname();
    const activePath = pathname === item.href;
  return (
    <Link
        href={item.href}
        className={cn(`flex gap-x-2 mt-2 light:text-slate-700 dark:text-white text-sm items-center hover:bg-slate-300/20 p-2 rounded-lg cursor-pointer transition-all`,
            activePath && 'bg-slate-400/20 font-semibold'
        )}
    >
        <item.icon className='h-5 w-5' strokeWidth={1} />
        {item.label}
    </Link>
  )
}
