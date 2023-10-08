import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  isOpen: boolean;
}

const initialState: InitialState = {
  isOpen: false,
};

const editTicketModalSlice = createSlice({
  name: "editModal",
  initialState,
  reducers: {
    openEditModal(state) {
      state.isOpen = true;
    },
    closeEditModal(state) {
      state.isOpen = false;
    },
  },
});

export const { openEditModal, closeEditModal } = editTicketModalSlice.actions;
export default editTicketModalSlice.reducer;
