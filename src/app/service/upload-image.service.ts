import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {

  constructor(private http : HttpClient) { }
  postFile(fileToUpload){
    const endpoint ='http://localhost:8000/api/user';
    const formData:FormData = new FormData();
    formData.append('imageName',fileToUpload.imageName);
  return this.http.post(endpoint,formData);
  }
}
