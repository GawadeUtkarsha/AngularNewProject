import { Component } from '@angular/core';
import { SetserviceService } from 'src/app/setservice.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent {

  submittedData : any;
  constructor(private getService: SetserviceService){}
  ngOnInit() {
    this.getService.formData$.subscribe(data=>{
      this.submittedData = data;
    });
  }
}
