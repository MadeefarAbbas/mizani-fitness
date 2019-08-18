import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UccService {
  private _uccIsAuthenticated = false;

  get userIsAuthenticated() {
    return this._uccIsAuthenticated;
  }

  constructor() { }

  login() {
    this._uccIsAuthenticated = true;
  }

  logout() {
    this._uccIsAuthenticated = false;
  }
}
