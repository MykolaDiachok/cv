import { Component } from '@angular/core';
import {ContactsComponent} from '../contacts/contacts.component';
import {PostionComponent} from '../postion/postion.component';
import {SummaryComponent} from '../summary/summary.component';
import {ExperiencesComponent} from '../experience-grp/experiences/experiences.component';
import {EducationsComponent} from '../education-grp/educations/educations.component';
import {LanguageComponent} from '../language/language.component';
import {CoursesComponent} from '../course-grp/courses/courses.component';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [
    ContactsComponent,
    PostionComponent,
    SummaryComponent,
    ExperiencesComponent,
    EducationsComponent,
    LanguageComponent,
    CoursesComponent
  ],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css'
})
export class CvComponent {

}
