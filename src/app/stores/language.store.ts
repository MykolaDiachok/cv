import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable, tap } from 'rxjs';
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

  readonly setLanguages = this.effect<string[]>((trigger$)=>trigger$.pipe(
    tap((languages) => {
      this.updateLanguages(languages);
    })
  ));

  readonly selectedLanguage$: Observable<string> = this.select((state) => state.selectedLanguage);

  private readonly updateSelectedLanguage = this.updater((state, selectedLanguage: string) => ({
    ...state,
    selectedLanguage,
  }));

  readonly setSelectedLanguage = this.effect<string>((trigger$)=>trigger$.pipe(tap((selectedLanguage: string) => {this.updateSelectedLanguage(selectedLanguage)})));
}
