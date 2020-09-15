import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
 import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { DeleteItemComponent } from './components/delete-item/delete-item.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ExcerptFilter } from './excerpts.pipe';
import { MatSelectModule } from '@angular/material/select';
import { PreloaderComponent } from './preloader/preloader.component';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import { MatNativeDateModule } from '@angular/material/core';
import { DateAgoPipe } from './pipes/date-ago.pipe';
import { AvatarModule } from 'ngx-avatar';
import { ToastrModule } from 'ngx-toastr';
//import { CrudService } from './service/crud.service';


@NgModule({
  declarations: [DeleteItemComponent, ExcerptFilter, PreloaderComponent, DateAgoPipe],
  imports: [
    CommonModule,
    MatTableModule,
    MatInputModule,
    MatDatepickerModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatCardModule,
    MatDividerModule,
    MatSelectModule,
    MatIconModule,
    MatSlideToggleModule,
    MatDialogModule,
    NgxSkeletonLoaderModule,
    MatMenuModule,
    MatListModule,
    MatFormFieldModule,
    MatStepperModule,
    MatNativeDateModule,
    AvatarModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      preventDuplicates: true,
  }), 
    
  ],
  providers: [  
  ],
  exports: [
    MatTableModule,
    MatInputModule,
    MatDatepickerModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatDialogModule,
    DeleteItemComponent,
    NgxSkeletonLoaderModule,
    ExcerptFilter,
    PreloaderComponent,
    ExcerptFilter,
    MatMenuModule,
    MatListModule,
    MatFormFieldModule,
    MatStepperModule,
    MatNativeDateModule,
    DateAgoPipe,
    AvatarModule
  ],
  entryComponents: [DeleteItemComponent]
})
export class SharedModule { }
