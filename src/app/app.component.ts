import { Component, OnInit } from '@angular/core';
import { AuthService } from './service/auth.service'
import { PartenaireService } from './service/partenaire.service'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'NouveauProject';
  constructor(private _authService: AuthService ,private _listservice: PartenaireService){}
  
  ngOnInit(){
    this._authService.loadToken();
  }
}
