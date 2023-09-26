import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IStatue {
  name: "Open" | "InProgress" | "Closed";
  id: number;
}
interface InitialState {
  status: IStatue[];
}
const initialState: InitialState = {
  status: [],
};

const statusSlice = createSlice({
  initialState,
  name: "status",
  reducers: {
    setStatus(state, action: PayloadAction<IStatue[]>) {
      state.status = action.payload;
    },
  },
});

export const { setStatus } = statusSlice.actions;
export default statusSlice.reducer;
