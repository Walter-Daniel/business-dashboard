import React from 'react';
import { CardSummaryProps } from './cardSummary.interface';
import { CustomIcon } from '@/components/customIcon';
import { CustomTooltip } from '@/components/customTooltip/CustomTooltip';

export const CardSummary = (props:CardSummaryProps) => {
  const { average, icon, title, tooltipText, total } = props;
  return (
    <div className='shadow-sm bg-background rounded-lg p-5 py-3 hover:shadow-lg transition'>
      <div className='flex justify-between'>
        <CustomIcon icon={icon}/>
        {title}
      </div>
      <CustomTooltip 
        content={tooltipText}
      />
    </div>
  )
}
