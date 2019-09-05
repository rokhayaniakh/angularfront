import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import {Router} from '@angular/router';
import { UploadImageService } from '../service/upload-image.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [UploadImageService]
})
export class RegisterComponent implements OnInit {

  imageUrl:string ="/assets/img/1.png";
  fileToUpload :File =null; 

  registerUserData = {imageName:File=null}
  constructor(private _auth: AuthService,private router:Router) { }

  ngOnInit() {
    this._auth.loadToken();
  }

  registerUser() {
    console.log(this.registerUserData)
    this._auth.registerUser(this.registerUserData)
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
    this.registerUserData.imageName = file.item(0);
    var reader = new FileReader();
    reader.onload = (event:any)=>{
      this.imageUrl =event.target.result;
    }
reader.readAsDataURL(this.registerUserData.imageName);
  }
  OnSubmit(){
this._auth.registerUser(this.registerUserData).subscribe( 
  data =>{
    console.log('done');
    // Image.value = null;
    this.imageUrl ="/assets/img/1.png";
  }
)
  }
}
