import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { LanguageStore } from './stores/language.store';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { AutoUnsubscribe } from './shared/abstracts/auto-unsubscribe';
import { registerLocaleData } from '@angular/common';
import localeUk from '@angular/common/locales/uk';
import localeEn from '@angular/common/locales/en';
import localeHr from '@angular/common/locales/hr';
import { LocaleService } from './shared/services/locale.service';
import { MenuComponent } from './menu-grp/menu/menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet, MenuComponent, TranslateModule],
  standalone: true,
})
export class AppComponent extends AutoUnsubscribe implements AfterViewInit, OnInit {
  title = 'cv';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private languageStore: LanguageStore,
    private translate: TranslateService,
    private localeService: LocaleService,
  ) {
    super();
    registerLocaleData(localeUk, 'uk');
    registerLocaleData(localeEn, 'en');
    registerLocaleData(localeHr, 'hr');
  }

  ngOnInit(): void {
    const browserLanguage = this.translate.getBrowserCultureLang()?.substring(0, 2);
    this.languageStore.getLanguages();
    this.route.queryParams.subscribe((params) => {
      const lang = params['lan'] || browserLanguage || 'en';
      this.translate.use(lang);
      this.languageStore.setSelectedLanguage(lang);
      document?.querySelector('html')?.setAttribute('lang', lang);
      this.localeService.setLocale(lang);

      this.reloadCurrentRoute();
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

  private reloadCurrentRoute(): void {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
}
