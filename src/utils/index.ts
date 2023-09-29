import axios from "axios";
import { z } from "zod";
const fetchData = async (url: string) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    }
  }
};
const createTicketShcema = z
  .object({
    subject: z.string().nonempty(),
    from: z.union([z.literal("it"), z.literal("hr"), z.literal("business")]),
    to: z.union([z.literal("it"), z.literal("hr"), z.literal("business")]),
    description: z.string().nonempty(),
  })
  .required();
export { fetchData, createTicketShcema };
