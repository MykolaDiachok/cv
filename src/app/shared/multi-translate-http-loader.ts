import { TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { catchError, forkJoin, map, Observable, of } from 'rxjs';

export class MultiTranslateHttpLoader implements TranslateLoader {
  constructor(
    private http: HttpClient,
    private resources: { prefix: string; suffix: string }[],
  ) {}

  getTranslation(lang: string): Observable<any> {
    return forkJoin(
      this.resources.map((resource) =>
        this.http.get(`${resource.prefix}${lang}${resource.suffix}`).pipe(
          catchError(() => of({})), // Return an empty object if file is not found
        ),
      ),
    ).pipe(
      map((response) => Object.assign({}, ...response)), // Merge translations
    );
  }
}
