import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../environment/environment.local';
import swal from "sweetalert2";

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  apiEndpoint: string = "";

  constructor(private http:HttpClient, private router: Router) {
    this.apiEndpoint = environment.apiUrl;
   }

   httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
   };

  rewardDetail(url: any){
    return this.http.get(this.apiEndpoint + url)
   }

  rewardCategoryDetail(url: any){
    return this.http.get(this.apiEndpoint + url)
   }
   
  editRewardCategory(url:any, param: any) {
    return this.http.put<any>(this.apiEndpoint + url, param);
  }

  getDetailByidParams(url: any, data: any, param = {}) {
    return this.http.get<any>(this.apiEndpoint + url + data,{
      params: param,
    });
  }

  putData(url:any, param: any) {
    return this.http.put<any>(this.apiEndpoint + url, param);
  }

  postData(url:any, param: any) {
    return this.http.post<any>(this.apiEndpoint + url, param);
  }

  deleteData(url:any, param: any) {
    const options = {
      // headers: new HttpHeaders({
      //   "Content-Type": "application/json",
      // }),
      body: param,
    };
    return this.http.delete(this.apiEndpoint +url, options);
  }

  showAlert(title: string, text: string) {
    swal.fire({
      // title: '<figure><img src="../../assets/images/sucess.svg"></figure>',
      text: text,
      showConfirmButton: true,
      confirmButtonText: "Okay",
      confirmButtonColor: "#2FC863",
      timer: 1500,
    });
  }
}
