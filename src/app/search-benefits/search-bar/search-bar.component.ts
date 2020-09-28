import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BenefitService } from 'src/app/services/benefits-service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @ViewChild('f', { static: false }) searchForm: NgForm;
  sources: any = [
    {id:1, itemName: 'ארגון המורים'},
    {id:2, itemName: 'חבר'},
    {id:3, itemName: 'ישראכרט'},
    {id:4, itemName: 'בהצדעה'}
  ];

  dropdownSettings = { 
    singleSelection: false, 
    text:"Select Source",
    selectAllText:'Select All',
    unSelectAllText:'UnSelect All',
    enableSearchFilter: true,
    classes:"col-md-5 search-box-item",
    badgeShowLimit: 2
  };    

  constructor(private benefitService: BenefitService){

  }
  ngOnInit() {
   
  }
  changeSelection($event)
  {
    console.log($event);
  }

  onSubmit(){
    console.log(this.searchForm);
    let searchKey = this.searchForm.form.controls.searchInput.value;
    let sources = this.searchForm.form.controls.sourceSelection.value.map(x=>x.id);
    console.log(searchKey);
    console.log(sources);
    this.benefitService.loadBenefits(searchKey,sources);
  }
}
