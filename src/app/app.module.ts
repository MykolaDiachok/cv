import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient , HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import { appRoutes } from './app.routes';
import {LanguageSwitcherComponent} from './menu-grp/language-switcher/language-switcher.component';
import {MenuComponent} from './menu-grp/menu/menu.component';
import {CvComponent} from './cv-grp/cv/cv.component';
import { LanguageStore } from './stores/language.store';



export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    LanguageSwitcherComponent,
    MenuComponent,
    CvComponent
  ],
  providers: [provideHttpClient(), LanguageStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
