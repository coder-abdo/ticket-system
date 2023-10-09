import { createSlice } from "@reduxjs/toolkit";


interface InitialState {
  isOpen: boolean;
}

const initialState:InitialState = {
  isOpen: false
}

const deleteModalSlice = createSlice({
  name: "deleteModal",
  initialState,
  reducers: {
    openDeleteModal(state){
      state.isOpen = true
    },
    closeDeleteModal(state){
      state.isOpen = false
    }
  }
})

export const {openDeleteModal, closeDeleteModal} = deleteModalSlice.actions
export default deleteModalSlice.reducer
