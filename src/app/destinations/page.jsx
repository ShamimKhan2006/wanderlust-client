import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { CiLocationOn } from 'react-icons/ci';
import { FaArrowTrendUp } from 'react-icons/fa6';
import { MdOutlineCalendarMonth } from 'react-icons/md';


const DestinationPage = async() => {

    const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER}/destinations`)
    const data= await res.json()
  
      
    return (
        <div className='grid grid-cols-4 gap-4 max-w-7xl mx-auto my-20'>
            {
                data.map(item => <div key={item._id}>
                    <div className='p-4 rounded-2xl border space-y-4'>
                        <Image src={item.imageUrl} width={500} height={500} alt='travel'className='mb-4 object-cover'></Image>
                         <div className='flex gap-2 items-center'>
                            <CiLocationOn />
                            {item.country}
                         </div>
                        <div className='flex justify-between items-center'>
                             <h3 className='font-bold text-xl'>{item.destinationName}</h3>
                             <h2> <span className='font-bold text-sm'>${item.price}</span>/person</h2>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <MdOutlineCalendarMonth />
                            <p>{item.duration}/6 Nigths</p>
                        </div>
                        <Link href={`/destinations/${item._id}`}><Button variant='secondary' className="text-blue-400"> 
                           <span> Book now</span>
                             <FaArrowTrendUp />
                            </Button></Link>
                       
                    </div>
                </div>)
            }
        </div>
    );
};

export default DestinationPage;