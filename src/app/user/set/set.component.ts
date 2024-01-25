import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SetserviceService } from 'src/app/setservice.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.css']
})
export class SetComponent {
    formData:any ={};
    constructor(private setServices: SetserviceService){}
    submitForm()
    {
      Swal.fire({
        title:"Data Recieved",
        icon:'success'
      })
      this.setServices.setFormData(this.formData)
    }

}
