import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

  private nameId$ = new BehaviorSubject<string>("")
  private name$ = new BehaviorSubject<string>("")
  private role$ = new BehaviorSubject<string>("")

  constructor() { }

  public getNameIdFromStore() {
    return this.nameId$.asObservable()
  }

  public setNameIdFromStore(nameId: string) {
    this.nameId$.next(nameId)
  }

  public getNameFromStore() {
    return this.name$.asObservable()
  }

  public setNameFromStore(name: string) {
    this.name$.next(name)
  }

  public getRoleFromStore() {
    return this.role$.asObservable()
  }

  public setRoleFromStore(role: string) {
    this.role$.next(role)
  }
}
