import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDTO } from '../model/userDTO.model';
import { portUrl } from './helper';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public adduser(user:any)
  {
    return this.http.post(`${portUrl}/users/` ,user);
  }
  public matchUser(user:UserDTO)
  {
    return this.http.post(`${portUrl}/users/match`,user);    
  }
  public getProducts()
  {
    return this.http.post(`${portUrl}/getProducts`,"");
  }
}
