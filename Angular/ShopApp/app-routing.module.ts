import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdetailsComponent } from './pdetails/pdetails.component';
import { ProductsComponent } from './products/products.component';
import { VendorComponent } from './vendor/vendor.component';
import { WrongPathComponent } from './wrong-path/wrong-path.component';
const routes: Routes = [
  {path:"product", component: ProductsComponent},
  {path:'product/:id', component: PdetailsComponent},
  {path:"vendor", component: VendorComponent},
  {path:'',redirectTo:"/product", pathMatch:'full'},
  {path:"**", component:WrongPathComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
