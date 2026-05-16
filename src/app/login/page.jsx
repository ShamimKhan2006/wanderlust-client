
"use client"
import React from 'react';

import {Button, Card, Description, FieldError, Form, Input, Label, Separator, TextField} from "@heroui/react";
import { authClient } from '../lib/auth-client';
import { toast } from 'react-toastify';
import { redirect } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';

const LoginPage = () => {
    const handle=async(e)=>{
        e.preventDefault()
        const formData=new FormData(e.currentTarget)
        const user=Object.fromEntries(formData.entries())
        const {data,error}=await authClient.signIn.email({
          email:user.email,
          password:user.password,
        })

        if(data){
          toast.success("Login Successfull")
          redirect("/")
        }
        if(error){
          toast.error(error.message,"Login failed Please try again !!")
        }
    }


    const handleGoogle=async()=>{
           await authClient.signIn.social({
        provider: "google",
      });
        }

    return (
         <div className='max-w-7xl mx-auto mt-10  text-white'>
                 <div className='text-center my-10'>
                     <h1 className='font-bold text-2xl mb-2'>Login a Account</h1>
                      <p>Start your adventure with Wanderlust</p>
                 </div>
                    <Card className='rounded-none p-4'>
                   <Form className="flex w-96 flex-col gap-4 text-white" onSubmit={handle}>
          
              <TextField
                isRequired
                name="email"
                type="email"
               
              >
                <Label>Email</Label>
                <Input placeholder="john@example.com" />
                <FieldError />
              </TextField>
            
              <TextField
            
                minLength={8}
                name="password"
                type="password"
          
              >
                <Label>Password</Label>
                <Input placeholder="Enter your password" />
                <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                <FieldError />
              </TextField>
              <div className="flex justify-center gap-2 ">
                <Button type="submit" className='w-full rounded-none bg-cyan-500'>
            
                Login
                </Button>
               
              </div>
            </Form>
             <div className='flex justify-center items-center gap-3'>
                      <Separator></Separator>
                  <div className='whitespace-nowrap text-center'>
                    Or with login
                  </div>
                     <Separator></Separator>
                 
                     </div>
            
                 <Button onClick={handleGoogle} variant='outline' className="w-full rounded-none"><FcGoogle></FcGoogle>Login with Google</Button>
        
                </Card>
            </div>
    );
};

export default LoginPage;