import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScorecardComponent } from './scorecard/scorecard.component';
import { CourseSelectComponent } from './course-select/course-select.component';

const routes: Routes = [
  {path: 'courses', component: CourseSelectComponent},
  {path: 'scorecard', component: ScorecardComponent},
  {path: '**', redirectTo: 'courses'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
