import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from '../core/spinner/spinner.component';
import { DefualtSearchResultsComponent } from './defualt-search-results/defualt-search-results.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchBenefitsRoutingModule } from './search-benefits-routing.module';
import { SearchBenefitsComponent } from './search-benefits.component';
import { BenefitResultComponent } from './benefit-result/benefit-result.component';
import { BenefitResultListComponent } from './benefit-result-list/benefit-result-list.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
    declarations:[
        SearchBarComponent,
        DefualtSearchResultsComponent,
        SearchBenefitsComponent,
        SpinnerComponent,
        BenefitResultComponent,
        BenefitResultListComponent
    ],
    imports:[
        CommonModule,
        RouterModule,
        SearchBenefitsRoutingModule,
        FormsModule,
        HttpClientModule
    ]
})
export class SearchBenefitsModule {}