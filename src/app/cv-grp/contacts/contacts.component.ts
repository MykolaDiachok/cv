import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { AgeCalculatorPipe } from '../../shared/pipes/age-calculator.pipe';
import { DatePipe } from '@angular/common';
import { AutoUnsubscribe } from '../../shared/abstracts/auto-unsubscribe';
import { LocaleService } from '../../shared/services/locale.service';
import { LocaleDatePipe } from '../../shared/pipes/locale-date.pipe';

@Component({
  selector: 'app-contacts',
  imports: [TranslateModule, AgeCalculatorPipe, LocaleDatePipe],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css',
  providers: [DatePipe],
  standalone: true,
})
export class ContactsComponent extends AutoUnsubscribe implements AfterViewInit, OnInit {
  constructor(
    private translate: TranslateService,
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private localeService: LocaleService,
  ) {
    super();
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.route.fragment.subscribe((fragment) => {
      const element = document.getElementById(fragment ?? '');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}
