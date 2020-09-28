import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscribable, Subscription } from 'rxjs';
import { Benefit } from 'src/app/core/Benefit';
import { BenefitService } from 'src/app/services/benefits-service';

@Component({
  selector: 'app-benefit-result-list',
  templateUrl: './benefit-result-list.component.html',
  styleUrls: ['./benefit-result-list.component.css']
})
export class BenefitResultListComponent implements OnInit, OnDestroy {

  benefits:Benefit[] = null;
  benefitChangedSubscription : Subscription;
  constructor(private benefitService: BenefitService) {
   }
  ngOnDestroy(): void {
    if(this.benefitChangedSubscription)
        this.benefitChangedSubscription.unsubscribe();
    
  }

  ngOnInit(): void {
    this.benefitChangedSubscription = this.benefitService.benefitsChanged.subscribe(newBenefits=> {
      console.log('benefits changed');
      console.log(newBenefits);
      this.benefits = newBenefits});
  }

}
