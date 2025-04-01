import { Pipe, PipeTransform } from '@angular/core';
import { LocaleService } from '../services/locale.service';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'localeDate',
  pure: false,
})
export class LocaleDatePipe implements PipeTransform {
  private locale: string = 'en';

  constructor(
    private datePipe: DatePipe,
    private localeService: LocaleService,
  ) {
    this.localeService.currentLocale$.subscribe((locale) => {
      this.locale = locale;
    });
  }

  transform(value: any, format: string = 'longDate'): any {
    return this.datePipe.transform(value, format, undefined, this.locale);
  }
}
