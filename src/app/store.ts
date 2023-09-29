import { configureStore } from "@reduxjs/toolkit";
import addModalReducer from "@/features/addModal/addModalSlice";
import statusReducer from "@/features/status/statusSlice";
import createTicketModal from "@/features/createModal/createModalSlice";
import allTicketsReudcer from "@/features/tickets/ticketsSlice";
export const store = configureStore({
  reducer: {
    addModal: addModalReducer,
    status: statusReducer,
    createTicketModal: createTicketModal,
    allTickets: allTicketsReudcer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;
