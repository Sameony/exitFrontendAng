import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { UserDTO } from 'src/app/model/userDTO.model';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';



/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  textFormControl =  new FormControl('', [Validators.required]);
  passFormControl =  new FormControl('', [Validators.required, Validators.minLength(6)]);
  matcher = new MyErrorStateMatcher();

  constructor(private userService:UserService, public authService: AuthService) { }

  public user = {
    username  : "",
    password : ""
  }

  ngOnInit(): void {
  }

  formSubmit()
  {
    if(this.user.username && this.user.password)
    {
      const userDTO = new UserDTO()
      userDTO.username = this.user.username;
      userDTO.password = this.user.password;
      this.authService.login(userDTO);
    }

  }
}
