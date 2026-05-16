"use client";

import { authClient } from "@/app/lib/auth-client";
import { TrashBin } from "@gravity-ui/icons";
import {AlertDialog, Button} from "@heroui/react";

export function CencelModal({id}) {
    // console.log("id.....",id)
    const cencelHandle=async()=>{
         const {data:tokenData}=await authClient.token()
         console.log("token",tokenData)

        const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER}/bookings/${id}`,{
            
            method:"DELETE",
            headers:{
                "content-type":"application/json",
                authorization:`Bearer ${tokenData?.token}`          },

         
        })
      await  res.json()

      window.location.reload()
    }

  return (
    <AlertDialog>
 <Button variant='outline' className={"text-red-500 border-red-500 rounded-none ml-130"}> <TrashBin></TrashBin>Cencel</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-400px">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Cencel project permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
             
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button slot="close" variant="danger" onClick={cencelHandle}>
                Delete 
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}