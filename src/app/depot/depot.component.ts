import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.scss']
})
export class DepotComponent implements OnInit {
  depotData = {}

  constructor(private _auth: AuthService,private router:Router) { }

  ngOnInit() {
    this._auth.loadToken();
  }
  depot() {
    console.log(this.depotData)
    this._auth.depot(this.depotData)
    .subscribe(
      res => {
        console.log(res)
        // this.router.navigate(['/login'])
      },
      err => console.log(err)
    )      
  }


}
