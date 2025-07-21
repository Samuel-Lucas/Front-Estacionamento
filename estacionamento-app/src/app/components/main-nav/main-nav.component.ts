import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth-service.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  name!: string

  constructor(
    private breakpointObserver: BreakpointObserver,
    private auth: AuthService,
    private userStore: UserStoreService
  ) {}

  ngOnInit() {
    this.userStore.getNameFromStore().subscribe(
      value => {
        let nameFromToken = this.auth.getNameFromToken()
        this.name = value || nameFromToken
      }
    )
  }

  deslogar() {

    if (!!!this.auth.getToken()) {
      return
    }

    this.userStore.setNameIdFromStore(null!);
    this.userStore.setNameFromStore(null!);
    this.userStore.setRoleFromStore(null!);

    this.auth.signOut()
  }

  usuarioAutenticado(): boolean {
    return !!this.name
  }
}
