import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cv';

  constructor(private translate: TranslateService) {
    // Доступні мови
    this.translate.addLangs(['en', 'uk', 'hr']);
    this.translate.setDefaultLang('en'); // Мова за замовчуванням
  }

  switchLanguage(event: Event) {
    const selectElement = event.target as HTMLSelectElement;  // Явне приведення типу
    const selectedLanguage = selectElement.value;  // Тепер властивість 'value' доступна
    this.translate.use(selectedLanguage);
  }
}
