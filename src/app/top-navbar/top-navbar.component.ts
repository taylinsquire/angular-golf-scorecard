import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent implements OnInit {

  constructor(
    private router: Router,
    private courseService: CourseService
    ) { }

  ngOnInit(): void {
  }

  get isCourseSelected(): Boolean {
    return this.courseService.isCourseSelected;
  }
}
