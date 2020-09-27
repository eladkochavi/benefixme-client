import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-benefits',
  templateUrl: './search-benefits.component.html',
  styleUrls: ['./search-benefits.component.css']
})
export class SearchBenefitsComponent implements OnInit {
  isSearched: Boolean = true;
  isLoading : Boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
