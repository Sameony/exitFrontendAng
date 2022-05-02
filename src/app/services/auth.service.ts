import { Injectable } from '@angular/core';
import { UserDTO } from '../model/userDTO.model';
export const AUTH_TOKEN_KEY = "auth-token";
export const AUTH_USER_DATA = "user-data";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
public authToken : string | null = null;
public userData : UserDTO | null = null;
  constructor() { 
    this.checkSession();
  }
  login(authData:UserDTO)
  {
    sessionStorage.setItem(AUTH_TOKEN_KEY, authData+"RANDOM_STRING");
    sessionStorage.setItem(AUTH_USER_DATA, JSON.stringify(authData))
    console.log(authData);
    this.checkSession();
  }
  checkSession(){
    const authToken = sessionStorage.getItem(AUTH_TOKEN_KEY);
    const userData = sessionStorage.getItem(AUTH_USER_DATA);
    if(userData)
    {
      this.userData = JSON.parse(userData) as any;
    }
    else
    {
      this.userData = null;
    }
  }
  public isLoggedIn()
  {
    return this.authToken!==null;
  }
  public logout()
  {
    if(!this.isLoggedIn) return;
    sessionStorage.clear();
    this.checkSession();
  }
}
