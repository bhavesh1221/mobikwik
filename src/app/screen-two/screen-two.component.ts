import { Component, OnInit } from '@angular/core';
import { Bank } from '../screen-one/screen-one.model';
import { DatasharingService } from 'src/shared/datasharing.service';

@Component({
  selector: 'app-screen-two',
  templateUrl: './screen-two.component.html',
  styleUrls: ['./screen-two.component.scss']
})
export class ScreenTwoComponent implements OnInit {
  selectedBanks: Bank[] = [];
  constructor(private sharedService: DatasharingService) {}

  ngOnInit() {
    this.sharedService.items.subscribe((items:any) => {
    this.selectedBanks = items
   })
  } 

  onOpenPopUp(){
    console.log("poppoup");
  }
}
