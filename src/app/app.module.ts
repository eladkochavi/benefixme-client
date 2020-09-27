import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchBenefitsModule } from './search-benefits/search-benefits.module';
import { SpinnerComponent } from './core/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    SearchBenefitsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
