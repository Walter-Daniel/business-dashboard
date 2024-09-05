import { CustomIcon } from '@/components/customIcon';
import { BarChart } from 'lucide-react';
import { GraphicSuscribers } from '../graphicSuscribers';

export const SalesDistributor = () => {
  return (
    <div className='shadow-sm bg-background rounded-lg p-5'>
      <div className="flex gap-x-2 items-center">
        <CustomIcon icon={BarChart}/>
        <p className='text-xl'>Sales Distribution</p>
      </div>
      <GraphicSuscribers />
    </div>
  )
}
