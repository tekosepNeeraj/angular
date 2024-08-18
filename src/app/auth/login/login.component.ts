import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  implements OnInit{
  loginform:FormGroup<any>;
  public submitted:boolean=false;
  constructor(private fb:FormBuilder,public router:Router,public sdata:AuthService){
    this.loginform=this.fb.group({
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.maxLength(10) ,Validators.minLength(3)])
    })
  }
  ngOnInit(): void {
    this.patchForm();
    // throw new Error('Method not implemented.');
  }

  onSubmit():void{
    console.log("this.loginform.value",this.loginform.value);
    if(this.loginform.invalid){
     console.log("invald form");
     this.submitted=true;
    }else{
      this.Onlogin(this.loginform.value);
    }
    // if(this.loginform.value.email=="neeraj@gmail.com" && this.loginform.value.password=="neeraj123") {
    //   sessionStorage.setItem("isLoggedIn","true");
    //   this.router.navigate(['/admin/dashboard']);
    // }else{
    //   sessionStorage.setItem("isLoggedIn","false");
    // }

  }
  Onlogin(fdata:any){
    this.sdata.login(fdata).subscribe((res:any)=>{
      if(res){
        console.log("getting result here :::",res);
        if(res.status=='200'){
          this.submitted=false;
            sessionStorage.setItem("isLoggedIn","true");
            sessionStorage.setItem("type",res.data.type);
            sessionStorage.setItem("balance",res.data.balance);
            sessionStorage.setItem("name",res.data.name);
            sessionStorage.setItem("email",res.data.email);
            sessionStorage.setItem("designation",res.data.designantion);
            this.router.navigate(['/admin/dashboard']);
         
        }else{
          console.log(res.message);
        }
      }
    })
  }
  patchForm(){
    this.loginform.patchValue({
      email:'neeraj@gmail.com',
      password:'neeraj123'
    });
  }

}
