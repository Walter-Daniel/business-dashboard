import React from 'react'
import { CompanyInformationProps } from './companyInformation.interface'
import Image from 'next/image';
import { User } from 'lucide-react';
import { CompanyForm } from '../companyForm';

export const CompanyInformation = (props: CompanyInformationProps) => {
  const { company } = props;
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10 gap-y-4'>
      <div className='p-4 rounded-lg shadow-md bg-background hover:shadow-lg'>
        <div>
          <Image
            src={company.profileImage}
            alt={company.name}
            width={50}
            height={50}
            className='mb-3 rounded-lg'
          />
          <CompanyForm company={company}/>
        </div>
      </div>
      <div className='rounded-lg bg-background shadow-md hover:shadow-lg p-4 h-min'>
        <div className='flex items-center justify-between gap-x-2'>
          <div className='flex items-centergap-x-2'>
            <User className='h-5 w-5'/>
            Contacts
          </div>
          <div>
            <p>Todo new contact</p>
          </div>
        </div>
        <p>List contacts...</p>
      </div>
    </div>
  )
}
