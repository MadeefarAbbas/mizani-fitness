import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Route } from '@angular/compiler/src/core';
import { UccService } from './ucc.service';

@Injectable({
  providedIn: 'root'
})
export class UccGuard implements CanLoad {
  constructor(private uccService: UccService, private router: Router){}
  canLoad(
    route: Route,
    segments: UrlSegment[]
    ): Observable<boolean> | Promise<boolean> | boolean {
      if(!this.uccService.userIsAuthenticated){
        this.router.navigateByUrl('/ucc');
      }
    return this.uccService.userIsAuthenticated;
  }
}
