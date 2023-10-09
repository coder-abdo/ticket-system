import { Status } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialState {
  status: Status[];
}
const initialState: InitialState = {
  status: [],
};

const statusSlice = createSlice({
  initialState,
  name: "status",
  reducers: {
    setStatus(state, action: PayloadAction<Status[]>) {
      state.status = action.payload;
    },
  },
});

export const { setStatus } = statusSlice.actions;
export default statusSlice.reducer;
