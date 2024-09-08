"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { companyFormSchema } from "./CompanyFormSchema";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CompanyInformationProps } from "../companyInformation/companyInformation.interface";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { UploadButton } from "@/utils/uploadthing";
import { Button } from "@/components/ui";


export const CompanyForm = (props: CompanyInformationProps) => {
    const {company} = props;
    const router = useRouter();

    const [photoUploaded, setPhotoUploaded] = useState(false)

    const form = useForm<z.infer<typeof companyFormSchema>>({
        resolver: zodResolver(companyFormSchema),
        defaultValues: {
            name: company.name,
            country: company.country,
            website: company.website,
            phone: company.phone,
            cif: company.cif,
            profileImage: company.profileImage,
            description: company.description
        },
    })

    const onSubmit = async(values: z.infer<typeof companyFormSchema>) => {
        console.log(values)
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
                                <FormLabel>Company name</FormLabel>
                                <FormControl>
                                    <Input  placeholder="Company name..." 
                                    type="text" 
                                    {...field}/>
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                            control={form.control}
                            name="country"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Country</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select company country" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="argentina">
                                                Argentina
                                            </SelectItem>
                                            <SelectItem value="brasil">
                                                Brasil
                                            </SelectItem>
                                            <SelectItem value="chile">
                                                Chile
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="website"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Website</FormLabel>
                                    <FormControl>
                                        <Input placeholder="http://www.page.com" type="text" {...field} />
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
                                        <Input placeholder="+652222458" type="text" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="cif"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>CIF</FormLabel>
                                    <FormControl>
                                        <Input placeholder="B-1234232" type="text" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                         <FormField
                            control={form.control}
                            name="profileImage"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Profile Image</FormLabel>
                                    <FormControl>
                                        {photoUploaded ? (
                                            <p className="text-sm">Image uploaded!</p>
                                        ) : (
                                            <UploadButton
                                                className="bg-slate-600/20 text-slate-800 rounded-lg outline-dotted outline-2"
                                                {...field}
                                                endpoint="profileImage"
                                                onClientUploadComplete={(res) => {
                                                    form.setValue("profileImage", res?.[0].url);
                                                    toast({
                                                        title: "Image uploaded successfully!"
                                                    })
                                                    setPhotoUploaded(true);
                                                }}
                                                onUploadError={(error: Error) => {
                                                    toast({
                                                        variant: "destructive",
                                                        title: "Error uploading photo."
                                                    })
                                                }}
                                            />
                                        )}
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                </div>
                <Button type="submit">Edit Company</Button>
            </form>
        </Form>
    )
}
