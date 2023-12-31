import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { appDispatch, RootState } from "@/app/store";
export const useAppDispatch: () => appDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
