import { Component } from '@angular/core';
import {LanguageSwitcherComponent} from '../language-switcher/language-switcher.component';
import {NavigationEnd, Router, RouterLink, RouterLinkActive} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    LanguageSwitcherComponent,
    RouterLink,
    RouterLinkActive,
    TranslateModule
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  currentFragment: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const urlTree = this.router.parseUrl(this.router.url);
        this.currentFragment = urlTree.fragment || '';
      }
    });
  }

  isActive(fragment: string): boolean {
    return this.currentFragment === fragment;
  }

}
