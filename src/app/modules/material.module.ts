import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
// import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    // MatTableModule,
    MatCardModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    // MatTableModule,
    MatCardModule
  ],
})
export class MaterialModule {}
