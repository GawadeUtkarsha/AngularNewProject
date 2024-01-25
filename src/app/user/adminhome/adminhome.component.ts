import { Component } from '@angular/core';
import { SetserviceService } from 'src/app/setservice.service';
import { UrlApiServiceService } from 'src/app/url-api-service.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent {
  apiData:any[]=[];
  getApiData:any;
  constructor(private callApiService:UrlApiServiceService){}
  clickMe()
  {
  this.callApiService.getApiData().subscribe(
   (data:any[])=>{
    this.apiData=data;
   },
   (error:any)=>{
    console.error('API Error',error);
   }
  );
  }
}
