import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  textFormControl =  new FormControl('', [Validators.required]);
  passFormControl =  new FormControl('', [Validators.required, Validators.minLength(6)]);
  matcher = new MyErrorStateMatcher();
  genderList: string[] = ['Male', 'Female', 'Other'];
  constructor(private userService:UserService) { }

  public user = {
    username  : "",
    name: "",
    password : "",
    email : "",
    gender : ""
  }

  ngOnInit(): void {
  }

  formSubmit()
  {
    if(!this.user.email || !this.user.gender || !this.user.password || !this.user.username)
      alert("Do not leave the fields empty pls")
    else
    {
      this.userService.adduser(this.user).subscribe(
        (data)=>console.log(data)
        ,(error)=>console.log(error)
      )
      Swal.fire(
        'Good job!',
        'You are Successfully Registered',
        'success'
      )
    }
   
  }


}
