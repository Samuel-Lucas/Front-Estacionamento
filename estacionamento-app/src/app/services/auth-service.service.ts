import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:5122'
  private endpoint = 'api/Auth/v1/Authenticate'
  private userPayload: any

  constructor(private authService: HttpClient, private router: Router) {
    this.userPayload = this.decodedToken()
  }

  login(loginObj: User): Observable<User> {
    return this.authService.post<User>(`${this.baseUrl}/${this.endpoint}`, loginObj)
  }

  signOut() {
    localStorage.clear()
    this.router.navigateByUrl("")
    window.location.reload()
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

  decodedToken() {
    const jwtHelper = new JwtHelperService()
    const token = this.getToken()!

    return jwtHelper.decodeToken(token)
  }

  getNameFromToken() {
    if (this.userPayload)
      return this.userPayload.unique_name
  }

  getRoleFromToken() {
    if (this.userPayload)
      return this.userPayload.role
  }
}
