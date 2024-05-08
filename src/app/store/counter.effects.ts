import { Actions, createEffect, ofType } from '@ngrx/effects';
import { decrement, increment, init, set } from './counter.actions';
import { of, switchMap, tap, withLatestFrom } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCount } from './counter.selectors';

@Injectable()
export class CounterEffects {
  loadCount = createEffect(
    () =>
      this.actions$.pipe(
        ofType(init),
        switchMap(() => {
          const storedCounter = localStorage.getItem('count');
          if (storedCounter) {
            return of(set({ value: +storedCounter }));
          }
          return of(set({ value: 0 }));
        })
      ) // nem kapja meg a "{ dispatch: false }", mmivel normál módon működik az effect
  );

  saveCount = createEffect(
    () =>
      this.actions$.pipe(
        ofType(increment, decrement),
        withLatestFrom(this.store.select(selectCount)),
        tap(([action, counter]) => {
          console.log(action);
          localStorage.setItem('count', String(counter));
        })
      ),
    { dispatch: false } // ne okozzon új eseményt, ha elkészültünk
  );

  constructor(
    private actions$: Actions,
    private store: Store<{ counter: number }>
  ) {}
}
