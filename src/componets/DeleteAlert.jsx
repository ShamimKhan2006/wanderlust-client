"use client";

import { TrashBin } from "@gravity-ui/icons";
import {AlertDialog, Button} from "@heroui/react";
import { redirect } from "next/navigation";


export function DeleteAlert({item}) {
 const handle=async()=>{
    const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER}/destinations/${item._id}`,{
      method:'DELETE',
      headers:{"content-type":"application/json"}
    })
       
    const data= await res.json()
    console.log(data)

    redirect("/destinations")
 }

  return (
    <AlertDialog>
      <Button className='text-red-400' variant="Outline"><TrashBin></TrashBin> Delete </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-400px">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete destination permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{item.destinationName}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button slot="close" variant="danger" onClick={handle}>
                Delete 
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}