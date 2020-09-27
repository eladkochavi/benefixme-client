import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'', redirectTo:'/search', pathMatch: 'full'},
  {path:'search', loadChildren:'./search-benefits/search-benefits.module#SearchBenefitsModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
