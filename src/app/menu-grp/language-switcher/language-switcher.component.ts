import { Component } from '@angular/core';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LanguageStore} from '../../../stores/language.store';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [
    TranslateModule
  ],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.css'
})
export class LanguageSwitcherComponent {
  selectedLanguage = 'en';

  constructor(private translate: TranslateService, private router: Router, private route: ActivatedRoute, private languageStore: LanguageStore) {
    this.route.queryParams.subscribe(params => {
      const lang = params['lan'] || 'en';
      this.selectedLanguage = lang;
      this.translate.use(lang);
    });
  }

  switchLanguage(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedLanguage = selectElement.value;
    this.translate.use(selectedLanguage);

    this.router.navigate([], { queryParams: { lan: selectedLanguage } });
  }

}
