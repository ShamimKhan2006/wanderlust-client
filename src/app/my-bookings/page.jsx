import React from 'react';
import { auth } from '../lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import { Button } from '@heroui/react';

import { CencelModal } from '@/componets/CencelModal';


const MyBookingsPage =async () => {
    const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
})
   
const user=session?.user
   const {token}=await auth.api.getToken({
    headers:await headers()
     
   })

    const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER}/bookings/${user?.id}`,{
        headers:{
            authorization:`Bearer ${token}`
        }
    })
    const data =await res.json()


         if(!data){
            
         }

    return (
        <div className='w-8/12 mx-auto'>
            <h1 className='font-bold text-2xl'>My Bookings</h1>
            <p>Manage and view your upcoming travel plans</p>

             {
                data.map(item => <div key={item._id} className='min-w-6xl border mt-3 flex gap-4 p-6'>
                    <div>
                        <Image src={item.imageUrl} width={400} height={400} alt='logo'/>
                    </div>
                    <div className='space-y-4 mt-10'>
                        <h1 className='font-bold text-2xl'>{item.destinationName}</h1>
                        <p>DepartureDate :  {new Date(item.departureDate).toLocaleDateString()}</p>
                         <p className='font-bold text-xl text-cyan-500'>${item.price}</p>
                         <p>{item.id}</p>
                    </div>

                   <CencelModal id={item._id}></CencelModal>
                </div>)
             }    
        
        </div>
    );
};

export default MyBookingsPage;