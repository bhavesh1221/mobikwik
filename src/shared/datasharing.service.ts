import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatasharingService {
 
  private content = new BehaviorSubject<any>("");
  items = this.content.asObservable();
  constructor() { }

  setData(list: any) {
    this.content.next(list);
    console.log("inside service",list);
  }
  
}
