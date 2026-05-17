"use client"

import { authClient } from '@/app/lib/auth-client';
import { Avatar, Button } from '@heroui/react';

import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';
import { CgProfile } from 'react-icons/cg';

const Navber = () => {

const { data: session } = authClient.useSession()


     const user=session?.user

     const logout=async()=>{
        await authClient.signOut()
        redirect("/")
     }

    return (
       <div className=' text-white py-3 '>
         <nav className='flex justify-between items-center max-w-7xl mx-auto' >
            <ul className='flex gap-8'>
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/destinations"}>Destinations</Link></li>
                <li><Link href={"/my-bookings"}>My Bookings</Link></li>
                <li><Link href={"/"}>Admin</Link></li>
                <li><Link href={"/add-destinations"}>Add-destinations</Link></li>
            </ul>

            <div>
                <Image src={"/assets/Wanderlast.png"} width={150} height={150} alt='logo '></Image>
            </div>
             <ul className='flex gap-8'>
                <li><Link href={"/"} className='flex gap-2 justify-center items-center mt-2 '>
                 <span><CgProfile /></span>
                 Profile</Link></li>
   


               {user ?( <>
                    <li>
                      <div className='flex gap-4 mt-1'>
                  
                       <Avatar>
                      <Avatar.Image referrerPolicy="no-referrer"alt="John Doe" src={user.image} />
                        <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                        </Avatar>
                      </div>
                    </li>
                    <Button variant='danger' className="rounded-none"><Link href={"/logout"} onClick={logout}> Logout</Link></Button>
                    </>):(<>
                     <li className='mt-2'><Link href={"/login"}> Login</Link></li>
                <li className='mt-2'><Link href={"/signup"}>SingUp</Link></li>
                   </> )

               }
            </ul>

        </nav>
       </div>
    );
};

export default Navber;

 