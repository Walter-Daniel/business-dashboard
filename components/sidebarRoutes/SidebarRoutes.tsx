'use client';

import { SidebarItem } from '../sidebarItem';
import { Button } from '../ui';
import { Separator } from '../ui/separator';
import { dataGeneralSideBar, dataSupportSidebar, dataToolsSidebar } from './sidebarRoutes.data';

export const SidebarRoutes = () => {
  return (
    <div className='flex flex-col justify-between h-full'>
      <div>
        <div className='p-2 md:p-6'>
          <p className='font-bold text-slate-500 mb-2'>General</p>
          {dataGeneralSideBar.map((item) => (
            <SidebarItem key={item.label} item={item} />
          ))}
        </div>

        <Separator />

        <div className='p-2 md:p-6'>
          <p className='font-bold text-slate-500 mb-2'>Tools</p>
          {dataToolsSidebar.map((item) => (
            <SidebarItem key={item.label} item={item} />
          ))}
        </div>

        <Separator />

        <div className='p-2 md:p-6'>
          <p className='font-bold text-slate-500 mb-2'>Support</p>
          {dataSupportSidebar.map((item) => (
            <SidebarItem key={item.label} item={item} />
          ))}
        </div>
      </div>
      <div>
        <div className='text-center p-6'>
          <Button variant="outline" className='w-full'>
            Updrade Plan
          </Button>
        </div>

        <Separator />

        <footer className='mt-3 p-3 text-center'>
          2024. All rigths reserved
        </footer>
      </div>
    </div>
  )
}
