import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.scss'],
})
export class ScorecardComponent implements OnInit {
  course$: Observable<any>;

  constructor(private courseService: CourseService, private router: Router) {
    if (this.courseService.isCourseSelected) {
      this.course$ = this.courseService.getCourseByIdObservable();
    } else {
      this.router.navigate(['/courses'])
    }
  }

  ngOnInit(): void {}
}
