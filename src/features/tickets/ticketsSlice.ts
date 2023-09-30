import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  tickets: Ticket[];
}
const initialState: InitialState = {
  tickets: [],
};
const ticketsSlice = createSlice({
  initialState,
  name: "tickets",
  reducers: {
    getAllTickets(state, action: PayloadAction<Ticket[]>) {
      state.tickets = action.payload;
    },
    addTicketToTickets(state, action: PayloadAction<Ticket>) {
      state.tickets.push(action.payload);
    },
  },
});
export const { getAllTickets, addTicketToTickets } = ticketsSlice.actions;
export default ticketsSlice.reducer;
