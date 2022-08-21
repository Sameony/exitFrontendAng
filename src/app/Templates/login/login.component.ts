import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators
} from '@angular/forms';
import {
  ErrorStateMatcher
} from '@angular/material/core';
import {
  UserDTO
} from 'src/app/model/userDTO.model';
import {
  AuthService
} from 'src/app/services/auth.service';
import {
  UserService
} from 'src/app/services/user.service';
import Swal from 'sweetalert2';


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
  textFormControl = new FormControl('', [Validators.required]);
  passFormControl = new FormControl('', [Validators.required, Validators.minLength(6)]);
  matcher = new MyErrorStateMatcher();

  constructor(private userService: UserService, public authService: AuthService) {}

  public user = {
    username: "",
    password: ""
  }

  ngOnInit(): void {}

  formSubmit() {
    if (this.user.username && this.user.password) {
      const userDTO = new UserDTO()
      userDTO.username = this.user.username;
      userDTO.password = this.user.password;
      this.userService.matchUser(userDTO).subscribe(
        (result => {
          this.authService.login(userDTO);
          Swal.fire(
            'Welcome back!',
            'You have logged in!',
            'success'
          )
          console.log("success")
        }),
        (error => {

          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: 'Check your credentials again.'
          })
          console.log(error + "fail")
        })
      )
      if(this.authService.isLoggedIn())
      {
        window.location.reload();
      }
      
    }

    
  }
}
