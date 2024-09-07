'use client';

import { CustomIcon } from '@/components/customIcon';
import { Percent } from 'lucide-react';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Tooltip,
  Legend
} from 'recharts';

const data = [
  {
    name: "Website",
    value: 134,
    fill: "#8884d8"
  },
  {
    name: "Instagram",
    value: 554,
    fill: "#00C49f"
  },
  {
    name: "Other",
    value: 344,
    fill: "#FFBB28"
  }
]

export const TotalSuscriber = () => {
  return (
    <div className='mb-4 lg:mb-0 shadow-sm bg-background rounded-lg p-5 w-full lg:w-96 hover:shadow-lg transition'>
      <div className='flex gap-x-2 items-center mb-4'>
        <CustomIcon icon={Percent} />
        <p className='text-xl'>Total Suscribers</p>
      </div>
      <div className='w-full h-[200px] p-5'>
        <ResponsiveContainer aspect={1} maxHeight={200} >
          <PieChart>
            <Pie 
              dataKey="value"
              data={data}
              outerRadius={80}
              labelLine={false}
            />
            <Tooltip />
            <Legend/>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
