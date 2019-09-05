import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-caissier',
  templateUrl: './caissier.component.html',
  styleUrls: ['./caissier.component.scss']
})
export class CaissierComponent implements OnInit {
  imageUrl:string ="/assets/img/1.png";
  fileToUpload :File =null; 

  UserSuperAdminData = {imageName:File=null}

  constructor(private _auth: AuthService,private router:Router) { }

  ngOnInit() {
  }
  UserSuperAdmin() {
    console.log(this.UserSuperAdminData)
    this._auth.UserSuperAdmin(this.UserSuperAdminData)
    .subscribe(
      res => {
        console.log(res)
        // this.router.navigate(['/login'])
      // localStorage.setItem('token', res.token)
      },
      err => console.log(err)
    )      
  }
  handleFileInput(file:FileList){
    this.UserSuperAdminData.imageName = file.item(0);
    var reader = new FileReader();
    reader.onload = (event:any)=>{
      this.imageUrl =event.target.result;
    }
reader.readAsDataURL(this.UserSuperAdminData.imageName);
  }
  OnSubmit(){
this._auth.registerUser(this.UserSuperAdminData).subscribe( 
  data =>{
    console.log('done');
    // Image.value = null;
    this.imageUrl ="/assets/img/1.png";
  }
)
  }

}
