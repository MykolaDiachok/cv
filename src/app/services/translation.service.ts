import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LanguageConfig } from '../models/language-config';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private i18nPath = 'assets/i18n/app/';
  private languageListUrl = 'assets/i18n/app/languages.json';

  constructor(private http: HttpClient) {}

  getAvailableLanguages(): Observable<LanguageConfig> {
    return this.http.get<LanguageConfig>(this.languageListUrl);
  }

  loadTranslation(language: string): Observable<any> {
    return this.http.get(`${this.i18nPath}${language}.json`);
  }
}
