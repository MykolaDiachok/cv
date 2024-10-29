import { Directive, OnDestroy } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';

@Directive()
export abstract class AutoUnsubscribe implements OnDestroy {
  private destroy$ = new Subject<void>();

  protected safeSubscribe<T>(observable: Observable<T>, next: (value: T) => void): void {
    observable.pipe(takeUntil(this.destroy$)).subscribe(next);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
