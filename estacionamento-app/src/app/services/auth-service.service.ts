import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:5122'
  private endpoint = 'api/Auth/v1/Authenticate'

  constructor(private authService: HttpClient, private router: Router) { }

  login(loginObj: User): Observable<User> {
    return this.authService.post<User>(`${this.baseUrl}/${this.endpoint}`, loginObj)
  }

  signOut() {
    localStorage.clear()
    this.router.navigateByUrl("")
  }

  storeToken(tokenValue: string) {
    localStorage.setItem('token', tokenValue)
  }

  getToken() {
    return localStorage.getItem('token')
  }

  IsLoggedIn(): boolean {
    return !!localStorage.getItem('token')
  }
}
