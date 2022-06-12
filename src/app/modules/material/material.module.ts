import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule} from '@angular/material/input';
import { MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatNativeDateModule} from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
 
@NgModule({
  declarations: [],
  imports: [
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatTableModule,
    MatDialogModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatSnackBarModule,
    CommonModule,
  ],
  exports: [
    MatSnackBarModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatTableModule,
    MatDialogModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatCardModule,
  ]
})
export class MaterialModule { }
