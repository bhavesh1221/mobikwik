import { Component, OnInit, ViewChild } from '@angular/core';
import { Bank } from './screen-one.model'
import { DatasharingService } from 'src/shared/datasharing.service';

@Component({
  selector: 'app-screen-one',
  templateUrl: './screen-one.component.html',
  styleUrls: ['./screen-one.component.scss']
})
export class ScreenOneComponent implements OnInit {
  userDetail :Bank[] = [
    {
      id: 0,
      bankName: 'State Bank of India',
      accountNumber: 123456789,
      imgPath: 'assets/banks/sbi.png',
      status: false
    },
    {
      id: 1,
      bankName: 'HDFC',
      accountNumber: 987654321 ,
      imgPath: 'assets/banks/bank1.jpg',
      status: false
    },
    {
      id: 2,
      bankName: 'ICICI',
      accountNumber: 435353 ,
      imgPath: 'assets/banks/icici.png',
      status: false
    },

   
    
    {
      id: 3,
      bankName: 'Citigroup',
      accountNumber: 453543543 ,
      imgPath: 'assets/banks/citi.png',
      status: false
    },
    
    {
      id: 4,
      bankName: 'Kotak Mahindra bank',
      accountNumber: 45345668 ,
      imgPath: 'assets/banks/kot.jpg',
      status: false
    },
  ] 
  filteredBanks: Bank[] = this.userDetail;
  checkedStatus = false;
  selectedBanks: Bank[] = [];
  searchTerm: string = "";
  constructor(private sharedService: DatasharingService) {}

  ngOnInit(): void {
  }

  @ViewChild('trv') checkBoxInput: any;

  // this function checks whether input data is present in userDetail if it returns true the data is stored in filteredBanks array
  search(): void {
    this.filteredBanks = this.userDetail.filter((bank: Bank) => {
      return bank.bankName.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
  }

  //this function pushes the selected bank into selectedBanks array and shows the data in the list
  onCheckboxChange(bank: Bank): void {
    if (bank.status) {
      this.selectedBanks.push(bank);
    } else {
    this.selectedBanks = this.selectedBanks.filter((b: Bank) => {
      return b.id !== bank.id;
    });
    }
  }

  // this function removes the bank from the list
  onRemoveButtonClick(bank: Bank): void {   
    bank.status = false;
    this.selectedBanks = this.selectedBanks.filter((b: Bank) => {
      return b.id !== bank.id;
    });
  }

  // on clicking this route is changed and the data is passed to screentwo component, using service
  onProceed(){
    this.sharedService.setData(this.selectedBanks)
  }
}
