"use client"

import {Envelope} from "@gravity-ui/icons";
import {Button, Input, Label, Modal, Surface, TextField,Select, ListBox, TextArea} from "@heroui/react";
import { BiEdit } from "react-icons/bi";
const EditModal = ({item}) => {
    console.log("item",item)

    const onSubmit= async(e)=>{
        e.preventDefault()

        const formData=new FormData(e.currentTarget)
        const data=Object.fromEntries(formData.entries())
        console.log('data',data)

       const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/destinations/${item._id}`, {
        method:"PATCH",
        headers:{
          'content-type':"application/json",
        },
        body:JSON.stringify(data)
       })
       const result=await res.json()
       console.log(result)
        
    }

      


    return (
        <div className="text-white">
             <Modal>
        <Button className="mt-4 border" variant="Outline"   ><BiEdit></BiEdit> Edit</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-xl">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Envelope className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Edit destinations</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Fill out the form below and get back to you. The modal adapts automatically
                when the keyboard appears on mobile.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                   <form onSubmit={onSubmit}
                          className="p-10 space-y-8 border"
                        >


                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Destination Name */}
                            <div className="md:col-span-2">
                              <TextField name="destinationName" isRequired defaultValue={item.destinationName}>
                                <Label>Destination Name</Label>
                                <Input placeholder="Bali Paradise" className="rounded-2xl" />
                      
                              </TextField>
                            </div>
              
                            {/* Country */}
                            <TextField name="country" isRequired defaultValue={item.country}>
                              <Label>Country</Label>
                              <Input placeholder="Indonesia" className="rounded-2xl" />
                    
                            </TextField>
              
                            {/* Category - Updated Select Component */}
                            <div>
                              <Select defaultValue={item.category}
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
                            <TextField name="price" type="number" isRequired   defaultValue={item.price}>
                              <Label>Price (USD)</Label>
                              <Input
                                type="number"
                                placeholder="1299"
                                className="rounded-2xl"
                              />
                             </TextField>
              
                            {/* Duration */}
                            <TextField name="duration" isRequired defaultValue={item.duration}>
                              <Label>Duration</Label>
                              <Input
                                placeholder="7 Days / 6 Nights"
                                className="rounded-2xl"
                              />
                      
                            </TextField>
              
                            {/* Departure Date */}
                            <div className="md:col-span-2">
                              <TextField name="departureDate" type="date" isRequired defaultValue={item.departureDate}>
                                <Label>Departure Date</Label>
                                <Input type="date" className="rounded-2xl" />
                    
                              </TextField>
                            </div>
              
                            {/* Image URL - Removed preview */}
                            <div className="md:col-span-2">
                              <TextField name="imageUrl" isRequired defaultValue={item.imageUrl}>
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
                              <TextField name="description" isRequired defaultValue={item.description}>
                                <Label>Description</Label>
                                <TextArea
                                  placeholder="Describe the travel experience..."
                                  className="rounded-3xl"
                                />
                           
                              </TextField>
                            </div>
                          </div>
              
                          {/* Buttons */}
              
                           <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button slot="close" type="submit">Submit</Button>
            </Modal.Footer>
                        </form>
              </Surface>
            </Modal.Body>
           
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
        </div>
    );
};

export default EditModal; 