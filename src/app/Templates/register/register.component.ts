import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

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

  constructor() { }

  public user = {
    username  : "",
    password : "",
    email : "",
    gender : ""
  }

  ngOnInit(): void {
  }

  formSubmit()
  {
    alert(this.user.gender)
  }
}
