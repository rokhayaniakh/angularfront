import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData = {}
  constructor(private _auth: AuthService, private router: Router) { }

  ngOnInit() {
  }
  loginUser() {
    this._auth.loginUser(this.loginUserData)
      .subscribe(
        res => {

          Swal.fire('Authentification Réussie!!!')
          this.router.navigate(['/'])
          let jwt = res.body
          this._auth.saveToken(jwt)
        },
        err => console.log(err)
      )
  }

}
