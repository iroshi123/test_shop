"use client";

import { useRouter } from "next/router";
import { useActionState, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DialogFooter,
} from "@/components/ui/dialog";



export function CategoryForm() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
  
   
  
    const [message, action, isPending] = useActionState(insertCategory, null);
      useEffect(() => {
        if (message?.success) {
      
          router.refresh();
        }
      }, [message]);
    
  return (
    
        <form action={action}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="name" className="text-right">
                Name
              </label>
              <input
                id="name"
                name="name"
                className="w-80 col-span-3 border border-gray-300 rounded-md p-2"
                disabled={isPending}                
              />
              <div>
              {message?.error?.fieldErrors.name && (
                <p className="text-xs text-red-500">
                  {message?.error?.fieldErrors.name}
                </p>
              )}
              </div>

              </div>

              <p><strong>CreatedAt:</strong> {data.createdAt.toDateString()}</p>
              <p><strong>UpdateAt:</strong> {data.updateAt.toDateString()}</p>     
            
                       
          
            <DialogFooter className="flex justify-self-center">
            <button type="submit">{isPending ? "Saving..." : "Submit"}
            </button>
            
          </DialogFooter>
          </div>
        </form>
     
  );
}
