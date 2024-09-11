"use client";

import { useState } from "react";
import { FormEventProps } from './FormEvent.interface'

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui";

const formSchema = z.object({
  eventName: z.string().min(2).max(50),
  companiesSelected: z.object({
    name: z.string().min(2).max(30),
    id: z.string()
  })
});

export const FormEvent = (props: FormEventProps) => {
  const { companies, setNewEvent, setOnSaveNewEvent, setOpen } = props;
  const [selectedCompany, setSelectedCompany] = useState({
    name: "",
    id: ""
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      eventName: "",
      companiesSelected: {
        id: "",
        name: ""
      }
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setNewEvent(values);
    setOpen(false);
    setOnSaveNewEvent(true);
  }

  const habdleCompanyChange = (newValue: string) => {
    const selectedCompany = companies.find(company => company.name === newValue);
    if (selectedCompany) {
      setSelectedCompany({
        name: selectedCompany.name,
        id: selectedCompany.id
      });
      form.setValue("companiesSelected.name", selectedCompany.name)
      form.setValue("companiesSelected.id", selectedCompany.id)
    };

  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="eventName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Event name</FormLabel>
              <FormControl>
                <Input placeholder="Meeting..." type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="companiesSelected.name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company name</FormLabel>
              <Select onValueChange={(newValue) => {
                field.onChange(newValue)
                habdleCompanyChange(newValue)
              }} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a company" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {companies.map((company) => (
                    <SelectItem key={company.id} value={company.name}>
                      {company.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Create event</Button>
      </form>
    </Form>
  )
}
