import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { TranslationService } from '../services/translation.service';

export interface LanguageState {
  languages: string[];
  selectedLanguage: string;
}

const initialState: LanguageState = {
  languages: ['en'],
  selectedLanguage: 'en',
};

@Injectable()
export class LanguageStore extends ComponentStore<LanguageState> {
  constructor(private translation: TranslationService) {
    super(initialState);
  }

  readonly languages$: Observable<string[]> = this.select((state) => state.languages);

  private readonly setLanguages = this.updater((state, languages: string[]) => ({
    ...state,
    languages,
  }));

  readonly selectedLanguage$: Observable<string> = this.select((state) => state.selectedLanguage);

  private readonly setSelectedLanguage = this.updater((state, selectedLanguage: string) => ({
    ...state,
    selectedLanguage,
  }));
}
