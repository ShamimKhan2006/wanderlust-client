'use client'

import { authClient } from '@/app/lib/auth-client';
import { ArrowChevronRight } from '@gravity-ui/icons';
import { Button, Card, DateField, Label } from '@heroui/react';

import React, { useState } from 'react';
import toast from 'react-hot-toast';


const BookingCard = ({item}) => {
    // console.log(item)
const [value,setValue]=useState(null)
const { data: session } = authClient.useSession()
    //  console.log("sesstion",session)
     
    const user=session?.user

    if(!user){
       return("please login first")
    }
const { _id,price,imageUrl,destinationName}=item
    const handle= async ()=>{
         const bookings={
            price,
            userId:user.id,
            userName:user.name,
            userImage:user.image,
            imageUrl,
            destinationName,
           
            departureDate : new Date(value),
            id:_id
            

         }

         const {data:tokenData}=await authClient.token()
         console.log(tokenData)
       
    const res = await fetch  (`${process.env.NEXT_PUBLIC_SERVER}/bookings`,{
    method:"POST",
    headers:{
        "content-type":"application/json",
        authorization: `Bearer ${tokenData?.token}`
    },
    body:JSON.stringify(bookings)

     
  }) 
   const result=  await res.json()
    toast.success("Booking Success")
   

    }


    return (
        <Card className='border rounded-none text-left px-10 shadow-sm bg-[#00b4d8]'>
         <p>starting from</p> 
         <h1 className='text-cyan-500 font-bold text-2xl'>${price}</h1>
         <p>per person</p> 
          <DateField className="w-full rounded-none" name="date" onChange={ setValue}>
      <Label> Departure Date</Label>
      <DateField.Group>
        <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
      </DateField.Group>
    </DateField> 
    <Button onClick={handle} className={"w-full rounded-none text-white"}><ArrowChevronRight></ArrowChevronRight> Booking Now</Button>       
        </Card>
    );
};

export default BookingCard;
