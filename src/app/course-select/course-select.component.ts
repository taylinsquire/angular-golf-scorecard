import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';
import { Observable, interval } from 'rxjs';
import { Router } from '@angular/router';
import { take, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-course-select',
  templateUrl: './course-select.component.html',
  styleUrls: ['./course-select.component.scss'],
})
export class CourseSelectComponent implements OnInit {
  courses$: Observable<any>;


  constructor(private courseService: CourseService, private router: Router) {
    this.courses$ = this.courseService.getCoursesObservable();
  }

  ngOnInit(): void {}

  setCourse(id: Number): void {
    this.courseService.setCourseId(id).then(() => {
      this.router.navigate(['/player-select']);
    });
  }
}
