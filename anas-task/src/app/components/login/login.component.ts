import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user-auth/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb :FormBuilder, private us: UserService, private snackbar: MatSnackBar, private router: Router) { 
    this.form = this.fb.group({
      user_email : [],
      user_password :[]
    })
  }
 

  ngOnInit(): void {
  }

  //Login form

  form : FormGroup

  login(){
    this.us.userLoginService(this.form.value.user_email ,this.form.value.user_password).subscribe((result:any)=>{
      if(result.res_code == 1)
      {
        this.snackbar.open(result.msg , 'Ok', {
          panelClass: ['snackbar-color-res'],
          duration: 3000, 
          horizontalPosition: 'end',
          verticalPosition: 'top',
        })
        this.router.navigate(['admin'])
        
      }
      else
      {
        this.snackbar.open(result.msg , 'Ok', {
          panelClass: ['snackbar-color-err'],
          duration: 3000, 
          horizontalPosition: 'end',
          verticalPosition: 'top',
        })
      }
    })
  }

  //sign up form
  // SELECT u.user_id, u.user_name, u.user_email, u.user_address, u.user_ph_no, u.user_password from tbl_user_master

  signUpform = FormGroup;

  saveSignUp(){

  }
}
