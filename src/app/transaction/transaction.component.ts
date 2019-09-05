import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  TransData = {}

  constructor(private _auth: AuthService,private router:Router) { }

  ngOnInit() {
    this._auth.loadToken();
  }
  Transaction() {
    console.log(this.TransData)
    this._auth. Transaction(this.TransData)
    .subscribe(
      res => {
        console.log(res)
        // this.router.navigate(['/login'])
      },
      err => console.log(err)
    )      
  }

}
