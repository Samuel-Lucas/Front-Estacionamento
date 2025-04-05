import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:5122'
  private endpoint = 'api/Auth/v1/Authenticate'

  constructor(private authService: HttpClient) { }

  login(loginObj: User): Observable<User> {
    return this.authService.post<User>(`${this.baseUrl}/${this.endpoint}`, loginObj)
  }
}
