import { List } from 'lucide-react';
import { CustomIcon } from '@/components/customIcon';
import { TableIntegration } from '../tableIntegration';

export const ListIntegration = () => {
  return (
    <div className='shadow-sm bg-background rounded-lg p-5 flex-1'>
        <div className='flex gap-x-2 items-center mb-2'>
            <CustomIcon icon={List} />
            <p className='text-xl'>List of integration</p>
        </div>
        <TableIntegration />
    </div>
  )
}
