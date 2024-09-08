import React from 'react'
import { CompanyInformationProps } from './companyInformation.interface'

export const CompanyInformation = (props: CompanyInformationProps) => {
    const {company} = props;
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10'>CompanyInformation</div>
  )
}
