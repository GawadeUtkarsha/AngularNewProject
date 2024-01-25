import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UrlApiServiceService {

  private apiURL="http://jsonplaceholder.typicode.com/posts";


  constructor(private http:HttpClient) { }
  getApiData(){
    return this.http.get<any[]>(this.apiURL);
  }
}
