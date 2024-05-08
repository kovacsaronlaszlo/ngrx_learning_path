import { Actions, createEffect, ofType } from '@ngrx/effects';
import { decrement, increment } from './counter.actions';
import { tap } from 'rxjs';

export class CounterEffects {
  saveCount = createEffect(
    () =>
      this.actions$.pipe(
        ofType(increment, decrement),
        tap((action) => {
          console.log(action);
          localStorage.setItem('count', String(action.value));
        })
      ),
    { dispatch: false } // ne okozzon új eseményt, ha elkészültünk
  );

  constructor(private actions$: Actions) {}
}
