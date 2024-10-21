import {AfterViewInit, Component} from '@angular/core';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent implements AfterViewInit {
  constructor(private translate: TranslateService, private route: ActivatedRoute) {}

  ngAfterViewInit() {
    this.route.fragment.subscribe((fragment) => {
      const element = document.getElementById(fragment ?? '');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}
