import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.css'
})
export class LanguageSwitcherComponent {
  selectedLanguage = 'en';

  constructor(private translate: TranslateService, private router: Router, private route: ActivatedRoute,) {
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
