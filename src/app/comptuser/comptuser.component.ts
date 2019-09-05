import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-comptuser',
  templateUrl: './comptuser.component.html',
  styleUrls: ['./comptuser.component.scss']
})
export class ComptuserComponent implements OnInit {

  constructor(private _auth: AuthService,private router:Router) { }
  comptuserData = {}
  ngOnInit() {
    this._auth.loadToken();
  }
  comptuser() {
    console.log(this.comptuserData )
    this._auth. comptuser(this. comptuserData )
    .subscribe(
      res => {
        console.log(res)
        // this.router.navigate(['/login'])
      },
      err => console.log(err)
    )      
  }

}
