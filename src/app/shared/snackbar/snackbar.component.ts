import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
  MatSnackBar,
  MatSnackBarAction,
  MatSnackBarActions,
  MatSnackBarLabel,
  MatSnackBarRef,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styles: `
    :host {
      display: flex;
    }

    .example-pizza-party {
      color: hotpink;
    }`
})
export class SnackbarComponent implements OnInit {
  public message:string='';
  constructor(@Inject(MAT_DIALOG_DATA) public Dialogdata:any, public dialogRef: MatDialogRef<any>,private snackBar : MatSnackBar){

  }
  ngOnInit(): void {
  this.openSnackBar(this.Dialogdata.message,'clear')
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
       verticalPosition: 'top',
      horizontalPosition: 'center',
      panelClass: ['snackbarwarn'],
    });
    this.dialogRef.close();
  }
  

}
