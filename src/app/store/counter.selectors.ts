import { createSelector } from "@ngrx/store";

// selector function
export const selectCount = (state: { counter: number }) => state.counter;

export const selectDoubleCount = createSelector(
    selectCount,
    (state: number) => state * 2 
);
