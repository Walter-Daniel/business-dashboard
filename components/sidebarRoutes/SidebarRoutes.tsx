import { dataGeneralSideBar, dataSupportSidebar, dataToolsSidebar } from './sidebarRoutes.data';


export const SidebarRoutes = () => {
  return (
    <div className='flex flex-col justify-between h-full'>
        <div>
            <div className='p-2 md:p-6'>
                <p className='font-bold'>General</p>
                {dataGeneralSideBar.map((item) => (
                    <p key={item.label}>{item.label}</p>
                ))}
            </div>
        </div>
    </div>
  )
}
