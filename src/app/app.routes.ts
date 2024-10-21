import {Routes} from '@angular/router';
import {ContactsComponent} from './cv-grp/contacts/contacts.component';
import {CvComponent} from './cv-grp/cv/cv.component';
import {SummaryComponent} from './cv-grp/summary/summary.component';
import {ExperiencesComponent} from './cv-grp/experience-grp/experiences/experiences.component';
import {EducationsComponent} from './cv-grp/education-grp/educations/educations.component';
import {LanguageComponent} from './cv-grp/language/language.component';
import {CoursesComponent} from './cv-grp/course-grp/courses/courses.component';

export const appRoutes: Routes = [
  {path: '', component: CvComponent},
  {path: 'cv', component: CvComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'summary', component: SummaryComponent},
  {path: 'experience', component: ExperiencesComponent},
  {path: 'education', component: EducationsComponent},
  {path: 'language', component: LanguageComponent},
  {path: 'courses', component: CoursesComponent},
];
