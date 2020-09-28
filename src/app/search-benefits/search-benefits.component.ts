import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BenefitService } from '../services/benefits-service';

@Component({
  selector: 'app-search-benefits',
  templateUrl: './search-benefits.component.html',
  styleUrls: ['./search-benefits.component.css']
})
export class SearchBenefitsComponent implements OnInit, OnDestroy {
  isSearched: Boolean = false;
  isLoading : Boolean = false;
  isLoadingSubscription: Subscription;
  isSearchedSubscription: Subscription;
  constructor(private benefitService: BenefitService,private cdRef:ChangeDetectorRef) { }
 
  ngOnDestroy(): void {
    if(this.isSearchedSubscription)
        this.isSearchedSubscription.unsubscribe();
    
    if(this.isLoadingSubscription)
        this.isLoadingSubscription.unsubscribe();
    
    }

  ngOnInit(): void {
    this.isLoadingSubscription = this.benefitService.isLoading.subscribe(isLoadingChanged=> {
      console.log('isloading changed: searchBenefits component');
      console.log(isLoadingChanged);
      this.isLoading = isLoadingChanged
      console.log(`isLoadingNewValue: ${this.isLoading}`);
      });
      this.cdRef.detectChanges();
    this.isSearchedSubscription = this.benefitService.isSearched.subscribe(isSearchChanged=>{
      console.log('isSearchChanged changed: searchBenefits component');
      console.log(isSearchChanged);
      this.isSearched = isSearchChanged
      console.log(`isSearchedNewValue: ${this.isSearched}`);
    } );
    
  }

}
