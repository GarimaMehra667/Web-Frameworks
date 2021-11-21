import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { VendorComponent } from './vendor/vendor.component';
import { WrongPathComponent } from './wrong-path/wrong-path.component';
import { PdetailsComponent } from './pdetails/pdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    VendorComponent,
    WrongPathComponent,
    PdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
