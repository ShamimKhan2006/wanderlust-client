"use client"
import React from 'react';

import {Button, Card, Description, FieldError, Form, Input, Label, Separator, TextField} from "@heroui/react";

import { toast } from 'react-toastify';
import { redirect } from 'next/navigation';
import { FcGoogle } from "react-icons/fc";
import { authClient } from '../lib/auth-client';




const SignUpPage = () => {
    const handle=async(e)=>{
        e.preventDefault()
        const formData=new FormData(e.currentTarget)
        const user=Object.fromEntries(formData.entries())
        console.log(user)

        const { data, error } = await authClient.signUp.email({
          name:user.name,
          email:user.email,
          image:user.image,
          password:user.password
        })

        if(data){
        toast.success(" SignUp Successfull")
        redirect("/login")
        
        }
        if(error){
          toast.error( error.message,"Signup failed !")
        }
    }

    const handleGoogle=async()=>{
       await authClient.signIn.social({
    provider: "google",
  });
    }
    
    return (
    <div className='max-w-7xl mx-auto mt-10'>
         <div className='text-center my-10'>
             <h1 className='font-bold text-2xl mb-2'>Create a Account</h1>
              <p>Start your adventure with Wanderlust</p>
         </div>
            <Card className='rounded-none p-4'>
           <Form className="flex w-96 flex-col gap-4" onSubmit={handle}>
      <TextField
        isRequired
        name="name"
        type="text"
     
      >
        <Label>Name</Label>
        <Input placeholder="Enter Your name "/>
        <FieldError />
      </TextField>
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
        isRequired
        name="image"
        type="url"
        
      >
        <Label>Image url</Label>
        <Input placeholder="Enter your image url" />
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
        <Button type="submit" className='w-full rounded-none'>
  
          Sign up
        </Button>
       
      </div>
    </Form>
  
      
         <div className='flex justify-center items-center gap-3'>
          <Separator></Separator>
      <div className='whitespace-nowrap text-center'>
        Or with sign up
      </div>
         <Separator></Separator>
     
         </div>

     <Button onClick={handleGoogle} variant='outline' className="w-full rounded-none"><FcGoogle></FcGoogle>Sign up with Google</Button>

        </Card>
    </div>
    );
};

export default SignUpPage;