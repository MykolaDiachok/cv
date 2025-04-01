import { LocaleService } from '../services/locale.service';

export function localeIdFactory(localeService: LocaleService) {
  console.log('localeIdFactory', localeService.getLocale());
  return localeService.getLocale();
}
