"use server"

import { PrismaClient } from "@prisma/client";
import { z } from "zod";


const prisma = new PrismaClient();



export async function insertCategory(state: unknown, formData: FormData) {
  try {

    const categorySchema = z.object({
        Name: z.string().min(1, { message: "Name cannot be empty" }),
       

    });

    const result = categorySchema.safeParse(Object.fromEntries(formData));

    if (!result.success) {

      console.log(result.error.flatten());

      return {
        sucess: false,
        message: "Error in your input data",
        error: result.error.flatten(),
      };
    }
    
    const category = await prisma.category.create({
      data: {
        Name: formData.get("Name") as string,       
        
      },
    });

    console.log("Category added successfully:", category);
    return { success: true, message: "Category added successfully!", category };
  } catch (error) {
    console.error("Error adding category:", error);
    return { success: false, message: "Failed to add category." };
  } finally {
    await prisma.$disconnect();
  }
}
