 'use client'

import { Input, Label, TextField,Select, ListBox, TextArea, Button } from '@heroui/react';
import React from 'react';
import { authClient } from '../lib/auth-client';

const addDestinationForm = () => {
  
    const handle=async( e)=>{
          e.preventDefault()
        const formData=new FormData(e.currentTarget)
        const destination=Object.fromEntries(formData.entries())
        const {data:tokenData}=await authClient.token()
        console.log("tokenData",tokenData)
      const res=  await fetch(`${process.env.NEXT_PUBLIC_SERVER}/destinations`,{
            method:"POST",
            headers:{
                "content-type":"application/json",
                authorization:`Bearer ${tokenData?.token}`
                 
            },
            body:JSON.stringify(destination)
        })
         const data=await res.json()

    }
                           

    return (
        <div className='max-w-7xl mx-auto text-white'>

           <h1 className='mt-30 my-10 text-center font-bold text-2xl'>Add Destinations Form</h1>
            <form onSubmit={handle}
            className="p-10 space-y-8 border shadow-sm bg-[#5603ad] text-white"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
              {/* Destination Name */}
              <div className="md:col-span-2">
                <TextField name="destinationName" isRequired>
                  <Label>Destination Name</Label>
                  <Input placeholder="Bali Paradise" className="rounded-2xl" />
        
                </TextField>
              </div>

              {/* Country */}
              <TextField name="country" isRequired>
                <Label>Country</Label>
                <Input placeholder="Indonesia" className="rounded-2xl" />
      
              </TextField>

              {/* Category - Updated Select Component */}
              <div>
                <Select
                  name="category"
                  isRequired
                  className="w-full"
                  placeholder="Select category"
                >
                  <Label>Category</Label>
                  <Select.Trigger className="rounded-2xl">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="Beach" textValue="Beach">
                        Beach
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Mountain" textValue="Mountain">
                        Mountain
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="City" textValue="City">
                        City
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Adventure" textValue="Adventure">
                        Adventure
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Cultural" textValue="Cultural">
                        Cultural
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Luxury" textValue="Luxury">
                        Luxury
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

              {/* Price */}
              <TextField name="price" type="number" isRequired>
                <Label>Price (USD)</Label>
                <Input
                  type="number"
                  placeholder="1299"
                  className="rounded-2xl"
                />
               </TextField>

              {/* Duration */}
              <TextField name="duration" isRequired>
                <Label>Duration</Label>
                <Input
                  placeholder="7 Days / 6 Nights"
                  className="rounded-2xl"
                />
        
              </TextField>

              {/* Departure Date */}
              <div className="md:col-span-2">
                <TextField name="departureDate" type="date" isRequired>
                  <Label>Departure Date</Label>
                  <Input type="date" className="rounded-2xl" />
      
                </TextField>
              </div>

              {/* Image URL - Removed preview */}
              <div className="md:col-span-2">
                <TextField name="imageUrl" isRequired>
                  <Label>Image URL</Label>
                  <Input
                    type="url"
                    placeholder="https://example.com/bali-paradise.jpg"
                    className="rounded-2xl"
                  />
      
                </TextField>
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <TextField name="description" isRequired>
                  <Label>Description</Label>
                  <TextArea
                    placeholder="Describe the travel experience..."
                    className="rounded-3xl"
                  />
             
                </TextField>
              </div>
            </div>

            {/* Buttons */}

            <Button
              type="submit"
              variant="outline"
                
              className=" rounded-none w-full bg-cyan-500 text-white"
            >
                Add destinations 
           
            </Button>
          </form>
        </div>
    );
};

export default addDestinationForm;