import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.loginService.getCurrentUser().pipe(
      map((response) => {
        console.log(response);
        return true; // Return true if token is valid
      }),
      catchError((error) => {
        this.router.navigate(['/login']); // Redirect to login page if token is invalid
        return of(false);
      })
    );
  }
}
