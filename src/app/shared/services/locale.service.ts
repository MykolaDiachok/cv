import { Inject, Injectable, Injector, LOCALE_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocaleService {
  private currentLocale = new BehaviorSubject<string>('en');

  currentLocale$ = this.currentLocale.asObservable();

  private localeId: string = 'en';

  constructor(private injector: Injector) {
    // Delay the injection of LOCALE_ID to avoid circular dependency
    setTimeout(() => {
      this.localeId = this.injector.get(LOCALE_ID);
      this.currentLocale.next(this.localeId);
    });
  }

  setLocale(locale: string) {
    this.currentLocale.next(locale);
  }

  getLocale(): string {
    return this.currentLocale.value;
  }
}
