import axios, { AxiosError } from "axios";
import { z } from "zod";
const fetchData = async (url: string) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (err) {
    if (err instanceof AxiosError) {
      console.error(err.message);
    }
  }
};
const addTicket = async (url: string, ticket: Ticket) => {
  try {
    await axios.post(url, ticket);
  } catch (err) {
    if (err instanceof AxiosError) {
      console.error(err.message);
    }
  }
};
const getTicket = async (url: string, id: number) => {
  try {
    const { data } = await axios.get(`${url}/${id}`);
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.message);
    }
  }
};
const createTicketShcema = z
  .object({
    subject: z.string().nonempty({ message: "required field" }),
    from: z.union([z.literal("IT"), z.literal("HR"), z.literal("Business")]),
    to: z.union([z.literal("IT"), z.literal("HR"), z.literal("Business")]),
    description: z.string().nonempty({ message: "required field" }),
  })
  .required();
export { fetchData, createTicketShcema, addTicket, getTicket };
