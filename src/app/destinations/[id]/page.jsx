import { auth } from '@/app/lib/auth';
import BookingCard from '@/componets/BookingCard';
import { DeleteAlert } from '@/componets/DeleteAlert';
import EditModal from '@/componets/EditModal';
import { headers } from 'next/headers';

import Image from 'next/image';
import React from 'react';

import { CiLocationOn } from 'react-icons/ci';
import { MdOutlineCalendarMonth } from 'react-icons/md';

const DetailsPage =async ({params}) => {
    const {token}=await auth.api.getToken({

        headers:await headers()
    })

    console.log(token)
    const {id}=await params

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/destinations/${id}`,{next:{
        revalidate:0
    },
    headers:{
        authorization:`Bearer ${token}`
    }


})
    const item= await res.json()

  
    return (
        <div className='container mx-auto pb-40'>

         
            <div className='flex justify-end gap-4 text-white'>
                <EditModal className="mb-4 " item={item}></EditModal>
                 <div className='mt-4 border rounded-full '>
                      <DeleteAlert item={item}></DeleteAlert>
                 </div>
          
            </div>
         
        
                    <div className='p-4 rounded-2xl border space-y-4 mt-10  text-white'>
                        <Image src={item.imageUrl} width={1600} height={500} alt='travel'></Image>
                      
                         <div className='flex gap-2 items-center'>
                            <CiLocationOn />
                            {item.country}
                         </div>
                         <div className='flex justify-between '>
                            <div>
                         <div className='flex  gap-4 items-center'>
                             <h3 className='font-bold text-xl'>{item.destinationName}</h3>
                            
                        </div>
                        <div className='flex gap-2 items-center'>
                            <MdOutlineCalendarMonth />
                            <p>{item.duration}/6 Nigths</p>
                        </div>
                        <h1 className='mt-10 font-bold text-2xl text-white '>Over view</h1>
                        <p>{item.description}</p>
                       </div>

                      <div>
                         <BookingCard item={item}></BookingCard>
                      </div>
                         </div>
                       {/* / */}
                    </div>
                </div>
    )
}

export default DetailsPage;