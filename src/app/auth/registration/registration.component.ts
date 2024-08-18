import { Component, forwardRef } from '@angular/core';
import { FormGroup,FormControl,FormBuilder, Validators } from '@angular/forms';
import { SnackbarComponent } from '../../shared/snackbar/snackbar.component';
import {
  MatSnackBar,
  MatSnackBarAction,
  MatSnackBarActions,
  MatSnackBarLabel,
  MatSnackBarRef,
} from '@angular/material/snack-bar';
import { AuthService } from '../auth.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css',

})
export class RegistrationComponent {
  public submitted:Boolean=false;
  registrationform:FormGroup;
  durationInSeconds = 2;
  constructor(private fb:FormBuilder,private snackBar:MatSnackBar,private sdata:AuthService ,public dialog: MatDialog){

    this.registrationform=this.fb.group({
      fullname:new FormControl(null,(Validators.required)),
      contact:new FormControl(null,[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('^[0-9]*$')]),
      email:new FormControl(null,[Validators.required,Validators.email]),
      designation: new FormControl(null, [Validators.required,Validators.minLength(1)]) 
    })

  }

  onSubmit(){
    if(this.registrationform.invalid){
      this.submitted=true;
      this.openSnackBar('All fields are required')
      }else{
        this

      }
  }

  openSnackBar(msg:any) {
    const dialogRef = this.dialog.open(SnackbarComponent, {
      width: '250px',
      data: { message: msg}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

}
