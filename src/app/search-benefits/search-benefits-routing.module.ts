import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchBenefitsComponent } from './search-benefits.component';

const routes: Routes = [
    {
      path: '',
      component: SearchBenefitsComponent
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class SearchBenefitsRoutingModule {}
  