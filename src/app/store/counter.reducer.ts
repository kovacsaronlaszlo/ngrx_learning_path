import { createReducer, on } from '@ngrx/store';
import { decrement, increment, set } from './counter.actions';

const initialState = 0; // lehet object, array, string, boolean, és number

export const counterReducer = createReducer(
  initialState,
  on(
    increment,
    (state, action) => state + action.value /* => must always be syncronous */
  ),
  on(decrement, (state, action) => state - action.value),
  on(set, (state, action) => action.value)
);

/* export function counterReducer(state = initialState, action: CounterActions | Action) {
    if(action.type === INCREMENT) {
        return state + (action as IncremetnAction).value
    }
    //if(action.type === "[Counter] Decrement") {
    //    return state - action.value
    //}
    return state
} */
