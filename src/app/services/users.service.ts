import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
 
   url ="https://reqres.in/api/users";

  constructor(private http:HttpClient) { }
  getUsers()
  {
    return this.http.get(this.url);
  }
}
  
  
  
  
  
  




