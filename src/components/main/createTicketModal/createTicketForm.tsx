import { createTicketShcema } from "@/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FormEvent } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export const CreateTicketForm = () => {
  const form = useForm<z.infer<typeof createTicketShcema>>({
    resolver: zodResolver(createTicketShcema),
    defaultValues: {
      subject: "",
      from: "hr",
      to: "it",
      description: "",
    },
  });
  const onSubmitHandler = (
    e: FormEvent,
    values: z.infer<typeof createTicketShcema>,
  ) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmitHandler)}>
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => {
            <FormItem>
              <FormLabel>
                Subject<sup>*</sup>
              </FormLabel>
              <FormControl>
                <Input placeholder="What is your Subject?" {...field} />
              </FormControl>
            </FormItem>;
          }}
        />
      </form>
    </Form>
  );
};
