import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { AdminfooterComponent } from './adminfooter/adminfooter.component';
import { AdminsidebarComponent } from './adminsidebar/adminsidebar.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    AdminheaderComponent,
    AdminfooterComponent,
    AdminsidebarComponent,
    SnackbarComponent
  ],
  exports:[
    AdminheaderComponent, 
    AdminfooterComponent,
    AdminsidebarComponent,
    SnackbarComponent
    ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
  
  ]
})
export class SharedModule { }
