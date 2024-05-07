import { createReducer } from "@ngrx/store";

const initialState = 0; // lehet object, array, string, boolean, és number

export const counterReducer = createReducer(initialState);