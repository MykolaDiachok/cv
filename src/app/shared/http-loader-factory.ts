import { HttpClient } from '@angular/common/http';
import { MultiTranslateHttpLoader } from './multi-translate-http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    { prefix: './assets/i18n/app/', suffix: '.json' },
    { prefix: './assets/i18n/cv-diachok/', suffix: '.json' },
  ]);
}
