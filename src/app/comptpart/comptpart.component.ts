import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comptpart',
  templateUrl: './comptpart.component.html',
  styleUrls: ['./comptpart.component.scss']
})
export class ComptpartComponent implements OnInit {
  comptpartData = {}

  constructor(private _auth: AuthService, private router: Router) { }

  ngOnInit() {
  }
  comptpart() {
    console.log(this.comptpartData)
    this._auth.comptpart(this.comptpartData)
      .subscribe(
        res => {
          console.log(res)
          // this.router.navigate(['/login'])
        },
        err => console.log(err)
      )
  }
}
