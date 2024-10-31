import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { LanguageSwitcherComponent } from './menu-grp/language-switcher/language-switcher.component';
import { MenuComponent } from './menu-grp/menu/menu.component';
import { CvComponent } from './cv-grp/cv/cv.component';
import { LanguageStore } from './stores/language.store';
import { HttpLoaderFactory } from './shared/http-loader-factory';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    LanguageSwitcherComponent,
    MenuComponent,
    CvComponent,
  ],
  providers: [provideHttpClient(), LanguageStore],
  bootstrap: [AppComponent],
})
export class AppModule {}
