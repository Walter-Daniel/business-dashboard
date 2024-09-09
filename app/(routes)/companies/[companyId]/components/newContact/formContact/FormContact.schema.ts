import { z } from "zod";

export const formContactSchema = z.object({
    name: z.string().min(2).max(50),
    role: z.string().min(2).max(20),
    email: z.string().email().min(2).max(30),
    phone: z.string().min(6).max(10)
})