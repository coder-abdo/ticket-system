import { createTicketShcema } from "@/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FiUploadCloud } from "react-icons/fi";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAddTicket } from "@/hooks/useAddTicket";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useImageDrop } from "@/hooks/useDropImages";
import { DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/app/hooks";
import { closeCreatedModal } from "@/features/createModal/createModalSlice";
import { addTicketToTickets } from "@/features/tickets/ticketsSlice";
import { queryClient } from "@/app/clientQuery";
import { Ticket } from "@/types";

export const CreateTicketForm = () => {
  const { getInputProps, getRootProps } = useImageDrop();
  const { mutate } = useAddTicket();
  const dispatch = useAppDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<z.infer<typeof createTicketShcema>>({
    resolver: zodResolver(createTicketShcema),
    defaultValues: {
      subject: "",
      from: "HR",
      to: "IT",
      description: "",
    },
  });
  const onSubmitHandler = (values: z.infer<typeof createTicketShcema>) => {
    const { to, description, from, subject } = values;
    const ticket: Ticket = {
      id: ~~(Math.random() * 1000) + 1,
      description,
      to,
      from,
      subject,
      status: "Open",
    };
    mutate(ticket, {
      onSuccess() {
        dispatch(addTicketToTickets(ticket));
        queryClient.invalidateQueries({ queryKey: ["tickets"] });
        dispatch(closeCreatedModal());
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <div className="grid w-full max-w-sm items-center gap-3">
        <Label>
          Subject<sup>*</sup>
        </Label>
        <Input
          {...register("subject")}
          type="text"
          placeholder="what is your Subject?"
        />
        {errors.subject && <p>{errors.subject.message}</p>}
      </div>
      <div className="w-full gap-3 flex my-4">
        <div className="flex-1 flex flex-col gap-3">
          <Label>
            From<sup>*</sup>
          </Label>
          <Select {...register("from")}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="HR" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="HR">HR</SelectItem>
              <SelectItem value="IT">IT</SelectItem>
              <SelectItem value="Business">Business</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex-1 flex flex-col gap-3">
          <Label>
            To<sup>*</sup>
          </Label>
          <Select {...register("to")}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="IT" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="HR">HR</SelectItem>
              <SelectItem value="IT">IT</SelectItem>
              <SelectItem value="Business">Business</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex flex-col w-full gap-3">
        <Label>
          Description<sup>*</sup>
        </Label>
        <Textarea
          {...register("description")}
          placeholder="e.g. I joined Stripe’s Customer Success team to help them scale their checkout product. I focused mainly on onboarding new customers and resolving complaints."
        />
        {errors.description && <p>{errors.description.message}</p>}
      </div>
      <div
        className="flex justify-center items-center gap-1.5 border border-dotted rounded-sm border-[#D0D5DD] my-2 py-4"
        {...getRootProps()}
      >
        <FiUploadCloud className="text-xl text-darkGray" />
        <input {...getInputProps()} />
        <span className="text-primaryBlue text-sm font-semibold cursor-pointer">
          Click to upload photo
        </span>
        <span className="text-gray-600 text-sm">or darg and drop</span>
      </div>
      <DialogFooter>
        <Button
          onClick={() => dispatch(closeCreatedModal())}
          className="flex-1 capitalize bg-transparent border border-primaryBlue hover:bg-transparent text-gray-700 text-base font-semibold"
        >
          cancel
        </Button>
        <Button
          type="submit"
          className="flex-1 capitalize bg-primaryBlue text-base font-semibold text-white hover:bg-primaryBlue"
        >
          Create
        </Button>
      </DialogFooter>
    </form>
  );
};
