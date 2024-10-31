import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { catchError, EMPTY, Observable, switchMap, tap, withLatestFrom } from 'rxjs';
import { TranslationService } from '../services/translation.service';

export interface LanguageState {
  languages: string[];
  selectedLanguage: string;
}

const initialState: LanguageState = {
  languages: ['en'],
  selectedLanguage: 'en',
};

@Injectable({ providedIn: 'root' })
export class LanguageStore extends ComponentStore<LanguageState> {
  constructor(private translation: TranslationService) {
    super(initialState);
  }

  readonly languages$: Observable<string[]> = this.select((state) => state.languages);

  private readonly updateLanguages = this.updater((state, languages: string[]) => ({
    ...state,
    languages,
  }));

  readonly setLanguages = this.effect<string[]>((trigger$) =>
    trigger$.pipe(
      tap((languages) => {
        this.updateLanguages(languages);
      }),
    ),
  );

  readonly getLanguages = this.effect<void>((trigger$) =>
    trigger$.pipe(
      switchMap(() =>
        this.translation.getAvailableLanguages().pipe(
          tap((lans) => {
            return this.setLanguages(lans.languages);
          }),
          catchError((error) => {
            console.error('error:', error);
            return EMPTY;
          }),
        ),
      ),
    ),
  );

  readonly selectedLanguage$: Observable<string> = this.select((state) => state.selectedLanguage);

  private readonly updateSelectedLanguage = this.updater((state, selectedLanguage: string) => ({
    ...state,
    selectedLanguage,
  }));

  readonly setSelectedLanguage = this.effect<string>((trigger$) =>
    trigger$.pipe(
      withLatestFrom(this.languages$),
      tap(([selectedLanguage, languages]) => {
        const existLanguage = languages.includes(selectedLanguage);
        this.updateSelectedLanguage(existLanguage ? selectedLanguage : 'en');
      }),
    ),
  );
}
