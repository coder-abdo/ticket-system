import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  isOpen: boolean;
}

const initialState: InitialState = {
  isOpen: false,
};

const createTicketModal = createSlice({
  name: "createTicketModal",
  initialState,
  reducers: {
    openCreatedModal(state) {
      state.isOpen = true;
    },
    closeCreatedModal(state) {
      state.isOpen = false;
    },
  },
});

export const { openCreatedModal, closeCreatedModal } = createTicketModal.actions;
export default createTicketModal.reducer;
