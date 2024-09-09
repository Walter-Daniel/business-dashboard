"use client";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formContactSchema } from "./FormContact.schema";
import { z } from "zod";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui";
import { FormContactProps } from "./FormContact.interface";

export const FormContact = ({setOpen}: FormContactProps) => {
    const router = useRouter();
    const params = useParams<{companyId: string}>();
    const form = useForm<z.infer<typeof formContactSchema>>({
        resolver: zodResolver(formContactSchema),
        defaultValues: {
            name: "",
            email: "",
            role: "",
            phone: ""
        },
    });

    const onSubmit = async (values: z.infer<typeof formContactSchema>) => {
        try {
            await axios.post(`/api/company/${params.companyId}/contact`, values)
            toast({
                title: "Create contact successfully!"
            });
            setOpen(false);
            router.refresh();
        } catch (error) {
            console.log(error);
            toast({
                title: "Something went wrong.",
                variant: "destructive"
            })
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-2 gap-3">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Contact name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Francisco Lopez"
                                        type="text"
                                        {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="example@email.com"
                                    type="email"
                                    {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Phone</FormLabel>
                                <FormControl>
                                    <Input placeholder="+65 222 258" type="text" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="role"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Role</FormLabel>
                                <FormControl>
                                    <Input placeholder="Developer" type="text" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <Button type="submit">Create contact</Button>
            </form>
        </Form>
    )
}
