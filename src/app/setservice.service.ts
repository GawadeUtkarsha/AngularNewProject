import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SetserviceService {
private formData=new BehaviorSubject<any>(null);
formData$ = this.formData.asObservable();

setFormData(data: any){
  this.formData.next(data);
}
  // constructor() { }
}
