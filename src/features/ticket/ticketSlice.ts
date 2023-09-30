import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ticketsSlice from "../tickets/ticketsSlice";

interface InitialState {
  ticket: Ticket;
}
const initialState: InitialState = {
  ticket: {
    to: "HR",
    from: "HR",
    status: "Open",
    subject: "",
    description: "",
    id: 1,
  },
};

const ticketSlice = createSlice({
  initialState,
  name: "ticket",
  reducers: {
    setTicket(state, action: PayloadAction<Ticket>) {
      state.ticket = action.payload;
    },
  },
});
export const { setTicket } = ticketSlice.actions;
export default ticketSlice.reducer;
