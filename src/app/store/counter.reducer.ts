import { createReducer, on } from '@ngrx/store';
import { decrement, increment } from './counter.actions';

const initialState = 0; // lehet object, array, string, boolean, és number

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1)
);

/* export function counterReducer(state = initialState) {
    return state
} */
