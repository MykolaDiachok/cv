import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { LanguageStore } from './stores/language.store';
import { TranslateService } from '@ngx-translate/core';
import { AutoUnsubscribe } from './shared/abstracts/auto-unsubscribe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent extends AutoUnsubscribe implements AfterViewInit, OnInit {
  title = 'cv';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private languageStore: LanguageStore,
    private translate: TranslateService,
  ) {
    super();
  }

  ngOnInit(): void {
    const browserLanguage = this.translate.getBrowserCultureLang()?.substring(0, 2);
    this.languageStore.getLanguages();
    this.route.queryParams.subscribe((params) => {
      const lang = params['lan'] || browserLanguage || 'en';
      this.translate.use(lang);
      this.languageStore.setSelectedLanguage(lang);
    });
  }

  ngAfterViewInit(): void {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.route.fragment.subscribe((fragment) => {
        if (fragment) {
          const element = document.getElementById(fragment);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });
  }
}
