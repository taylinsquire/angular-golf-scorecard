import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  courses$: Observable<any>;
  course$: Observable<any>;

  selectedCourseId: Number;

  constructor(private http: HttpClient) {}

  getCoursesObservable(): Observable<any> {
    if (!this.courses$) {
      this.courses$ = this.http
        .get('https://golf-courses-api.herokuapp.com/courses', {
          headers: {
            ContentType: 'application/json',
          },
        })
        .pipe(shareReplay());
    }
    return this.courses$;
  }

  getCourseByIdObservable(): Observable<any> {
    if (!this.course$) {
      this.course$ = this.http
        .get(
          `https://golf-courses-api.herokuapp.com/courses/${this.selectedCourseId}`
        )
        .pipe(shareReplay());
    }
    return this.course$;
  }

  async setCourseId(id: Number): Promise<any> {
    if (id !== this.selectedCourseId) {
      this.course$ = undefined;
    }
    return (this.selectedCourseId = id);
  }

  get isCourseSelected(): Boolean {
    return this.selectedCourseId !== undefined;
  }
}
