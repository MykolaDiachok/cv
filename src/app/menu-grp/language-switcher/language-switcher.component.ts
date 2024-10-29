import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LanguageStore } from '../../stores/language.store';
import { AutoUnsubscribe } from '../../shared/abscracts/auto-unsubscribe';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.css',
})
export class LanguageSwitcherComponent  extends AutoUnsubscribe implements OnInit {
  selectedLanguage: string='en';

  constructor(
    private router: Router,
    private languageStore: LanguageStore,
  ) {
    super();
  }

  ngOnInit(): void {
this.safeSubscribe(this.languageStore.selectedLanguage$,(lang)=>this.selectedLanguage=lang)
  }

  switchLanguage(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedLanguage = selectElement.value;

    this.router.navigate([], { queryParams: { lan: selectedLanguage } });
  }
}
