import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _authService: AuthService) { }

  ngOnInit() {
  }
  isSuperAdmin(){
    return this. _authService.isSuperAdmin();
  }
  isAdmin(){
    return this. _authService.isAdmin();
  }
  isUser(){
    return this. _authService.isUser();
  }
  isAuthentificated(){
    return this._authService.isAuthentificated();
  }
}
