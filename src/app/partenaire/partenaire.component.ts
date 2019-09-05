import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-partenaire',
  templateUrl: './partenaire.component.html',
  styleUrls: ['./partenaire.component.scss']
})
export class PartenaireComponent implements OnInit {
  partenaireData = {}

  constructor(private _auth: AuthService,private router:Router) { }

  ngOnInit() {
    this._auth.loadToken();
  }
  partenaire() {
    console.log(this.partenaireData)
    this._auth.partenaire(this.partenaireData)
    .subscribe(
      res => {
        console.log(res)
        // this.router.navigate(['/login'])
      // localStorage.setItem('token', res.token)
      },
      err => console.log(err)
    )      
  }
}
