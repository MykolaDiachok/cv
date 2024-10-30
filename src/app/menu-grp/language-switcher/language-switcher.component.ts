import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { LanguageStore } from '../../stores/language.store';
import { AutoUnsubscribe } from '../../shared/abstracts/auto-unsubscribe';
import { ReactiveFormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [TranslateModule, ReactiveFormsModule, NgForOf],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.css',
})
export class LanguageSwitcherComponent extends AutoUnsubscribe implements OnInit {
  selectedLanguage: string = 'en';
  languages: string[] = [];

  constructor(
    private router: Router,
    private languageStore: LanguageStore,
  ) {
    super();
  }

  ngOnInit(): void {
    this.safeSubscribe(
      this.languageStore.selectedLanguage$,
      (lang) => (this.selectedLanguage = lang),
    );
    this.safeSubscribe(this.languageStore.languages$, (languages) => {
      this.languages = languages;
    });
  }

  switchLanguage(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedLanguage = selectElement.value;

    this.router.navigate([], { queryParams: { lan: selectedLanguage } });
  }
}
