
import DestinationPage from '@/app/destinations/page';
import { Button } from '@heroui/react';
import React from 'react';
import DestinationCard from './DestinationCard';
import Link from 'next/link';

const Featured = async () => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/featured`,{
    cache: "no-store",
  });

  const destinations = await res.json();

  return (
    <div className='max-w-7xl mx-auto'>

      <div className='flex justify-between items-center text-white'>

        <div className='text-center my-10'>
          <h1 className='font-bold text-3xl mb-4'>
            Featured Destinations
          </h1>

          <p>
            Handpicked travel experiences for adventure seekers
          </p>
        </div>

        <div>
         <Link href={"/destinations"}> <Button
            variant='outline'
            className='text-sky-400 border-sky-400 rounded-none'
          >
            All destinations
          </Button></Link>
        </div>

      </div>

      <div className='grid grid-cols-4 gap-4 max-w-10xl text-white'>

       {
        destinations.map(destination => <DestinationCard key={destination._id} item={destination}></DestinationCard>)
       }

      </div>
    </div>
  );
};

export default Featured;