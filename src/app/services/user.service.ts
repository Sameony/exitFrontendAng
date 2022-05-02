import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
}
