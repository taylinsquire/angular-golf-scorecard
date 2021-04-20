import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScorecardComponent } from './scorecard/scorecard.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { MaterialModule } from './modules/material.module';
import { HttpClientModule } from '@angular/common/http';
import { CourseSelectComponent } from './course-select/course-select.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PlayerSelectComponent } from './player-select/player-select.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore' 
import { environment } from 'src/environments/environment';
import { NamePipe } from './name.pipe';
import { ParPipe } from './par.pipe';
import { YardagePipe } from './yardage.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ScorecardComponent,
    TopNavbarComponent,
    CourseSelectComponent,
    PlayerSelectComponent,
    NamePipe,
    ParPipe,
    YardagePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [NamePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
