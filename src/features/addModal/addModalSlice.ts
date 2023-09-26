import { createSlice } from "@reduxjs/toolkit";

interface addModal {
  isOpen: boolean;
}

const initialState: addModal = {
  isOpen: false,
};

export const addModalSlice = createSlice({
  name: "addModal",
  initialState,
  reducers: {
    openModal(state) {
      state.isOpen = true;
    },
    closeModal(state) {
      state.isOpen = false;
    },
  },
});
export const { openModal, closeModal } = addModalSlice.actions;
export default addModalSlice.reducer;
